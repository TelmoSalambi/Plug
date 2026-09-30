import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renderiza o título principal", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Um só grupo");
  });

  it("exibe as três áreas do grupo", () => {
    render(<App />);
    expect(screen.getAllByText("Tecnologia").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Ourivesaria").length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Plug Clean/).length).toBeGreaterThan(0);
  });

  it("disponibiliza ligações para WhatsApp", () => {
    render(<App />);
    const links = screen.getAllByRole("link", { name: /whatsapp/i });
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link.getAttribute("href")).toMatch(/^https:\/\/wa\.me\/\d+/);
    }
  });
});
