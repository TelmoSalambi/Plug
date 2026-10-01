import { brands, img, waLink } from "../lib/data";
import { BrandHero, BrandSection, ComingSoon } from "../components/BrandHero";
import { Icon } from "../components/Icon";
import { useReveal } from "../hooks/useReveal";

const brand = brands.find((b) => b.id === "apple")!;

const products = [
  {
    name: "iPhone Novos",
    desc: "Selados, últimos modelos disponíveis",
    icon: "Phone",
    image: img.techBoxes,
  },
  {
    name: "iPhone Usados",
    desc: "Verificados e testados, com garantia",
    icon: "Recycle",
    image: img.techIphones,
  },
  {
    name: "AirPods & Audio",
    desc: "Pro e gerações mais recentes",
    icon: "Headphones",
    image: img.techBoxes,
  },
  {
    name: "Acessórios Apple",
    desc: "Capas, carregadores, cabos",
    icon: "Plug",
    image: img.techVitrine,
  },
  {
    name: "Comandos PS4/PS5",
    desc: "DualShock e DualSense",
    icon: "Gamepad",
    image: img.techStore,
  },
  {
    name: "Assistência Técnica",
    desc: "Reparação e instalação",
    icon: "Tool",
    image: img.techInstall,
  },
] as const;

export default function ApplePage() {
  useReveal();
  return (
    <>
      <BrandHero brand={brand} heroImage={img.techVitrine}>
        <p
          className="hero-in mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-400"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="flex items-center gap-2">
            <Icon.Shield size={16} style={{ color: brand.accent }} /> Equipamentos verificados
          </span>
          <span className="flex items-center gap-2">
            <Icon.Award size={16} style={{ color: brand.accent }} /> Garantia incluída
          </span>
          <span className="flex items-center gap-2">
            <Icon.Car size={16} style={{ color: brand.accent }} /> Entregas ao domicílio
          </span>
        </p>
      </BrandHero>

      <BrandSection brand={brand} eyebrow="Catálogo" title="O que temos para si">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => {
            const Ico = Icon[p.icon as keyof typeof Icon];
            return (
              <div
                key={p.name}
                className="reveal group overflow-hidden rounded-2xl border bg-white/[0.02] transition hover:-translate-y-1"
                style={{
                  borderColor: `${brand.accent}20`,
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={340}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                  <div
                    className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A0A0A]/80 backdrop-blur"
                    style={{ color: brand.accent }}
                  >
                    <Ico size={22} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-white">{p.name}</h3>
                  <p className="mt-1 text-sm text-stone-400">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <a
          href={waLink(brand.whatsappMsg)}
          target="_blank"
          rel="noreferrer"
          className="reveal mt-10 inline-flex items-center gap-2 btn-shine rounded-full px-7 py-3.5 font-semibold text-[#0A0A0A] transition hover:brightness-110 gold-glow"
          style={{ background: `linear-gradient(to right, ${brand.accent}, #C9A227)` }}
        >
          <Icon.WhatsApp size={20} /> Pedir orçamento à {brand.name}
        </a>
      </BrandSection>

      <BrandSection brand={brand} eyebrow="Em breve" title="Galeria & catálogo completo">
        <ComingSoon brand={brand} />
      </BrandSection>
    </>
  );
}
