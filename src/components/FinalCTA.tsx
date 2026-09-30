import { waLink, WHATSAPP } from "../lib/data";
import { Icon } from "./Icon";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#241c07,#0A0A0A_60%)]" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/15 blur-[130px]" />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 lg:px-14 text-center">
        <h2 className="reveal font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Fale connosco <span className="text-gradient-gold">agora mesmo</span>
        </h2>
        <p className="reveal mx-auto mt-5 max-w-xl text-lg text-stone-300">
          Tecnologia, ouro ou limpeza. Contacte-nos agora e resolva tudo num só sítio. Resposta
          rápida via WhatsApp ou chamada.
        </p>
        <div className="reveal mt-9 flex flex-wrap justify-center gap-4">
          <a
            href={waLink("Olá! Gostaria de falar com o Grupo Plug Business.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 btn-shine rounded-full bg-gradient-to-r from-[#F0C94A] to-[#C9A227] px-8 py-4 font-semibold text-[#0A0A0A] transition hover:brightness-110 gold-glow"
          >
            <Icon.WhatsApp size={20} /> WhatsApp
          </a>
          <a
            href={`tel:+${WHATSAPP}`}
            className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 px-8 py-4 font-semibold text-stone-200 transition hover:border-[#C9A227] hover:text-[#F0C94A]"
          >
            <Icon.Phone size={20} /> Ligar agora
          </a>
        </div>
      </div>
    </section>
  );
}
