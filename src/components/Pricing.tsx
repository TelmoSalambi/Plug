import { cleanPrices, waLink } from "../lib/data";
import { Icon } from "./Icon";

function priceIcon(item: string) {
  if (item.includes("Sofá")) return Icon.Sofa;
  if (item.includes("Poltrona")) return Icon.Sofa;
  if (item.includes("viatura")) return Icon.Car;
  if (item.includes("Colchão")) return Icon.Bed;
  return Icon.Chair;
}

export function Pricing() {
  return (
    <section id="precos" className="relative scroll-mt-24 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#04211f,#0A0A0A_65%)]" />
      <div className="relative mx-auto max-w-[1560px] px-5 sm:px-8 lg:px-14">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4fd1c5]">
            Plug Clean · Tabela de preços
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Preços fixos, <span className="text-gradient-gold">sem surpresas</span>
          </h2>
          <p className="mt-3 text-sm text-stone-400">Valores em kwanzas (Kz).</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cleanPrices.map((p, i) => {
            const Ico = priceIcon(p.item);
            return (
              <div
                key={p.item}
                className="reveal flex items-center justify-between rounded-2xl border border-[#4fd1c5]/20 bg-white/[0.02] px-6 py-5 transition hover:border-[#4fd1c5]/50"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="flex items-center gap-3 text-sm font-medium text-stone-200">
                  <span className="text-[#4fd1c5]">
                    <Ico size={20} />
                  </span>
                  {p.item}
                </span>
                <span className="font-display text-lg font-bold text-[#F0C94A]">
                  {p.price} <span className="text-xs text-stone-500">Kz</span>
                </span>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href={waLink(
              "Olá! Quero marcar uma limpeza com base na tabela de preços da Plug Clean."
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-block btn-shine rounded-full bg-gradient-to-r from-[#F0C94A] to-[#C9A227] px-8 py-3.5 font-semibold text-[#0A0A0A] transition hover:brightness-110 gold-glow"
          >
            Marcar limpeza agora
          </a>
        </div>
      </div>
    </section>
  );
}
