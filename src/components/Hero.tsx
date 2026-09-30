import { Particles } from "./Particles";
import { waLink } from "../lib/data";
import { Icon } from "./Icon";
import { HeroCarousel } from "./HeroCarousel";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* as imagens do carrossel ocupam a secção inteira */}
      <HeroCarousel fill />

      {/* overlays para o texto ficar legível por cima das imagens */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/70" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C9A227]/10 blur-[120px]" />
      <Particles />

      {/* conteúdos por cima das imagens */}
      <div className="relative z-10 mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-14 pb-24 pt-32">
        <div className="max-w-2xl">
          <span
            className="hero-in inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#F0C94A]"
            style={{ animationDelay: "0.05s" }}
          >
            <Icon.Flag size={14} /> Marca Angolana · Lubango, Huíla
          </span>

          <h1
            className="hero-in mt-6 font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.15s" }}
          >
            Um só grupo,
            <br />
            <span className="text-gradient-gold animate-shimmer">três universos</span>
            <br />
            de confiança.
          </h1>

          <p
            className="hero-in mt-6 max-w-lg text-lg text-stone-300"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="font-semibold text-white">Tecnologia</span>,{" "}
            <span className="font-semibold text-white">Ourivesaria</span> e{" "}
            <span className="font-semibold text-white">Limpeza profunda</span>, reunidos numa única
            marca angolana, premium e credível. iPhones e acessórios, compra de ouro na hora e
            serviços de limpeza de excelência.
          </p>

          <div className="hero-in mt-9 flex flex-wrap gap-4" style={{ animationDelay: "0.45s" }}>
            <a
              href={waLink("Olá! Quero saber mais sobre os serviços do Grupo Plug Business.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 btn-shine rounded-full bg-gradient-to-r from-[#F0C94A] to-[#C9A227] px-7 py-3.5 font-semibold text-[#0A0A0A] transition hover:brightness-110 gold-glow"
            >
              <Icon.WhatsApp size={20} /> Fale connosco no WhatsApp
            </a>
            <a
              href="#tecnologia"
              className="rounded-full border border-[#C9A227]/40 px-7 py-3.5 font-semibold text-stone-200 transition hover:border-[#C9A227] hover:text-[#F0C94A]"
            >
              Explorar áreas
            </a>
          </div>

          <div
            className="hero-in mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-stone-400"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="flex items-center gap-2">
              <Icon.Clock size={16} className="text-[#F0C94A]" /> Pagamento na hora
            </span>
            <span className="flex items-center gap-2">
              <Icon.Car size={16} className="text-[#F0C94A]" /> Atendimento ao domicílio
            </span>
            <span className="flex items-center gap-2">
              <Icon.Map size={16} className="text-[#F0C94A]" /> Presença em 4 províncias
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
