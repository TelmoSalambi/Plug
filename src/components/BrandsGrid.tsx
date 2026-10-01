import { Link } from "react-router-dom";
import { brands, type Brand } from "../lib/data";
import { Icon, type IconKey } from "./Icon";
import { cn } from "../utils/cn";

export function BrandsGrid() {
  const featured = brands.filter((b) => b.featured);
  const rest = brands.filter((b) => !b.featured);

  return (
    <section id="marcas" className="relative scroll-mt-24 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#141005,#0A0A0A_65%)]" />
      <div className="relative mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-14">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            O Grupo
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text-gradient-gold">11 marcas</span>, um só grupo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-400">
            Conheça todas as submarcas do Grupo Plug Business. Clique numa marca para saber mais
            sobre os serviços, produtos e como contactar.
          </p>
        </div>

        {/* Featured (grandes) */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((b, i) => (
            <BrandCard key={b.id} brand={b} size="large" delay={i * 100} />
          ))}
        </div>

        {/* Restantes */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((b, i) => (
            <BrandCard key={b.id} brand={b} size="small" delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandCard({
  brand,
  size,
  delay,
}: {
  brand: Brand;
  size: "large" | "small";
  delay: number;
}) {
  const Ico = Icon[brand.icon as IconKey];
  const large = size === "large";
  return (
    <Link
      to={`/marcas/${brand.id}`}
      className={cn(
        "reveal group block rounded-2xl border bg-white/[0.02] transition hover:-translate-y-1",
        large ? "p-7 hover:border-[#C9A227]/40" : "p-5 hover:border-white/20",
        large ? "border-[#C9A227]/25" : "border-white/5"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-xl transition group-hover:scale-105",
          large ? "mb-5 h-16 w-16" : "mb-3 h-12 w-12"
        )}
        style={{
          background: `${brand.accent}15`,
          border: `1px solid ${brand.accent}30`,
          color: brand.accent,
        }}
      >
        <Ico size={large ? 32 : 24} />
      </div>
      <h3
        className={cn(
          "font-display font-bold text-white group-hover:text-[#F0C94A]",
          large ? "text-xl" : "text-base"
        )}
      >
        {brand.name}
      </h3>
      <p
        className={cn(
          "mt-1 text-[11px] font-semibold uppercase tracking-wider",
          large ? "text-stone-400" : "text-stone-500"
        )}
        style={large ? { color: brand.accent } : undefined}
      >
        {brand.shortDesc}
      </p>
      {large && (
        <>
          <p className="mt-3 text-sm leading-relaxed text-stone-400">{brand.longDesc}</p>
          <span
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition group-hover:gap-3"
            style={{ color: brand.accent }}
          >
            Ver página de {brand.name} →
          </span>
        </>
      )}
    </Link>
  );
}
