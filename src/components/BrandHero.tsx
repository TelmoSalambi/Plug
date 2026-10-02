import { Link } from "react-router-dom";
import type { Brand } from "../lib/data";
import { Icon, type IconKey } from "./Icon";
import { waLink } from "../lib/data";

type Props = { brand: Brand; children?: React.ReactNode; extraImage?: string };

export function BrandHero({ brand, children, extraImage }: Props) {
  const Ico = Icon[brand.icon as IconKey];
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-32 pb-20">
      {/* Fundo com imagem da marca */}
      <div className="absolute inset-0">
        <img
          src={brand.heroImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, #0A0A0A 0%, #0A0A0A 55%, #0A0A0Aaa 85%, #0A0A0A55)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]/70" />
      </div>
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: `${brand.accent}20` }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-14">
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

          {extraImage && (
            <div className="hidden lg:col-span-2 lg:block">
              <div
                className="hero-in relative overflow-hidden rounded-3xl border shadow-2xl"
                style={{
                  borderColor: `${brand.accent}30`,
                  animationDelay: "0.3s",
                }}
              >
                <img
                  src={extraImage}
                  alt=""
                  aria-hidden="true"
                  width={600}
                  height={400}
                  className="h-80 w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

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

export function BrandGallery({
  brand,
  photos,
}: {
  brand: Brand;
  photos: { src: string; label: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {photos.map((g, i) => (
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
            style={{ background: `linear-gradient(to top, rgba(0,0,0,0.75), transparent)` }}
          >
            {g.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

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
      <h3 className="font-display text-xl font-bold text-white">Galeria em preparação</h3>
      <p className="mx-auto mt-2 max-w-lg text-sm text-stone-400">
        Estamos a preparar o catálogo completo de produtos e serviços da {brand.name}. Fale connosco
        pelo WhatsApp para atendimento imediato.
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
