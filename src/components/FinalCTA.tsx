import { Link } from "react-router-dom";
import { waLink, WHATSAPP } from "../lib/data";
import { Icon } from "./Icon";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="final-cta-title">
      <div className="site-container">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-[#C9A227]/20 bg-[radial-gradient(ellipse_at_85%_0%,rgba(201,162,39,0.14),transparent_45%),linear-gradient(135deg,#15171c,#0f1014)] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div
            className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-[#C9A227]/10"
            aria-hidden="true"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="section-kicker">Estamos ao seu dispor</p>
              <h2
                id="final-cta-title"
                className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl"
              >
                Já sabe o que procura? <span className="text-gradient-gold">Vamos conversar.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-300 sm:text-base">
                Escolha uma das marcas do grupo ou fale connosco para encontrar o contacto certo.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={waLink("Olá! Gostaria de falar com o Grupo Plug Business.")}
                target="_blank"
                rel="noreferrer"
                className="button-primary btn-shine"
              >
                <Icon.WhatsApp size={18} /> WhatsApp
              </a>
              <a href={`tel:+${WHATSAPP}`} className="button-secondary">
                <Icon.Phone size={17} /> Ligar
              </a>
              <Link to={{ pathname: "/", hash: "#marcas" }} className="button-secondary">
                Explorar marcas <Icon.ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
