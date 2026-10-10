import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { SiteLayout } from "./layouts/SiteLayout";
import { notFoundLoader, routeDefinitions } from "./lib/route-config";

const lazyRoutes = routeDefinitions.map(({ path, load }) => ({ path, Page: lazy(load) }));
const NotFoundPage = lazy(notFoundLoader);

export function AppRoutes() {
  return (
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
          {lazyRoutes.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
