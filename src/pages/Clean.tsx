import { brands, cleanServices, cleanPrices, waLink, img } from "../lib/data";
import { BrandHero, BrandSection } from "../components/BrandHero";
import { Icon, type IconKey } from "../components/Icon";
import { useReveal } from "../hooks/useReveal";
import { cn } from "../utils/cn";
import { useState } from "react";

const brand = brands.find((b) => b.id === "clean")!;

function priceIcon(item: string) {
  if (item.includes("Sofá")) return Icon.Sofa;
  if (item.includes("Poltrona")) return Icon.Sofa;
  if (item.includes("viatura")) return Icon.Car;
  if (item.includes("Colchão")) return Icon.Bed;
  return Icon.Chair;
}

export default function CleanPage() {
  useReveal();
  const [copied, setCopied] = useState<string | null>(null);

  const handleQuote = (item: string) =>
    window.open(
      waLink(
        `Olá! Quero marcar limpeza de ${item.toLowerCase()} com a Plug Clean. Qual a disponibilidade?`
      ),
      "_blank",
      "noreferrer"
    );

  const copy = async (item: string, price: string) => {
    try {
      await navigator.clipboard.writeText(`${item} — ${price} Kz`);
      setCopied(item);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <BrandHero brand={brand} extraImage={img.cleanWindow}>
        <p
          className="hero-in mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-400"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="flex items-center gap-2">
            <Icon.Sparkles size={16} style={{ color: brand.accent }} /> Lavagem a seco profissional
          </span>
          <span className="flex items-center gap-2">
            <Icon.Car size={16} style={{ color: brand.accent }} /> Deslocação até si
          </span>
          <span className="flex items-center gap-2">
            <Icon.Cash size={16} style={{ color: brand.accent }} /> Preços fixos em Kz
          </span>
        </p>
      </BrandHero>

      {/* Serviços */}
      <BrandSection brand={brand} eyebrow="Serviços" title="Limpeza profissional ao domicílio">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cleanServices.map((c, i) => {
            const Ico = Icon[c.icon as IconKey];
            return (
              <div
                key={c.title}
                className="reveal group overflow-hidden rounded-2xl border bg-white/[0.02] transition hover:-translate-y-1"
                style={{ borderColor: `${brand.accent}30`, transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="flex h-40 items-center justify-center"
                  style={{
                    background: `linear-gradient(to bottom, ${brand.accent}15, transparent)`,
                  }}
                >
                  <Ico size={64} style={{ color: brand.accent }} />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-stone-400">{c.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </BrandSection>

      {/* Tabela de preços */}
      <BrandSection brand={brand} eyebrow="Preços" title="Tabela fixa em kwanzas">
        <p className="mb-8 text-stone-400">
          Valores em Kz. Toque no WhatsApp ao lado de cada item para marcar directamente.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cleanPrices.map((p, i) => {
            const Ico = priceIcon(p.item);
            const isCopied = copied === p.item;
            return (
              <div
                key={p.item}
                className="reveal group flex items-center justify-between gap-4 rounded-2xl border bg-white/[0.02] px-6 py-5 transition"
                style={{ borderColor: `${brand.accent}25`, transitionDelay: `${i * 40}ms` }}
              >
                <span className="flex items-center gap-3 text-sm font-medium text-stone-200">
                  <Ico size={20} style={{ color: brand.accent }} />
                  {p.item}
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-display text-lg font-bold text-[#F0C94A]">
                    {p.price} <span className="text-xs text-stone-500">Kz</span>
                  </span>
                  <div className="flex opacity-0 transition group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={() => handleQuote(p.item)}
                      aria-label={`Marcar ${p.item}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition hover:bg-[#25D366]/20"
                    >
                      <Icon.WhatsApp size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => copy(p.item, p.price)}
                      aria-label="Copiar preço"
                      className={cn(
                        "ml-1 flex h-9 w-9 items-center justify-center rounded-full border text-[#4fd1c5] transition",
                        isCopied
                          ? "border-[#F0C94A] text-[#F0C94A]"
                          : "border-[#4fd1c5]/30 hover:bg-[#4fd1c5]/10"
                      )}
                    >
                      {isCopied ? <Icon.Check size={16} /> : <Icon.Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <a
          href={waLink(brand.whatsappMsg)}
          target="_blank"
          rel="noreferrer"
          className="reveal mt-10 inline-flex items-center gap-2 rounded-full border px-7 py-3.5 font-semibold transition hover:bg-white/5"
          style={{ borderColor: brand.accent, color: brand.accent }}
        >
          <Icon.Sparkles size={20} /> Marcar serviço de limpeza
        </a>
      </BrandSection>

      {/* Galeria real */}
      <BrandSection brand={brand} eyebrow="Galeria" title="Trabalhos reais da nossa equipa">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { src: img.cleanWindow, label: "Limpeza de vidros · Pós-obra" },
            { src: img.cleanExtraction, label: "Higienização de estofados" },
            { src: img.cleanMattress, label: "Tratamento de colchões" },
            { src: img.cleanChairs, label: "Limpeza de cadeiras" },
          ].map((g, i) => (
            <figure
              key={g.label}
              className="reveal group relative overflow-hidden rounded-2xl border"
              style={{
                borderColor: `${brand.accent}25`,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <img
                src={g.src}
                alt={g.label}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption
                className="absolute inset-x-0 bottom-0 flex items-end p-4 text-sm font-semibold text-white"
                style={{
                  background: `linear-gradient(to top, rgba(0,0,0,0.75), transparent)`,
                }}
              >
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </BrandSection>
    </>
  );
}
