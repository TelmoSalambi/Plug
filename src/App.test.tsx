import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import Home from "./pages/Home";

function renderHome() {
  return render(
    <HashRouter>
      <Home />
    </HashRouter>
  );
}

describe("Home page", () => {
  it("renderiza o título principal", () => {
    renderHome();
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Um só grupo");
  });

  it("exibe as 11 marcas do grupo", () => {
    renderHome();
    const brands = [
      "Plug Apple",
      "Plug Gold",
      "Plug Clean",
      "Plug Entregas",
      "Plug Games",
      "Plug Obras",
      "Plug Food",
      "Plug Motors",
      "Plug Money",
      "Plug Drip",
      "Plug Equipa",
    ];
    for (const name of brands) {
      expect(screen.getAllByText(new RegExp(name, "i")).length).toBeGreaterThan(0);
    }
  });

  it("disponibiliza ligações para WhatsApp", () => {
    renderHome();
    const links = screen
      .getAllByRole("link")
      .filter((l) => (l.getAttribute("href") ?? "").startsWith("https://wa.me/"));
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link.getAttribute("href")).toMatch(/^https:\/\/wa\.me\/\d+/);
    }
  });

  it("contém link 'Ver as 11 marcas'", () => {
    renderHome();
    expect(screen.getByText(/Ver as 11 marcas/i)).toBeTruthy();
  });

  it("mostra a secção de testemunhos", () => {
    renderHome();
    expect(screen.getByText(/Clientes satisfeitos/i)).toBeTruthy();
  });
});
