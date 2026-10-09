import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { brands } from "../lib/data";
import { BrandHero } from "./BrandHero";

describe("BrandHero", () => {
  it("apresenta a marca sem imagem de banner", () => {
    const { container } = render(
      <MemoryRouter>
        <BrandHero brand={brands[0]} />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { level: 1, name: "Plug Apple" })).toBeInTheDocument();
    expect(container.querySelector("img")).toBeNull();
  });
});
