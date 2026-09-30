import { Icon, type IconKey } from "./Icon";

const benefits: { icon: IconKey; t: string; d: string }[] = [
  { icon: "Award", t: "Confiança local", d: "Uma marca angolana credível, sediada em Lubango." },
  { icon: "Cash", t: "Pagamento imediato", d: "O seu ouro transformado em dinheiro na hora." },
  { icon: "Car", t: "Atendimento ao domicílio", d: "Gratuito, deslocamo-nos até si." },
  { icon: "Users", t: "Equipas próprias", d: "Profissionais no terreno para cada serviço." },
  { icon: "Map", t: "Várias províncias", d: "Lubango, Namibe, Benguela e Luanda." },
  { icon: "Shield", t: "Garantia nos produtos", d: "Equipamentos verificados e testados." },
];

export function Benefits() {
  return (
    <section className="relative bg-[#0d0d0d] py-24">
      <div className="mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-14">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            Porquê o Grupo Plug Business
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Uma marca, <span className="text-gradient-gold">muitas razões</span> para confiar
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Ico = Icon[b.icon];
            return (
              <div
                key={b.t}
                className="reveal glass rounded-2xl p-7"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#F0C94A]">
                  <Ico size={24} />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{b.t}</h3>
                <p className="mt-2 text-sm text-stone-400">{b.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
