import { brands, img, goldItems, waLink } from "../lib/data";
import { BrandHero, BrandSection } from "../components/BrandHero";
import { Icon } from "../components/Icon";
import { useReveal } from "../hooks/useReveal";

const brand = brands.find((b) => b.id === "gold")!;

const features = [
  { icon: "Scale", text: "Pesagem transparente à sua frente" },
  { icon: "Cash", text: "Pagamento imediato em kwanzas" },
  { icon: "Car", text: "Atendimento ao domicílio gratuito" },
  { icon: "Handshake", text: "Troca directa por iPhone" },
] as const;

export default function GoldPage() {
  useReveal();
  return (
    <>
      <BrandHero brand={brand} extraImage={img.goldRing}>
        <p
          className="hero-in mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-400"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="flex items-center gap-2">
            <Icon.Clock size={16} style={{ color: brand.accent }} /> Pagamento na hora
          </span>
          <span className="flex items-center gap-2">
            <Icon.Car size={16} style={{ color: brand.accent }} /> Atendimento ao domicílio
          </span>
          <span className="flex items-center gap-2">
            <Icon.Shield size={16} style={{ color: brand.accent }} /> Avaliação transparente
          </span>
        </p>
      </BrandHero>

      {/* Colagem de fotos */}
      <BrandSection brand={brand} eyebrow="Como trabalhamos" title="Pesagem justa, dinheiro na mão">
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
      <BrandSection brand={brand} eyebrow="Ouro" title="Compramos todo o tipo de ouro">
        <div className="reveal rounded-3xl glass p-8">
          <div className="marquee-mask overflow-hidden">
            <div className="animate-marquee flex w-max gap-3">
              {[...goldItems, ...goldItems].map((g, i) => (
                <span
                  key={`${g}-${i}`}
                  className="shrink-0 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/5 px-4 py-2 text-sm text-stone-200"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
        <a
          href={waLink(brand.whatsappMsg)}
          target="_blank"
          rel="noreferrer"
          className="reveal mt-8 inline-flex items-center gap-2 btn-shine rounded-full px-7 py-3.5 font-semibold text-[#0A0A0A] transition hover:brightness-110 gold-glow"
          style={{ background: `linear-gradient(to right, ${brand.accent}, #C9A227)` }}
        >
          <Icon.Ring size={20} /> Avaliar o meu ouro
        </a>
      </BrandSection>
    </>
  );
}
