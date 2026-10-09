import { Link } from "react-router-dom";
import { Icon, type IconKey } from "./Icon";

type Step = { n: string; title: string; desc: string; icon: IconKey };

const steps: Step[] = [
  {
    n: "01",
    title: "Escolha a marca",
    desc: "Apple, Gold, Clean, Motors, Food, Drip ou qualquer uma das 11 marcas.",
    icon: "Award",
  },
  {
    n: "02",
    title: "Fale directamente com a equipa",
    desc: "Entre em contacto pelo WhatsApp da marca e explique o que procura.",
    icon: "WhatsApp",
  },
  {
    n: "03",
    title: "Combine os próximos passos",
    desc: "A equipa confirma consigo os detalhes do produto ou serviço escolhido.",
    icon: "Calendar",
  },
  {
    n: "04",
    title: "Receba o seu atendimento",
    desc: "Acompanhe o pedido com a equipa, de acordo com o serviço escolhido.",
    icon: "Shield",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 border-b border-white/[0.06] py-20 sm:py-24"
      aria-labelledby="how-it-works-title"
    >
      <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div className="reveal max-w-xl">
          <p className="section-kicker">Como funciona</p>
          <h2 id="how-it-works-title" className="section-title mt-4">
            Encontrar o que precisa <span className="text-gradient-gold">é simples.</span>
          </h2>
          <p className="section-copy mt-5">
            Cada marca tem uma página própria para apresentar os seus serviços e facilitar o
            contacto com a equipa certa.
          </p>
          <Link to={{ pathname: "/", hash: "#marcas" }} className="button-secondary mt-7">
            Ver todas as marcas <Icon.ArrowRight size={17} />
          </Link>
        </div>

        <div className="relative">
          <div
            className="absolute bottom-10 left-[1.35rem] top-10 hidden w-px bg-gradient-to-b from-[#C9A227]/45 via-white/10 to-transparent sm:block"
            aria-hidden="true"
          />
          <ol className="relative space-y-3">
            {steps.map((step) => {
              const Ico = Icon[step.icon];
              return (
                <li
                  key={step.n}
                  className="reveal relative grid grid-cols-[2.75rem_1fr] gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-colors hover:border-white/[0.14] sm:grid-cols-[3rem_1fr] sm:gap-5 sm:p-5"
                >
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A227]/35 bg-[#111318] text-[#F0C94A]">
                    <Ico size={19} />
                  </span>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="font-semibold text-white">{step.title}</h3>
                      <p className="mt-1 max-w-xl text-sm leading-relaxed text-stone-400">
                        {step.desc}
                      </p>
                    </div>
                    <span className="font-display text-sm font-bold tabular-nums text-[#C9A227]/70">
                      {step.n}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
