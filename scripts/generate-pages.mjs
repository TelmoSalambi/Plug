import { mkdir, readFile, writeFile } from "node:fs/promises";
import { log } from "node:console";
import path from "node:path";
import process from "node:process";
import { URL, fileURLToPath } from "node:url";
import { loadEnv } from "vite";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const distDir = path.join(projectRoot, "dist");
const routeConfig = JSON.parse(
  await readFile(path.join(projectRoot, "src/lib/site-seo.json"), "utf8")
);
const viteEnv = loadEnv("production", projectRoot, "VITE_");
const env = { ...viteEnv, ...process.env };

function normalizeSiteUrl(value) {
  const url = new URL(value);
  if (!url.pathname.endsWith("/")) url.pathname += "/";
  return url;
}

function escapeAttribute(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function setMeta(html, attribute, key, content) {
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"[^>]*\\/?\\s*>`, "i");
  const tag = `<meta ${attribute}="${key}" content="${escapeAttribute(content)}" />`;
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `    ${tag}\n  </head>`);
}

function setCanonical(html, url) {
  const pattern = /<link\s+rel="canonical"[^>]*\/?\s*>/i;
  const tag = `<link rel="canonical" href="${escapeAttribute(url)}" />`;
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `    ${tag}\n  </head>`);
}

function setTitle(html, title) {
  const tag = `<title>${escapeAttribute(title)}</title>`;
  return /<title>[\s\S]*?<\/title>/i.test(html)
    ? html.replace(/<title>[\s\S]*?<\/title>/i, tag)
    : html.replace("</head>", `    ${tag}\n  </head>`);
}

const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL ?? routeConfig.siteUrl);
const ogImage = new URL(routeConfig.ogImage, siteUrl).href;
const defaultPhone = "244941216095,244940986180";
const phoneNumber =
  String(env.VITE_WHATSAPP_NUMBER ?? defaultPhone)
    .split(",")[0]
    .replace(/\D/g, "") || "244941216095";

function canonicalFor(route) {
  if (route.path === "/") return siteUrl.href;
  return new URL(`${route.path.replace(/^\/+|\/+$/g, "")}/`, siteUrl).href;
}

function applyRouteMetadata(template, route) {
  const canonicalUrl = canonicalFor(route);
  let html = setTitle(template, route.title);
  html = setMeta(html, "name", "description", route.description);
  html = setMeta(html, "property", "og:title", route.title);
  html = setMeta(html, "property", "og:description", route.description);
  html = setMeta(html, "property", "og:url", canonicalUrl);
  html = setMeta(html, "property", "og:image", ogImage);
  html = setMeta(html, "name", "twitter:title", route.title);
  html = setMeta(html, "name", "twitter:description", route.description);
  html = setMeta(html, "name", "twitter:image", ogImage);
  html = setCanonical(html, canonicalUrl);

  const jsonLdPattern = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/i;
  const match = html.match(jsonLdPattern);
  if (match) {
    try {
      const localBusiness = JSON.parse(match[1]);
      localBusiness.url = siteUrl.href;
      localBusiness.image = ogImage;
      localBusiness.telephone = `+${phoneNumber}`;
      html = html.replace(
        jsonLdPattern,
        `<script type="application/ld+json">\n${JSON.stringify(localBusiness, null, 2)}\n    </script>`
      );
    } catch (error) {
      throw new Error(`JSON-LD inválido ao gerar ${route.path}: ${error.message}`, {
        cause: error,
      });
    }
  }

  return html;
}

let template = await readFile(path.join(distDir, "index.html"), "utf8");
const faviconUrl = new URL("favicon.jpg", siteUrl).href;
template = template.replace(/href="[^"]*favicon\.jpg"/i, `href="${faviconUrl}"`);

for (const route of routeConfig.routes) {
  const html = applyRouteMetadata(template, route);
  if (route.path === "/") {
    await writeFile(path.join(distDir, "index.html"), html);
    continue;
  }

  const routeDirectory = path.join(distDir, ...route.path.split("/").filter(Boolean));
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(path.join(routeDirectory, "index.html"), html);
}

const homeRoute = routeConfig.routes.find((route) => route.path === "/");
const aliasDirectory = path.join(distDir, "inicio");
await mkdir(aliasDirectory, { recursive: true });
await writeFile(path.join(aliasDirectory, "index.html"), applyRouteMetadata(template, homeRoute));

let notFoundHtml = applyRouteMetadata(template, {
  path: "/",
  title: "Página não encontrada | Grupo Plug Business",
  description: "A página que procura não foi encontrada. Volte ao Grupo Plug Business.",
});
notFoundHtml = notFoundHtml.replace(/<link rel="canonical"[^>]*\/?\s*>/i, "");
notFoundHtml = setMeta(notFoundHtml, "name", "robots", "noindex, nofollow");
await writeFile(path.join(distDir, "404.html"), notFoundHtml);

const sitemapEntries = routeConfig.routes
  .map((route) => {
    const priority = route.path === "/" ? "1.0" : "0.8";
    return `  <url>\n    <loc>${escapeXml(canonicalFor(route))}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
await writeFile(path.join(distDir, "sitemap.xml"), sitemap);
await writeFile(
  path.join(distDir, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap.xml", siteUrl).href}\n`
);

log(`Generated ${routeConfig.routes.length} SEO route pages for ${siteUrl.href}`);
