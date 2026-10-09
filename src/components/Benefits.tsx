import { Icon, type IconKey } from "./Icon";

const benefits: { icon: IconKey; title: string; desc: string }[] = [
  {
    icon: "Award",
    title: "Presença local",
    desc: "Grupo empresarial angolano, sediado em Lubango.",
  },
  {
    icon: "Cash",
    title: "Pagamento na hora",
    desc: "A Plug Gold paga de imediato após a avaliação do ouro.",
  },
  {
    icon: "Car",
    title: "Atendimento ao domicílio",
    desc: "Serviços seleccionados podem deslocar-se até si.",
  },
  {
    icon: "Users",
    title: "Equipas especializadas",
    desc: "Cada marca tem uma área de actividade própria.",
  },
  { icon: "Map", title: "Várias localidades", desc: "Lubango, Namibe, Benguela e Luanda." },
  {
    icon: "Shield",
    title: "Produtos verificados",
    desc: "Equipamentos tecnológicos testados antes da venda.",
  },
];

export function Benefits() {
  return (
    <section
      className="border-b border-white/[0.06] bg-[#0d0f13]/60 py-20 sm:py-24"
      aria-labelledby="benefits-title"
    >
      <div className="site-container">
        <div className="reveal grid items-end gap-6 lg:grid-cols-[1fr_0.7fr]">
          <div className="max-w-3xl">
            <p className="section-kicker">Porquê o Grupo Plug Business</p>
            <h2 id="benefits-title" className="section-title mt-4">
              Diversidade de serviços. <span className="text-gradient-gold">Contacto directo.</span>
            </h2>
          </div>
          <p className="section-copy max-w-xl lg:justify-self-end">
            Um ponto de partida claro para encontrar a área certa, conhecer o que cada marca faz e
            chegar à equipa responsável.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Ico = Icon[benefit.icon];
            return (
              <article
                key={benefit.title}
                className="reveal group flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-200 hover:border-[#C9A227]/25 hover:bg-white/[0.035] sm:p-6"
                style={{ transitionDelay: `${index * 35}ms` }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C9A227]/20 bg-[#C9A227]/[0.06] text-[#F0C94A] transition-colors group-hover:bg-[#C9A227]/[0.12]">
                  <Ico size={21} />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-400">{benefit.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
