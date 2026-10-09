import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./SiteLayout";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("SiteLayout metadata", () => {
  it("actualiza o título e a descrição para uma rota de marca com barra final", () => {
    vi.spyOn(window, "scrollTo").mockImplementation(() => {});

    render(
      <MemoryRouter initialEntries={["/marcas/gold/"]}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/marcas/gold" element={<h1>Conteúdo Plug Gold</h1>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Conteúdo Plug Gold" })).toBeInTheDocument();
    expect(document.title).toBe("Plug Gold | Compra e troca de ouro");
    expect(
      document.head.querySelector('meta[name="description"]')?.getAttribute("content")
    ).toContain("Plug Gold");
  });
});
