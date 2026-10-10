import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "./App";
import siteSeo from "./lib/site-seo.json";
import { routeDefinitions } from "./lib/route-config";

const routeHeadings: Record<string, string | RegExp> = {
  "/": /Um só grupo/,
  "/marcas/apple": "Plug Apple",
  "/marcas/gold": "Plug Gold",
  "/marcas/clean": "Plug Clean",
  "/marcas/deliveries": "Plug Entregas",
  "/marcas/games": "Plug Games",
  "/marcas/works": "Plug Obras",
  "/marcas/food": "Plug Food",
  "/marcas/motors": "Plug Motors",
  "/marcas/money": "Plug Money",
  "/marcas/drip": "Plug Drip",
  "/marcas/equipa": "Plug Equipa",
};

function renderRoute(path: string, basename = "/") {
  return render(
    <MemoryRouter basename={basename} initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>
  );
}

afterEach(() => {
  cleanup();
  document.documentElement.classList.remove("js-motion");
  vi.restoreAllMocks();
});

describe("rotas da aplicação", () => {
  it("mantém a lista SEO sincronizada com as rotas navegáveis", () => {
    const appPaths = routeDefinitions.map(({ path }) => path).filter((path) => path !== "/inicio");
    expect(new Set(appPaths)).toEqual(new Set(siteSeo.routes.map((route) => route.path)));
  });

  it.each(Object.entries(routeHeadings))(
    "renderiza conteúdo HTML para %s",
    async (path, heading) => {
      vi.spyOn(window, "scrollTo").mockImplementation(() => {});
      renderRoute(path);
      expect(await screen.findByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
    }
  );

  it("renderiza a página inicial no caminho legado /inicio", async () => {
    vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    renderRoute("/inicio");
    expect(
      await screen.findByRole("heading", { level: 1, name: /Um só grupo/ })
    ).toBeInTheDocument();
  });

  it("respeita o base path do GitHub Pages em links directos", async () => {
    vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    renderRoute("/Plug/marcas/apple", "/Plug");
    expect(
      await screen.findByRole("heading", { level: 1, name: "Plug Apple" })
    ).toBeInTheDocument();
  });

  it("mostra uma página 404 para caminhos desconhecidos", async () => {
    vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    renderRoute("/rota-inexistente");
    expect(
      await screen.findByRole("heading", { level: 1, name: "Esta página não foi encontrada." })
    ).toBeInTheDocument();
  });
});
