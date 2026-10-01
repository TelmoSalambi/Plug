import { Link } from "react-router-dom";
import type { Brand } from "../lib/data";
import { Icon, type IconKey } from "./Icon";
import { waLink } from "../lib/data";

type Props = { brand: Brand; children?: React.ReactNode; heroImage?: string };

export function BrandHero({ brand, children, heroImage }: Props) {
  const Ico = Icon[brand.icon as IconKey];
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-32 pb-20">
      {/* Fundo: gradiente radial com a cor da marca */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at top, ${brand.accent}15, #0A0A0A 65%)`,
        }}
      />
      {heroImage && (
        <div className="absolute inset-0 opacity-25">
          <img src={heroImage} alt="" aria-hidden="true" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/60 to-[#0A0A0A]" />
        </div>
      )}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: `${brand.accent}15` }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-14">
        {/* Breadcrumbs */}
        <nav className="mb-8 flex items-center gap-2 text-xs text-stone-500" aria-label="Percurso">
          <Link to="/" className="transition hover:text-[#F0C94A]">
            Início
          </Link>
          <span>›</span>
          <span>Marcas</span>
          <span>›</span>
          <span style={{ color: brand.accent }}>{brand.name}</span>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="hero-in flex items-center gap-3">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl border"
                style={{
                  borderColor: `${brand.accent}40`,
                  background: `${brand.accent}15`,
                  color: brand.accent,
                }}
              >
                <Ico size={28} />
              </span>
              <span
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: brand.accent }}
              >
                {brand.shortDesc}
              </span>
            </div>

            <h1
              className="hero-in mt-6 font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-gradient-gold">{brand.name}</span>
            </h1>

            <p
              className="hero-in mt-5 max-w-2xl text-lg text-stone-300"
              style={{ animationDelay: "0.2s" }}
            >
              {brand.longDesc}
            </p>

            {children}

            <div className="hero-in mt-8 flex flex-wrap gap-4" style={{ animationDelay: "0.35s" }}>
              <a
                href={waLink(brand.whatsappMsg)}
                target="_blank"
                rel="noreferrer"
                className="btn-shine inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-[#0A0A0A] transition hover:brightness-110 gold-glow"
                style={{ background: `linear-gradient(to right, ${brand.accent}, #C9A227)` }}
              >
                <Icon.WhatsApp size={20} /> Falar com {brand.name}
              </a>
              <Link
                to="/"
                className="rounded-full border px-7 py-3.5 font-semibold text-stone-200 transition hover:border-[#C9A227] hover:text-[#F0C94A]"
                style={{ borderColor: `${brand.accent}40` }}
              >
                ← Voltar ao grupo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Bloco de conteúdo comum a todas as páginas de marca
export function BrandSection({
  brand,
  eyebrow,
  title,
  children,
}: {
  brand: Brand;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-14">
        <div className="reveal max-w-2xl">
          {eyebrow && (
            <span
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: brand.accent }}
            >
              {eyebrow}
            </span>
          )}
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

// Placeholder para secções de galeria/preços que ainda não têm fotos
export function ComingSoon({ brand }: { brand: Brand }) {
  return (
    <div
      className="reveal rounded-3xl border-2 border-dashed p-12 text-center"
      style={{ borderColor: `${brand.accent}30` }}
    >
      <div
        className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl"
        style={{ background: `${brand.accent}15`, color: brand.accent }}
      >
        <Icon.Camera size={30} />
      </div>
      <h3 className="font-display text-xl font-bold text-white">Conteúdo em breve</h3>
      <p className="mx-auto mt-2 max-w-lg text-sm text-stone-400">
        Estamos a preparar a galeria completa, catálogo de produtos e preços da {brand.name}. Para
        já, fale connosco pelo WhatsApp e teremos todo o gosto em atendê-lo.
      </p>
      <a
        href={waLink(brand.whatsappMsg)}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:brightness-110"
        style={{ background: brand.accent, color: "#0A0A0A" }}
      >
        <Icon.WhatsApp size={18} /> Contactar {brand.name}
      </a>
    </div>
  );
}
