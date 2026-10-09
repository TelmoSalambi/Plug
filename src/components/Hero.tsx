import { Link } from "react-router-dom";
import { brands, schedule, serviceAreas, waLink } from "../lib/data";
import { Icon } from "./Icon";

export function Hero() {
  const featuredBrands = brands.filter((brand) => brand.featured);

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden border-b border-white/[0.06] pb-16 pt-32 sm:pb-20 sm:pt-36 lg:min-h-[min(850px,100svh)] lg:pt-32"
    >
      <div
        className="pointer-events-none absolute -left-40 top-8 h-[32rem] w-[32rem] rounded-full bg-[#C9A227]/[0.07] blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-white/[0.025] blur-[120px]"
        aria-hidden="true"
      />

      <div className="site-container relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="section-kicker">
            <Icon.Flag size={15} /> Grupo empresarial angolano
          </p>

          <h1 className="hero-in mt-6 font-display text-[clamp(2.75rem,6vw,5.4rem)] font-bold leading-[1.02] tracking-[-0.045em] text-white">
            Um só grupo.
            <br />
            <span className="text-gradient-gold">Onze marcas.</span>
          </h1>

          <p
            className="hero-in section-copy mt-6 max-w-xl text-lg sm:text-xl"
            style={{ animationDelay: "80ms" }}
          >
            Tecnologia, ouro, limpeza, entregas, obras, alimentação e muito mais — encontre a
            solução certa e fale directamente com a equipa.
          </p>

          <div className="hero-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: "140ms" }}>
            <Link to={{ pathname: "/", hash: "#marcas" }} className="button-primary btn-shine">
              Explorar as {brands.length} marcas <Icon.ArrowRight size={18} />
            </Link>
            <a
              href={waLink("Olá! Gostaria de falar com o Grupo Plug Business.")}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              <Icon.WhatsApp size={18} /> Falar connosco
            </a>
          </div>

          <div
            className="hero-in mt-10 border-t border-white/10 pt-6"
            style={{ animationDelay: "200ms" }}
          >
            <div className="grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
              <div>
                <p className="font-display text-2xl font-bold text-white">{brands.length}</p>
                <p className="mt-1 text-xs text-stone-400">marcas especializadas</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-white">{serviceAreas.length}</p>
                <p className="mt-1 text-xs text-stone-400">localidades de atendimento</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="flex items-center gap-2 font-semibold text-white">
                  <Icon.Clock size={18} className="text-[#F0C94A]" />
                  <span className="text-sm">Segunda a sábado</span>
                </p>
                <p className="mt-1 text-xs text-stone-400">
                  {schedule.replace("Segunda a Sábado · ", "")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside
          className="reveal relative mx-auto w-full max-w-[590px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#181a20] to-[#0e1014] p-5 shadow-2xl shadow-black/25 sm:p-7 lg:mx-0 lg:ml-auto"
          aria-labelledby="quick-start-title"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#C9A227]/10"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="section-kicker text-[10px]">Acesso rápido</p>
            <h2
              id="quick-start-title"
              className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl"
            >
              Por onde quer começar?
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-stone-400">
              Aceda às áreas mais procuradas ou pesquise todas as marcas abaixo.
            </p>

            <ul className="mt-6 space-y-2">
              {featuredBrands.map((brand) => {
                const Ico = Icon[brand.icon];
                return (
                  <li key={brand.id}>
                    <Link
                      to={`/marcas/${brand.id}`}
                      className="group flex min-h-[4.5rem] items-center gap-4 rounded-xl border border-white/[0.07] bg-black/15 px-4 py-3 transition duration-200 hover:border-[#C9A227]/25 hover:bg-[#C9A227]/[0.04]"
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                        style={{
                          borderColor: `${brand.accent}35`,
                          background: `${brand.accent}10`,
                          color: brand.accent,
                        }}
                      >
                        <Ico size={19} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold text-white transition-colors group-hover:text-[#F0C94A]">
                          {brand.name}
                        </span>
                        <span className="mt-0.5 block text-xs text-stone-400">
                          {brand.shortDesc}
                        </span>
                      </span>
                      <Icon.ArrowRight
                        size={17}
                        className="shrink-0 text-stone-500 transition-transform group-hover:translate-x-1 group-hover:text-[#F0C94A]"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              to={{ pathname: "/", hash: "#marcas" }}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F0C94A] transition-colors hover:text-white"
            >
              Ver as 11 marcas <Icon.ArrowRight size={16} />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
