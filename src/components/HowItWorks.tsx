import { Icon, type IconKey } from "./Icon";

type Step = { n: string; title: string; desc: string; icon: IconKey };

const steps: Step[] = [
  {
    n: "1",
    title: "Escolha a marca",
    desc: "Apple, Gold, Clean, Motors, Food, Drip ou qualquer uma das 11.",
    icon: "Award",
  },
  {
    n: "2",
    title: "Contacte via WhatsApp",
    desc: "Atendimento personalizado e resposta rápida.",
    icon: "WhatsApp",
  },
  {
    n: "3",
    title: "Tratamos de tudo",
    desc: "Entregas ao domicílio, pagamento na hora, deslocações.",
    icon: "Truck",
  },
  {
    n: "4",
    title: "Garantia & confiança",
    desc: "Produtos verificados e serviço pós-venda.",
    icon: "Shield",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-14">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            Como funciona
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Simples, rápido e <span className="text-gradient-gold">transparente</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-400">
            Todo o Grupo Plug Business funciona com o mesmo método de confiança: sem burocracia,
            contacto directo e resultado garantido.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Linha conectora no desktop */}
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent lg:block" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Ico = Icon[s.icon];
              return (
                <div
                  key={s.n}
                  className="reveal relative glass rounded-2xl p-6"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="mb-4 flex items-center justify-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A227]/50 font-display text-lg font-bold text-[#F0C94A]">
                      {s.n}
                    </span>
                    <span className="text-[#F0C94A]">
                      <Ico size={26} />
                    </span>
                  </div>
                  <h4 className="text-center font-semibold text-white">{s.title}</h4>
                  <p className="mt-1 text-center text-sm text-stone-400">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
