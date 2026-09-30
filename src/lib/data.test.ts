import { describe, expect, it } from "vitest";
import { WHATSAPP, cleanPrices, formatPhone, provinces, waLink } from "./data";

describe("WHATSAPP", () => {
  it("contém apenas dígitos", () => {
    expect(WHATSAPP).toMatch(/^\d{10,15}$/);
  });

  it("usa o código de país de Angola por omissão", () => {
    expect(WHATSAPP.startsWith("244")).toBe(true);
  });
});

describe("waLink", () => {
  it("gera o link wa.me com o número e o texto codificado", () => {
    const msg = "Olá, tudo bem?";
    expect(waLink(msg)).toBe(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`);
  });

  it("codifica espaços e acentos", () => {
    expect(waLink("só ouro")).toContain("s%C3%B3%20ouro");
  });

  it("não deixa espaços por codificar", () => {
    expect(waLink("quero vender ouro")).not.toContain(" ");
  });
});

describe("formatPhone", () => {
  it("formata um número angolano para exibição", () => {
    expect(formatPhone("244900000000")).toBe("+244 900 000 000");
  });

  it("devolve o valor original quando o formato não corresponde", () => {
    expect(formatPhone("123")).toBe("123");
  });
});

describe("dados da landing", () => {
  it("lista 4 províncias", () => {
    expect(provinces).toEqual(["Lubango", "Namibe", "Benguela", "Luanda"]);
  });

  it("tabela de preços tem item e preço em todos os registos", () => {
    expect(cleanPrices.length).toBeGreaterThan(0);
    for (const row of cleanPrices) {
      expect(row.item).toBeTruthy();
      expect(row.price).toMatch(/^\d{1,3}(\.\d{3})*$/);
    }
  });
});
