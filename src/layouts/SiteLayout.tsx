import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import siteSeo from "../lib/site-seo.json";
import { WHATSAPP } from "../lib/data";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";

const SITE_URL = import.meta.env.VITE_SITE_URL || siteSeo.siteUrl;
const ROOT_URL = new URL(SITE_URL.endsWith("/") ? SITE_URL : `${SITE_URL}/`);
const OG_IMAGE = new URL(siteSeo.ogImage, ROOT_URL).href;

function updateMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function canonicalUrl(pathname: string) {
  if (pathname === "/" || pathname === "/inicio") return ROOT_URL.href;
  return new URL(`${pathname.replace(/^\/+|\/+$/g, "")}/`, ROOT_URL).href;
}

export function SiteLayout() {
  const { pathname, hash } = useLocation();
  const routePath = pathname === "/inicio" ? "/" : pathname.replace(/\/+$/, "") || "/";
  const page = siteSeo.routes.find((route) => route.path === routePath);
  const isNotFound = !page;
  const title = isNotFound
    ? "Página não encontrada | Grupo Plug Business"
    : (page?.title ?? siteSeo.routes[0].title);
  const description = isNotFound
    ? "O endereço que procura não foi encontrado. Visite o Grupo Plug Business e conheça as nossas marcas."
    : (page?.description ?? siteSeo.routes[0].description);
  const canonical = isNotFound ? null : canonicalUrl(routePath);

  useEffect(() => {
    let frame = 0;
    let attempts = 0;
    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const targetId = hash.slice(1);
    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        return;
      }
      if (attempts < 90) {
        attempts += 1;
        frame = window.requestAnimationFrame(scrollToTarget);
      }
    };

    frame = window.requestAnimationFrame(scrollToTarget);
    return () => window.cancelAnimationFrame(frame);
  }, [hash, pathname]);

  useEffect(() => {
    document.title = title;
    updateMeta("name", "description", description);
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", canonical ?? window.location.href);
    updateMeta("name", "robots", isNotFound ? "noindex, nofollow" : "index, follow");
    updateMeta("property", "og:image", OG_IMAGE);
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", OG_IMAGE);

    let canonicalElement = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalElement) {
        canonicalElement = document.createElement("link");
        canonicalElement.rel = "canonical";
        document.head.appendChild(canonicalElement);
      }
      canonicalElement.href = canonical;
    } else {
      canonicalElement?.remove();
    }

    const jsonLd = document.head.querySelector<HTMLScriptElement>(
      'script[type="application/ld+json"]'
    );
    if (jsonLd) {
      try {
        const schema = JSON.parse(jsonLd.textContent ?? "{}") as Record<string, unknown>;
        schema.url = ROOT_URL.href;
        schema.image = OG_IMAGE;
        schema.telephone = `+${WHATSAPP}`;
        jsonLd.textContent = JSON.stringify(schema);
      } catch {
        // O conteúdo estático do JSON-LD continua disponível se não puder ser actualizado.
      }
    }
  }, [canonical, description, isNotFound, title]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-stone-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#F0C94A] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0A0A0A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        Ir para o conteúdo principal
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <div key={pathname} className="page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
