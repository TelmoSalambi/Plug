import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";

describe("Footer map privacy", () => {
  it("does not load OpenStreetMap until the visitor requests the interactive map", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(
      screen.queryByTitle("Localização do Grupo Plug Business no Lubango")
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Carregar mapa interactivo" }));

    expect(screen.getByTitle("Localização do Grupo Plug Business no Lubango")).toHaveAttribute(
      "src",
      expect.stringContaining("openstreetmap.org/export/embed.html")
    );
  });
});
