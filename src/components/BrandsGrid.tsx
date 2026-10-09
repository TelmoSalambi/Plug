import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { brands, type Brand } from "../lib/data";
import { Icon } from "./Icon";

function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-PT")
    .trim();
}

export function BrandsGrid() {
  const [query, setQuery] = useState("");
  const filteredBrands = useMemo(() => {
    const searchTerms = normalizeSearch(query).split(/\s+/).filter(Boolean);
    if (searchTerms.length === 0) return brands;

    return brands.filter((brand) => {
      const searchableText = normalizeSearch(`${brand.name} ${brand.shortDesc} ${brand.longDesc}`);
      return searchTerms.every((term) => searchableText.includes(term));
    });
  }, [query]);

  return (
    <section
      id="marcas"
      className="relative scroll-mt-24 border-y border-white/[0.06] py-20 sm:py-24"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,162,39,0.07),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="site-container relative">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <div className="reveal max-w-3xl">
            <p className="section-kicker">As marcas do grupo</p>
            <h2 className="section-title mt-4">
              Uma porta de entrada para <span className="text-gradient-gold">11 soluções.</span>
            </h2>
            <p className="section-copy mt-4 max-w-2xl">
              Pesquise por marca ou serviço e siga directamente para a página com os detalhes e
              contactos.
            </p>
          </div>
          <p className="reveal hidden pb-1 text-sm text-stone-400 lg:block">
            Lubango <span className="mx-2 text-[#C9A227]">·</span> Huíla{" "}
            <span className="mx-2 text-[#C9A227]">·</span> Angola
          </p>
        </div>

        <div className="reveal mt-8 max-w-2xl">
          <label htmlFor="brand-search" className="mb-2 block text-sm font-medium text-stone-200">
            Encontrar uma marca ou serviço
          </label>
          <div className="relative">
            <Icon.Search
              size={19}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
            />
            <input
              id="brand-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.currentTarget.value)}
              placeholder="Ex.: iPhone, ouro, limpeza…"
              autoComplete="off"
              className="h-12 w-full rounded-xl border border-white/10 bg-[#111318]/90 pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-stone-500 focus:border-[#C9A227]/70 focus:ring-2 focus:ring-[#C9A227]/15"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Limpar pesquisa"
                className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-stone-400 transition hover:bg-white/5 hover:text-white"
              >
                <Icon.X size={17} />
              </button>
            )}
          </div>
          <p className="mt-2 min-h-5 text-xs text-stone-400" aria-live="polite">
            {filteredBrands.length === brands.length && !query
              ? `${brands.length} marcas disponíveis`
              : `${filteredBrands.length} ${filteredBrands.length === 1 ? "marca encontrada" : "marcas encontradas"}`}
          </p>
        </div>

        {filteredBrands.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBrands.map((brand, index) => (
              <BrandCard key={brand.id} brand={brand} delay={index * 35} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-12 text-center">
            <p className="font-semibold text-white">Não encontrámos essa marca ou serviço.</p>
            <p className="mt-2 text-sm text-stone-400">
              Tente outra palavra ou veja novamente todas as marcas.
            </p>
            <button type="button" className="button-secondary mt-5" onClick={() => setQuery("")}>
              Mostrar todas as marcas
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function BrandCard({ brand, delay }: { brand: Brand; delay: number }) {
  const Ico = Icon[brand.icon];

  return (
    <Link
      to={`/marcas/${brand.id}`}
      aria-label={`Saiba mais sobre ${brand.name}: ${brand.shortDesc}`}
      className="reveal group flex min-h-[250px] flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#C9A227]/35 hover:bg-[#C9A227]/[0.035] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0C94A]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl border"
          style={{
            backgroundColor: `${brand.accent}12`,
            borderColor: `${brand.accent}35`,
            color: brand.accent,
          }}
        >
          <Ico size={23} />
        </span>
        {brand.featured && (
          <span className="rounded-full border border-[#C9A227]/20 bg-[#C9A227]/[0.07] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#F0C94A]">
            Em destaque
          </span>
        )}
      </div>

      <h3 className="mt-5 font-display text-xl font-bold text-white transition-colors group-hover:text-[#F0C94A]">
        {brand.name}
      </h3>
      <p
        className="mt-1 text-xs font-semibold uppercase tracking-[0.1em]"
        style={{ color: brand.accent }}
      >
        {brand.shortDesc}
      </p>
      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-stone-400">{brand.longDesc}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-stone-200 transition group-hover:gap-3 group-hover:text-[#F0C94A]">
        Conhecer marca <Icon.ArrowRight size={16} />
      </span>
    </Link>
  );
}
