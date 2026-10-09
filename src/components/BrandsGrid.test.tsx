import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { BrandsGrid } from "./BrandsGrid";

function renderBrands() {
  return render(
    <MemoryRouter>
      <BrandsGrid />
    </MemoryRouter>
  );
}

describe("BrandsGrid", () => {
  it("shows all brands when the search is empty", () => {
    renderBrands();
    expect(screen.getByText("11 marcas disponíveis")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /Saiba mais sobre/ })).toHaveLength(11);
  });

  it("filters by a service while ignoring accents", () => {
    renderBrands();
    fireEvent.change(screen.getByRole("searchbox", { name: "Encontrar uma marca ou serviço" }), {
      target: { value: "tecnica" },
    });

    expect(screen.getByRole("link", { name: /Plug Apple/ })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /Plug Clean/ })).not.toBeInTheDocument();
    expect(screen.getByText("1 marca encontrada")).toBeInTheDocument();
  });

  it("offers a reset when no mark matches", () => {
    renderBrands();
    fireEvent.change(screen.getByRole("searchbox", { name: "Encontrar uma marca ou serviço" }), {
      target: { value: "nada corresponde" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Mostrar todas as marcas" }));
    expect(screen.getAllByRole("link", { name: /Saiba mais sobre/ })).toHaveLength(11);
  });
});
