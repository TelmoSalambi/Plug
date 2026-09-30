import { Icon, type IconKey } from "./Icon";

type Step = { n: string; title: string; desc: string; icon: IconKey };

function StepRow({ steps, accent }: { steps: Step[]; accent: string }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
              <span style={{ color: accent }}>
                <Ico size={26} />
              </span>
            </div>
            <h4 className="text-center font-semibold text-white">{s.title}</h4>
            <p className="mt-1 text-center text-sm text-stone-400">{s.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

const groups: { label: string; accent: string; steps: Step[] }[] = [
  {
    label: "Tecnologia · Plug Business",
    accent: "#F0C94A",
    steps: [
      {
        n: "1",
        title: "Escolha o equipamento",
        desc: "iPhone, AirPods, acessórios ou serviço.",
        icon: "Cart",
      },
      {
        n: "2",
        title: "Compra ou assistência",
        desc: "Atendimento personalizado e garantia.",
        icon: "Handshake",
      },
      {
        n: "3",
        title: "Instalação / entrega",
        desc: "Equipas no terreno em casas e escritórios.",
        icon: "Truck",
      },
    ],
  },
  {
    label: "Ourivesaria Plug Golden",
    accent: "#F0C94A",
    steps: [
      { n: "1", title: "Traga o seu ouro", desc: "Qualquer tipo, mesmo danificado.", icon: "Ring" },
      {
        n: "2",
        title: "Pesamos na hora",
        desc: "Avaliação transparente à sua frente.",
        icon: "Scale",
      },
      { n: "3", title: "Recebe o pagamento", desc: "Dinheiro imediato, sem espera.", icon: "Cash" },
    ],
  },
  {
    label: "Plug Clean",
    accent: "#4fd1c5",
    steps: [
      { n: "1", title: "Marque o serviço", desc: "Via WhatsApp ou chamada.", icon: "Calendar" },
      {
        n: "2",
        title: "Recolha / deslocação",
        desc: "Vamos até si ou recebe a peça.",
        icon: "Car",
      },
      { n: "3", title: "Limpeza profunda", desc: "Lavagem a seco profissional.", icon: "Sparkles" },
      { n: "4", title: "Entrega", desc: "Peças como novas, no prazo.", icon: "Truck" },
    ],
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-14">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            Como funciona
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Simples, rápido e <span className="text-gradient-gold">transparente</span>
          </h2>
        </div>

        <div className="mt-14 space-y-16">
          {groups.map((g) => (
            <div key={g.label}>
              <div className="flex items-center justify-center gap-3">
                <h3 className="font-display text-xl font-bold" style={{ color: g.accent }}>
                  {g.label}
                </h3>
              </div>
              <StepRow steps={g.steps} accent={g.accent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
