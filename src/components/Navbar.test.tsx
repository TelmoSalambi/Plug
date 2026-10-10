import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Navbar } from "./Navbar";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Navbar mobile", () => {
  it("abre o menu, expõe o estado e fecha com Escape devolvendo o foco", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const toggle = screen.getByRole("button", { name: "Abrir menu de navegação" });
    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(document.getElementById("mobile-menu")).toHaveAttribute("aria-hidden", "false");

    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.getByRole("button", { name: "Abrir menu de navegação" })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    expect(toggle).toHaveFocus();
  });
});
