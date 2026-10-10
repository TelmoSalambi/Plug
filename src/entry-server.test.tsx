// @vitest-environment node

import { describe, expect, it } from "vitest";
import { renderStaticRoute } from "./entry-server";

describe("static route rendering", () => {
  it("renders the home page and returns resource hints outside the root markup", async () => {
    const { markup, resourceHints } = await renderStaticRoute("/");

    expect(markup).toContain("<h1");
    expect(markup).not.toContain('rel="preload"');
    expect(resourceHints).toContain('rel="preload"');
  });

  it("renders the not-found page for an unknown route", async () => {
    const { markup } = await renderStaticRoute("/rota-inexistente");

    expect(markup).toContain("Esta página não foi encontrada.");
  });
});
