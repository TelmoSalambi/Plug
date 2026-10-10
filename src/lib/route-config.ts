import type { ComponentType } from "react";
import type { BrandKey } from "./data";

type PageModule = { default: ComponentType };
type PageLoader = () => Promise<PageModule>;

const loadBrandPage =
  (id: BrandKey): PageLoader =>
  async () => {
    const { createBrandPage } = await import("../pages/BrandPlaceholder");
    return { default: createBrandPage(id) };
  };

// Keep browser routing and static prerendering in sync through one route table.
export const routeDefinitions: { path: string; load: PageLoader }[] = [
  { path: "/", load: () => import("../pages/Home") },
  // Legacy path retained for bookmarks; it renders the home page with its canonical URL.
  { path: "/inicio", load: () => import("../pages/Home") },
  { path: "/marcas/apple", load: () => import("../pages/Apple") },
  { path: "/marcas/gold", load: () => import("../pages/Gold") },
  { path: "/marcas/clean", load: () => import("../pages/Clean") },
  { path: "/marcas/deliveries", load: loadBrandPage("deliveries") },
  { path: "/marcas/games", load: loadBrandPage("games") },
  { path: "/marcas/works", load: loadBrandPage("works") },
  { path: "/marcas/food", load: loadBrandPage("food") },
  { path: "/marcas/motors", load: loadBrandPage("motors") },
  { path: "/marcas/money", load: loadBrandPage("money") },
  { path: "/marcas/drip", load: loadBrandPage("drip") },
  { path: "/marcas/equipa", load: loadBrandPage("equipa") },
];

export const notFoundLoader: PageLoader = () => import("../pages/NotFound");
