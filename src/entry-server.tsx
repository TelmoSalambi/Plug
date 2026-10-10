import { Suspense } from "react";
import { renderToString } from "react-dom/server";
import { Route, Routes, StaticRouter } from "react-router-dom";
import { SiteLayout } from "./layouts/SiteLayout";
import { notFoundLoader, routeDefinitions } from "./lib/route-config";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

function locationWithBase(path: string) {
  if (basePath === "/") return path;
  return `${basePath}${path === "/" ? "/" : path}`;
}

export async function renderStaticRoute(pathname: string) {
  const route = routeDefinitions.find((candidate) => candidate.path === pathname);
  const pageModule = route ? await route.load() : await notFoundLoader();
  const Page = pageModule.default;

  const rendered = renderToString(
    <StaticRouter basename={basePath} location={locationWithBase(pathname)}>
      <Suspense
        fallback={
          <div
            className="flex min-h-screen items-center justify-center bg-[#0A0A0A] text-stone-300"
            role="status"
          >
            A carregar…
          </div>
        }
      >
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path={route?.path ?? "*"} element={<Page />} />
          </Route>
        </Routes>
      </Suspense>
    </StaticRouter>
  );

  const resourceHints: string[] = [];
  const markup = rendered.replace(/<link rel="preload"[^>]*\/>/g, (hint) => {
    resourceHints.push(hint);
    return "";
  });
  return { markup, resourceHints: resourceHints.join("\n") };
}
