import { describe, expect, it } from "vitest";
import siteSeo from "./site-seo.json";

describe("SEO estático", () => {
  it("define metadados completos para a página inicial e para as 11 marcas", () => {
    expect(siteSeo.routes).toHaveLength(12);
    expect(siteSeo.routes.map((route) => route.path)).toContain("/");
    expect(new Set(siteSeo.routes.map((route) => route.path)).size).toBe(12);

    for (const route of siteSeo.routes) {
      expect(route.title.trim()).not.toBe("");
      expect(route.description.trim().length).toBeGreaterThan(40);
      expect(route.description.length).toBeLessThanOrEqual(180);
    }
  });

  it("usa uma URL de produção absoluta com barra final", () => {
    const siteUrl = new URL(siteSeo.siteUrl);
    expect(siteUrl.protocol).toBe("https:");
    expect(siteUrl.pathname.endsWith("/")).toBe(true);
  });
});
