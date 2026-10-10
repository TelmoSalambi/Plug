import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import CleanPage from "./Clean";

function renderClean() {
  return render(
    <MemoryRouter>
      <CleanPage />
    </MemoryRouter>
  );
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Plug Clean price actions", () => {
  it("opens a WhatsApp quote with the selected service", () => {
    const open = vi.spyOn(window, "open").mockImplementation(() => null);
    renderClean();

    const quoteButton = screen.getByRole("button", { name: "Marcar Cadeira" });
    expect(quoteButton.parentElement).toHaveClass("opacity-100");
    expect(quoteButton.parentElement).not.toHaveClass("sm:opacity-0");
    fireEvent.click(quoteButton);

    expect(open).toHaveBeenCalledWith(
      expect.stringContaining("https://wa.me/"),
      "_blank",
      "noreferrer"
    );
    expect(decodeURIComponent(open.mock.calls[0][0] as string)).toContain("limpeza de cadeira");
  });

  it("copies a price and announces the successful action", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    renderClean();

    fireEvent.click(screen.getByRole("button", { name: "Copiar preço de Cadeira" }));

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Preço de Cadeira copiado" })).toBeInTheDocument()
    );
    expect(writeText).toHaveBeenCalledWith("Cadeira — 1.500 Kz");
  });
});
