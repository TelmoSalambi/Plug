import { img, waLink } from "../lib/data";
import { Icon } from "./Icon";

type Props = {
  tag: string;
  title: string;
  desc: string;
  accent: string;
};

function SectionHeader({ tag, title, desc, accent }: Props) {
  return (
    <div className="reveal max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: accent }}>
        {tag}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 text-stone-400">{desc}</p>
    </div>
  );
}

export function Apple() {
  const products = [
    { name: "iPhone Novos", desc: "Selados, últimos modelos", icon: "Phone", image: img.techBoxes },
    {
      name: "iPhone Usados",
      desc: "Verificados, com garantia",
      icon: "Recycle",
      image: img.techIphones,
    },
    {
      name: "AirPods & Audio",
      desc: "AirPods Pro e auscultadores",
      icon: "Headphones",
      image: img.techBoxes,
    },
    {
      name: "Acessórios",
      desc: "Capas, carregadores, cabos",
      icon: "Plug",
      image: img.techVitrine,
    },
    {
      name: "Comandos PS4/PS5",
      desc: "DualShock e DualSense",
      icon: "Gamepad",
      image: img.techStore,
    },
    {
      name: "Assistência Técnica",
      desc: "Reparação e instalação",
      icon: "Tool",
      image: img.techInstall,
    },
  ] as const;

  return (
    <section id="marcas-apple" className="relative scroll-mt-24 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,#141005,#0A0A0A_60%)]" />
      <div className="relative mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeader
            tag="Plug Apple · Tecnologia"
            accent="#F0C94A"
            title="Produtos Apple e tecnologia de confiança"
            desc="Venda de iPhones novos e usados, AirPods, iPads, MacBooks, comandos Playstation e acessórios, além de assistência técnica e serviços de instalação com equipas no terreno."
          />
          <div className="reveal reveal-right relative overflow-hidden rounded-3xl border border-[#C9A227]/25">
            <img
              src={img.techVitrine}
              alt="Vitrine da Plug Apple com iPhones e acessórios"
              loading="lazy"
              decoding="async"
              width={1200}
              height={675}
              className="h-72 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => {
            const Ico = Icon[p.icon as keyof typeof Icon];
            return (
              <div
                key={p.name}
                className="reveal group overflow-hidden rounded-2xl border border-[#C9A227]/15 bg-white/[0.02] transition hover:-translate-y-1 hover:border-[#C9A227]/40"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={340}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A0A0A]/80 text-[#F0C94A] backdrop-blur">
                    <Ico size={22} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-white">{p.name}</h3>
                  <p className="mt-1 text-sm text-stone-400">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <a
          href={waLink("Olá! Tenho interesse em produtos da Plug Apple.")}
          target="_blank"
          rel="noreferrer"
          className="reveal mt-10 inline-flex items-center gap-2 btn-shine rounded-full bg-gradient-to-r from-[#F0C94A] to-[#C9A227] px-7 py-3.5 font-semibold text-[#0A0A0A] transition hover:brightness-110"
        >
          <Icon.WhatsApp size={20} /> Pedir orçamento à Plug Apple
        </a>
      </div>
    </section>
  );
}

export function Gold() {
  return (
    <section id="marcas-gold" className="relative scroll-mt-24 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,#1a1408,#0A0A0A_60%)]" />
      <div className="relative mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-14">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              tag="Plug Gold · Ourivesaria"
              accent="#F0C94A"
              title="O seu ouro vale dinheiro. Na hora."
              desc="Compramos e trocamos todo o tipo de ouro — fios, anéis, brincos, pulseiras, relógios, barras, mascotes, pingentes e medalhas — mesmo danificado ou em pedaços. Incluindo troca directa por iPhone. Pagamento imediato e atendimento ao domicílio gratuito em Lubango, Namibe, Benguela e Luanda."
            />
            <a
              href={waLink("Olá! Quero vender ou trocar ouro na Plug Gold.")}
              target="_blank"
              rel="noreferrer"
              className="reveal mt-8 inline-flex items-center gap-2 btn-shine rounded-full bg-gradient-to-r from-[#F0C94A] to-[#C9A227] px-7 py-3.5 font-semibold text-[#0A0A0A] transition hover:brightness-110 gold-glow"
            >
              <Icon.Ring size={20} /> Avaliar o meu ouro
            </a>
          </div>

          <div className="reveal reveal-zoom grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-2xl border border-[#C9A227]/25">
              <img
                src={img.goldRing}
                alt="Avaliação de ouro com pesagem transparente"
                loading="lazy"
                decoding="async"
                width={1200}
                height={675}
                className="h-52 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#C9A227]/25">
              <img
                src={img.goldRingClose}
                alt="Anel de ouro a ser pesado"
                loading="lazy"
                decoding="async"
                width={600}
                height={400}
                className="h-40 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#C9A227]/25">
              <img
                src={img.goldScale}
                alt="Pesagem de peças de ouro na balança digital"
                loading="lazy"
                decoding="async"
                width={600}
                height={400}
                className="h-40 w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="reveal mt-14 rounded-3xl glass p-8">
          <div className="flex items-center gap-3">
            <Icon.Scale size={22} className="text-[#F0C94A]" />
            <h3 className="font-display text-xl font-bold text-[#F0C94A]">
              Compramos todo o tipo de ouro
            </h3>
          </div>
          <div className="marquee-mask mt-6 overflow-hidden">
            <div className="animate-marquee flex w-max gap-3">
              {[
                "Fios",
                "Anéis",
                "Brincos",
                "Pulseiras",
                "Relógios",
                "Barras",
                "Cordões",
                "Pingentes",
                "Medalhas",
                "Mascotes",
                "Ouro danificado",
                "Pedaços",
                "Troca por iPhone",
                "Pagamento na hora",
                "Fios",
                "Anéis",
                "Brincos",
                "Pulseiras",
                "Relógios",
                "Barras",
                "Cordões",
                "Pingentes",
                "Medalhas",
                "Mascotes",
                "Ouro danificado",
                "Pedaços",
                "Troca por iPhone",
                "Pagamento na hora",
              ].map((g, i) => (
                <span
                  key={`${g}-${i}`}
                  className="shrink-0 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/5 px-4 py-2 text-sm text-stone-200"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3 rounded-xl bg-black/40 p-4">
              <Icon.Scale size={26} className="text-[#F0C94A]" />
              <p className="text-sm text-stone-300">Pesagem transparente à sua frente</p>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-black/40 p-4">
              <Icon.Cash size={26} className="text-[#F0C94A]" />
              <p className="text-sm text-stone-300">Pagamento imediato em kwanzas</p>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-black/40 p-4">
              <Icon.Car size={26} className="text-[#F0C94A]" />
              <p className="text-sm text-stone-300">Atendimento ao domicílio gratuito</p>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-black/40 p-4">
              <Icon.Handshake size={26} className="text-[#F0C94A]" />
              <p className="text-sm text-stone-300">Troca directa por iPhone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Clean() {
  const services = [
    { icon: "Sofa", title: "Sofás & poltronas", desc: "De 1 a 7 lugares" },
    { icon: "Car", title: "Interior de viatura", desc: "Bancos e interior completo" },
    { icon: "Bed", title: "Colchões", desc: "Solteiro, casal e king" },
    { icon: "Chair", title: "Cadeiras", desc: "Sala e escritório" },
  ] as const;

  return (
    <section id="marcas-clean" className="relative scroll-mt-24 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,#04211f,#0A0A0A_60%)]" />
      <div className="relative mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeader
            tag="Plug Clean · Lavagem a seco"
            accent="#4fd1c5"
            title="Limpeza profunda que devolve o brilho"
            desc="Lavagem a seco e limpeza profunda de sofás, poltronas, bancos e interiores de viatura, e colchões. Tabela de preços fixa em kwanzas, com marcação via WhatsApp e deslocação até si."
          />
          <div className="reveal reveal-right relative overflow-hidden rounded-3xl border border-[#4fd1c5]/25 bg-[#4fd1c5]/5">
            <div className="flex h-72 w-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#4fd1c5]/15 text-[#4fd1c5]">
                  <Icon.Sparkles size={40} />
                </div>
                <p className="font-display text-3xl font-bold text-white">
                  Plug <span className="text-[#4fd1c5]">Clean</span>
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-stone-400">
                  Lavagem a seco
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((c, i) => {
            const Ico = Icon[c.icon as keyof typeof Icon];
            return (
              <div
                key={c.title}
                className="reveal group overflow-hidden rounded-2xl border border-[#4fd1c5]/25 bg-[#4fd1c5]/[0.04] transition hover:-translate-y-1 hover:border-[#4fd1c5]/50"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-b from-[#4fd1c5]/10 to-transparent">
                  <Ico size={64} />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-stone-400">{c.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <a
          href={waLink("Olá! Quero marcar um serviço de limpeza com a Plug Clean.")}
          target="_blank"
          rel="noreferrer"
          className="reveal mt-10 inline-flex items-center gap-2 rounded-full border border-[#4fd1c5] bg-[#4fd1c5]/10 px-7 py-3.5 font-semibold text-[#4fd1c5] transition hover:bg-[#4fd1c5]/20"
        >
          <Icon.Sparkles size={20} /> Marcar serviço de limpeza
        </a>
        <p className="mt-4 text-sm text-stone-500">Veja a tabela de preços completa mais abaixo.</p>
      </div>
    </section>
  );
}

// Exportações com nomes antigos para compatibilidade em App.tsx
export const Tecnologia = Apple;
export const Ourivesaria = Gold;
export const PlugClean = Clean;
