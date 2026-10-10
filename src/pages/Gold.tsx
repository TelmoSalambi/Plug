import { brands, img, goldItems, waLink, brandGallery } from "../lib/data";
import { BrandHero, BrandSection, BrandGallery } from "../components/BrandHero";
import { Icon } from "../components/Icon";
import { useReveal } from "../hooks/useReveal";

const brand = brands.find((b) => b.id === "gold")!;

const features = [
  { icon: "Scale", text: "Acompanhe a avaliação das suas peças" },
  { icon: "Cash", text: "Confirme o valor e as condições antes de decidir" },
  { icon: "Car", text: "Consulte as condições de atendimento ao domicílio" },
  { icon: "Handshake", text: "Pergunte sobre opções de troca por iPhone" },
] as const;

export default function GoldPage() {
  useReveal();
  return (
    <>
      <BrandHero brand={brand}>
        <p
          className="hero-in mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-400"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="flex items-center gap-2">
            <Icon.Clock size={16} style={{ color: brand.accent }} /> Avaliação de ouro
          </span>
          <span className="flex items-center gap-2">
            <Icon.Car size={16} style={{ color: brand.accent }} /> Atendimento ao domicílio
          </span>
          <span className="flex items-center gap-2">
            <Icon.Shield size={16} style={{ color: brand.accent }} /> Condições explicadas
          </span>
        </p>
      </BrandHero>

      {/* Colagem de fotos */}
      <BrandSection
        brand={brand}
        id="servicos"
        eyebrow="Como trabalhamos"
        title="Avaliação transparente, decisão informada"
        description="Contacte a equipa para conhecer o processo de avaliação, o valor proposto e as condições antes de confirmar a operação."
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="reveal reveal-zoom grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-2xl border border-[#C9A227]/25">
              <img
                src={img.goldRing}
                alt="Anel de ouro a ser pesado"
                loading="lazy"
                decoding="async"
                width={1200}
                height={675}
                className="h-52 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#C9A227]/25">
              <img
                src={img.goldRingClose}
                alt="Anel em detalhe"
                loading="lazy"
                decoding="async"
                width={600}
                height={400}
                className="h-40 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#C9A227]/25">
              <img
                src={img.goldScale}
                alt="Balança digital com peças de ouro"
                loading="lazy"
                decoding="async"
                width={600}
                height={400}
                className="h-40 w-full object-cover"
              />
            </div>
          </div>
          <div className="reveal reveal-right space-y-4">
            {features.map((f) => {
              const Ico = Icon[f.icon as keyof typeof Icon];
              return (
                <div key={f.text} className="flex items-start gap-3 rounded-xl bg-black/40 p-4">
                  <Ico size={26} style={{ color: brand.accent }} />
                  <p className="text-sm text-stone-300">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </BrandSection>

      {/* Tipos de ouro */}
      <BrandSection brand={brand} eyebrow="Ouro que avaliamos" title="Aceitamos diferentes peças">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {goldItems.map((item, index) => (
            <li
              key={item}
              className="reveal flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-4 text-sm text-stone-200"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#C9A227]/[0.08] text-[#F0C94A]">
                <Icon.Ring size={17} />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <a
          href={waLink(brand.whatsappMsg)}
          target="_blank"
          rel="noreferrer"
          className="button-primary btn-shine reveal mt-8"
        >
          <Icon.Ring size={18} /> Avaliar o meu ouro
        </a>
      </BrandSection>

      <BrandSection brand={brand} id="galeria" eyebrow="Galeria" title="O nosso trabalho">
        <BrandGallery brand={brand} photos={brandGallery.gold} />
      </BrandSection>
    </>
  );
}
