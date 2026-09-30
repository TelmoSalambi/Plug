import { techProducts, goldItems, cleanServices, img, waLink } from "../lib/data";
import { Icon } from "./Icon";

function SectionHeader({
  tag,
  title,
  desc,
  accent,
}: {
  tag: string;
  title: string;
  desc: string;
  accent: string;
}) {
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

export function Tecnologia() {
  return (
    <section id="tecnologia" className="relative scroll-mt-24 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,#141005,#0A0A0A_60%)]" />
      <div className="relative mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-14">
        {/* mini-hero */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeader
            tag="Plug Business · Tecnologia"
            accent="#F0C94A"
            title="iPhones, acessórios e assistência de confiança"
            desc="Venda de iPhones novos e usados, AirPods, comandos PS4 e acessórios, além de serviços técnicos de instalação e acabamentos com equipas no terreno."
          />
          <div className="reveal reveal-right relative overflow-hidden rounded-3xl border border-[#C9A227]/25">
            <img
              src={img.iphoneAirpods}
              alt="iPhone e AirPods"
              loading="lazy"
              decoding="async"
              className="h-72 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
          </div>
        </div>

        {/* product grid with images */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techProducts.map((p, i) => {
            const Ico = Icon[p.icon];
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
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
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
          href={waLink("Olá! Tenho interesse em produtos de tecnologia da Plug Business.")}
          target="_blank"
          rel="noreferrer"
          className="reveal mt-10 inline-flex items-center gap-2 btn-shine rounded-full bg-gradient-to-r from-[#F0C94A] to-[#C9A227] px-7 py-3.5 font-semibold text-[#0A0A0A] transition hover:brightness-110"
        >
          <Icon.WhatsApp size={20} /> Pedir orçamento de tecnologia
        </a>
      </div>
    </section>
  );
}

export function Ourivesaria() {
  return (
    <section id="ourivesaria" className="relative scroll-mt-24 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,#1a1408,#0A0A0A_60%)]" />
      <div className="relative mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-14">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              tag="Ourivesaria Plug Golden"
              accent="#F0C94A"
              title="O seu ouro vale dinheiro. Na hora."
              desc="Compramos e trocamos todo o tipo de ouro, mesmo danificado, com pagamento imediato e atendimento ao domicílio gratuito. Presentes em Lubango, Namibe, Benguela e Luanda."
            />
            <a
              href={waLink("Olá! Quero vender ou trocar ouro na Ourivesaria Plug Golden.")}
              target="_blank"
              rel="noreferrer"
              className="reveal mt-8 inline-flex items-center gap-2 btn-shine rounded-full bg-gradient-to-r from-[#F0C94A] to-[#C9A227] px-7 py-3.5 font-semibold text-[#0A0A0A] transition hover:brightness-110 gold-glow"
            >
              <Icon.Ring size={20} /> Avaliar o meu ouro
            </a>
          </div>

          {/* image collage */}
          <div className="reveal reveal-zoom grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-2xl border border-[#C9A227]/25">
              <img
                src={img.goldDisplay}
                alt="Peças de ouro"
                loading="lazy"
                decoding="async"
                className="h-52 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#C9A227]/25">
              <img
                src={img.goldWoman}
                alt="Joias de ouro"
                loading="lazy"
                decoding="async"
                className="h-40 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#C9A227]/25">
              <img
                src={img.goldBar}
                alt="Barra de ouro"
                loading="lazy"
                decoding="async"
                className="h-40 w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* gold types */}
        <div className="reveal mt-14 rounded-3xl glass p-8">
          <div className="flex items-center gap-3">
            <Icon.Scale size={22} className="text-[#F0C94A]" />
            <h3 className="font-display text-xl font-bold text-[#F0C94A]">
              Compramos todo o tipo de ouro
            </h3>
          </div>
          <div className="marquee-mask mt-6 overflow-hidden">
            <div className="animate-marquee flex w-max gap-3">
              {[...goldItems, ...goldItems].map((g, i) => (
                <span
                  key={`${g}-${i}`}
                  className="shrink-0 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/5 px-4 py-2 text-sm text-stone-200"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl bg-black/40 p-4">
              <Icon.Scale size={26} className="text-[#F0C94A]" />
              <p className="text-sm text-stone-300">Pesagem transparente à sua frente</p>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-black/40 p-4">
              <Icon.Cash size={26} className="text-[#F0C94A]" />
              <p className="text-sm text-stone-300">Pagamento imediato em kwanzas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlugClean() {
  return (
    <section id="plugclean" className="relative scroll-mt-24 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,#04211f,#0A0A0A_60%)]" />
      <div className="relative mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeader
            tag="Plug Clean"
            accent="#4fd1c5"
            title="Limpeza profunda que devolve o brilho"
            desc="Lavagem a seco e limpeza profunda de sofás, poltronas, bancos e interiores de viatura, e colchões. Tabela de preços fixa em kwanzas. Presentes em Lubango, Namibe, Benguela e Luanda."
          />
          <div className="reveal reveal-right relative overflow-hidden rounded-3xl border border-[#4fd1c5]/25">
            <img
              src={img.sofa}
              alt="Sofá limpo"
              loading="lazy"
              decoding="async"
              className="h-72 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
          </div>
        </div>

        {/* service cards with images */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cleanServices.map((c, i) => {
            const Ico = Icon[c.icon];
            return (
              <div
                key={c.title}
                className="reveal group overflow-hidden rounded-2xl border border-[#4fd1c5]/25 bg-[#4fd1c5]/[0.04] transition hover:-translate-y-1 hover:border-[#4fd1c5]/50"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A0A0A]/80 text-[#4fd1c5] backdrop-blur">
                    <Ico size={22} />
                  </div>
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
