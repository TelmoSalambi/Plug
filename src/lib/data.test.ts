import { describe, expect, it } from "vitest";
import {
  WHATSAPP,
  WHATSAPP_LIST,
  cleanPrices,
  formatPhone,
  provinces,
  waLink,
  faqs,
  goldItems,
  brands,
} from "./data";

describe("WHATSAPP", () => {
  it("contém apenas dígitos", () => {
    expect(WHATSAPP).toMatch(/^\d{10,15}$/);
  });

  it("usa o código de país de Angola por omissão", () => {
    expect(WHATSAPP.startsWith("244")).toBe(true);
  });

  it("WHATSAPP_LIST tem pelo menos um número válido", () => {
    expect(WHATSAPP_LIST.length).toBeGreaterThan(0);
    for (const n of WHATSAPP_LIST) {
      expect(n).toMatch(/^\d{10,15}$/);
      expect(n.startsWith("244")).toBe(true);
    }
  });

  it("WHATSAPP é o primeiro da lista", () => {
    expect(WHATSAPP).toBe(WHATSAPP_LIST[0]);
  });
});

describe("waLink", () => {
  it("gera o link wa.me com o número e o texto codificado", () => {
    const msg = "Olá, tudo bem?";
    expect(waLink(msg)).toBe(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`);
  });

  it("permite usar um número alternativo", () => {
    const alt = WHATSAPP_LIST[1] ?? WHATSAPP;
    expect(waLink("oi", alt)).toContain(alt);
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

  it("FAQs cobrem tópicos essenciais", () => {
    const all = faqs.map((f) => f.q).join(" ");
    expect(all).toMatch(/ouro/i);
    expect(all).toMatch(/garantia/i);
    expect(all).toMatch(/limpeza/i);
    expect(faqs.length).toBeGreaterThanOrEqual(5);
  });

  it("goldItems inclui 'Mascotes' e 'Pedaços' (dos flyers reais)", () => {
    expect(goldItems).toContain("Mascotes");
    expect(goldItems).toContain("Pedaços");
  });

  it("existem as 11 marcas do grupo", () => {
    const ids = brands.map((b) => b.id);
    expect(ids).toEqual(
      expect.arrayContaining([
        "apple",
        "gold",
        "deliveries",
        "games",
        "works",
        "food",
        "motors",
        "money",
        "drip",
        "equipa",
        "clean",
      ])
    );
    expect(brands).toHaveLength(11);
  });

  it("3 marcas principais estão em destaque (featured)", () => {
    const featured = brands.filter((b) => b.featured);
    expect(featured.map((b) => b.id).sort()).toEqual(["apple", "clean", "gold"]);
  });
});
