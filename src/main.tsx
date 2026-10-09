/* eslint-disable react-refresh/only-export-components -- This entry module intentionally declares route-level lazy components. */
import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import type { BrandKey } from "./lib/data";
import "./index.css";
import { SiteLayout } from "./layouts/SiteLayout";

const Home = lazy(() => import("./pages/Home"));
const ApplePage = lazy(() => import("./pages/Apple"));
const GoldPage = lazy(() => import("./pages/Gold"));
const CleanPage = lazy(() => import("./pages/Clean"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function lazyBrandPage(id: BrandKey) {
  return lazy(async () => {
    const { createBrandPage } = await import("./pages/BrandPlaceholder");
    return { default: createBrandPage(id) };
  });
}

const DeliveriesPage = lazyBrandPage("deliveries");
const GamesPage = lazyBrandPage("games");
const WorksPage = lazyBrandPage("works");
const FoodPage = lazyBrandPage("food");
const MotorsPage = lazyBrandPage("motors");
const MoneyPage = lazyBrandPage("money");
const DripPage = lazyBrandPage("drip");
const EquipaPage = lazyBrandPage("equipa");
const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const basename = basePath || "/";

// Preserve bookmarks created by the former HashRouter routes.
if (window.location.hash.startsWith("#/")) {
  window.history.replaceState(null, "", `${basePath}${window.location.hash.slice(1)}`);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
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
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Navigate to="/" replace />} />
            <Route path="/marcas/apple" element={<ApplePage />} />
            <Route path="/marcas/gold" element={<GoldPage />} />
            <Route path="/marcas/clean" element={<CleanPage />} />
            <Route path="/marcas/deliveries" element={<DeliveriesPage />} />
            <Route path="/marcas/games" element={<GamesPage />} />
            <Route path="/marcas/works" element={<WorksPage />} />
            <Route path="/marcas/food" element={<FoodPage />} />
            <Route path="/marcas/motors" element={<MotorsPage />} />
            <Route path="/marcas/money" element={<MoneyPage />} />
            <Route path="/marcas/drip" element={<DripPage />} />
            <Route path="/marcas/equipa" element={<EquipaPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
