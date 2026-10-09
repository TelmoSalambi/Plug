import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { waLink, type Brand } from "../lib/data";
import { Icon } from "./Icon";
import { cn } from "../utils/cn";

type Props = { brand: Brand; children?: ReactNode };

export function BrandHero({ brand, children }: Props) {
  const Ico = Icon[brand.icon];

  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.06] pb-14 pt-28 sm:pb-18 sm:pt-32 lg:pb-20">
      <div
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-[28rem] w-[28rem] rounded-full blur-[120px]"
        style={{ background: `${brand.accent}12` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-0 -z-10 h-[26rem] w-[26rem] rounded-full border border-white/[0.035]"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <nav className="mb-8" aria-label="Percurso de navegação">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-stone-400">
            <li>
              <Link to="/" className="transition hover:text-white">
                Início
              </Link>
            </li>
            <li aria-hidden="true">
              <span className="text-stone-600">/</span>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#marcas" }} className="transition hover:text-white">
                Marcas
              </Link>
            </li>
            <li aria-hidden="true">
              <span className="text-stone-600">/</span>
            </li>
            <li aria-current="page" className="font-medium" style={{ color: brand.accent }}>
              {brand.name}
            </li>
          </ol>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.82fr] lg:gap-16">
          <div className="max-w-3xl">
            <p className="hero-in section-kicker" style={{ color: brand.accent }}>
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg border"
                style={{ borderColor: `${brand.accent}45`, background: `${brand.accent}12` }}
              >
                <Ico size={17} />
              </span>
              {brand.shortDesc}
            </p>

            <h1
              className="hero-in mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.03] tracking-[-0.04em] text-white"
              style={{ animationDelay: "50ms" }}
            >
              {brand.name}
            </h1>

            <p
              className="hero-in mt-5 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg"
              style={{ animationDelay: "90ms" }}
            >
              {brand.longDesc}
            </p>

            {children && (
              <div className="hero-in mt-5" style={{ animationDelay: "130ms" }}>
                {children}
              </div>
            )}

            <div className="hero-in mt-7 flex flex-wrap gap-3" style={{ animationDelay: "170ms" }}>
              <a
                href={waLink(brand.whatsappMsg)}
                target="_blank"
                rel="noreferrer"
                className="button-primary btn-shine"
              >
                <Icon.WhatsApp size={18} /> Falar com {brand.name}
              </a>
              <a href="#servicos" className="button-secondary">
                Ver serviços <Icon.ArrowDown size={17} />
              </a>
            </div>
          </div>

          <aside
            className="hero-in relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#181a20] to-[#0e1014] p-6 shadow-2xl shadow-black/25 sm:p-8 lg:ml-auto"
            style={{ animationDelay: "120ms" }}
            aria-label={`Resumo da ${brand.name}`}
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border"
              style={{ borderColor: `${brand.accent}18` }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-8 right-8 h-28 w-28 rounded-full"
              style={{ background: `${brand.accent}08` }}
              aria-hidden="true"
            />

            <div className="relative flex items-center gap-4">
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border"
                style={{
                  borderColor: `${brand.accent}40`,
                  background: `${brand.accent}12`,
                  color: brand.accent,
                }}
                aria-hidden="true"
              >
                <Ico size={28} />
              </span>
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-400">
                  Área de actividade
                </span>
                <span className="mt-1 block font-display text-xl font-bold text-white">
                  {brand.fullName}
                </span>
              </span>
            </div>

            <div className="relative mt-8 border-t border-white/[0.09] pt-5">
              <p className="text-sm font-semibold text-white">Grupo Plug Business</p>
              <p className="mt-1 max-w-sm text-sm leading-relaxed text-stone-400">
                Uma das onze marcas do grupo, com informação e contacto directo nesta página.
              </p>
            </div>

            <div className="relative mt-6 flex items-center justify-between gap-4 border-t border-white/[0.09] pt-4 text-xs">
              <span className="flex items-center gap-2 text-stone-400">
                <Icon.Pin size={15} className="text-[#F0C94A]" /> Lubango · Huíla
              </span>
              <span
                className="rounded-full border px-3 py-1 font-medium"
                style={{ borderColor: `${brand.accent}30`, color: brand.accent }}
              >
                {brand.shortDesc}
              </span>
            </div>
          </aside>
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
  id,
  className,
  description,
}: {
  brand: Brand;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  id?: string;
  className?: string;
  description?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 border-b border-white/[0.05] py-16 sm:py-20", className)}
    >
      <div className="site-container">
        <div className="reveal max-w-3xl">
          {eyebrow && (
            <p className="section-kicker" style={{ color: brand.accent }}>
              {eyebrow}
            </p>
          )}
          <h2 className="section-title mt-3">{title}</h2>
          {description && <p className="section-copy mt-4 max-w-2xl">{description}</p>}
        </div>
        <div className="mt-8 sm:mt-10">{children}</div>
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
  const isSinglePhoto = photos.length === 1;

  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
        isSinglePhoto && "max-w-3xl grid-cols-1 sm:grid-cols-1"
      )}
    >
      {photos.map((photo, index) => (
        <figure
          key={photo.label}
          className="reveal group relative aspect-[4/3] overflow-hidden rounded-2xl border bg-[#111318]"
          style={{ borderColor: `${brand.accent}28`, transitionDelay: `${index * 35}ms` }}
        >
          <img
            src={photo.src}
            alt={photo.label}
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent px-4 pb-4 pt-12 text-sm font-semibold text-white">
            {photo.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ComingSoon({ brand }: { brand: Brand }) {
  return (
    <div className="reveal rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center sm:p-12">
      <div
        className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04]"
        style={{ color: brand.accent }}
      >
        <Icon.Camera size={24} />
      </div>
      <h3 className="font-display text-xl font-bold text-white">Mais detalhes em preparação</h3>
      <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-stone-400">
        Para informações sobre os produtos e serviços da {brand.name}, fale directamente com a
        equipa.
      </p>
      <a
        href={waLink(brand.whatsappMsg)}
        target="_blank"
        rel="noreferrer"
        className="button-primary mt-6"
      >
        <Icon.WhatsApp size={18} /> Contactar {brand.name}
      </a>
    </div>
  );
}
