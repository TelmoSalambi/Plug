import { brands, cleanServices, cleanPrices, waLink, brandGallery } from "../lib/data";
import { BrandHero, BrandSection, BrandGallery } from "../components/BrandHero";
import { Icon } from "../components/Icon";
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
      <BrandHero brand={brand}>
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
      <BrandSection
        brand={brand}
        id="servicos"
        eyebrow="Serviços"
        title="Limpeza profissional ao domicílio"
        description="Escolha o tipo de limpeza. Para confirmar disponibilidade e agendar, fale connosco pelo WhatsApp."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cleanServices.map((c, i) => {
            const Ico = Icon[c.icon];
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
      <BrandSection
        brand={brand}
        id="precos"
        eyebrow="Preços"
        title="Tabela fixa em kwanzas"
        description="Valores por peça ou serviço, em Kz. Use o botão ao lado do preço para pedir uma marcação directamente à equipa."
      >
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
                    {p.price} <span className="text-xs text-stone-400">Kz</span>
                  </span>
                  <div className="flex opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
                    <button
                      type="button"
                      onClick={() => handleQuote(p.item)}
                      aria-label={`Marcar ${p.item}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition hover:bg-[#25D366]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                    >
                      <Icon.WhatsApp size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => copy(p.item, p.price)}
                      aria-label={
                        isCopied ? `Preço de ${p.item} copiado` : `Copiar preço de ${p.item}`
                      }
                      className={cn(
                        "ml-1 flex h-9 w-9 items-center justify-center rounded-full border text-[#4fd1c5] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4fd1c5]",
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
          className="button-primary reveal mt-8"
        >
          <Icon.Sparkles size={20} /> Marcar serviço de limpeza
        </a>
      </BrandSection>

      {/* Galeria real */}
      <BrandSection
        brand={brand}
        id="galeria"
        eyebrow="Galeria"
        title="Trabalhos reais da nossa equipa"
      >
        <BrandGallery brand={brand} photos={brandGallery.clean} />
      </BrandSection>
    </>
  );
}
