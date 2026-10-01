import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import { SiteLayout } from "./layouts/SiteLayout";
import Home from "./pages/Home";
import ApplePage from "./pages/Apple";
import GoldPage from "./pages/Gold";
import CleanPage from "./pages/Clean";
import { createBrandPage } from "./pages/BrandPlaceholder";

// Páginas das outras marcas geradas via factory
const DeliveriesPage = createBrandPage("deliveries");
const GamesPage = createBrandPage("games");
const WorksPage = createBrandPage("works");
const FoodPage = createBrandPage("food");
const MotorsPage = createBrandPage("motors");
const MoneyPage = createBrandPage("money");
const DripPage = createBrandPage("drip");
const EquipaPage = createBrandPage("equipa");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
