import { Logo } from "./Logo";
import { Icon, type IconKey } from "./Icon";
import { WHATSAPP, formatPhone } from "../lib/data";

const brands: { icon: IconKey; name: string; desc: string; accent: string }[] = [
  { icon: "Phone", name: "Plug Business", desc: "Tecnologia & serviços", accent: "#F0C94A" },
  {
    icon: "Ring",
    name: "Ourivesaria Plug Golden",
    desc: "Compra e troca de ouro",
    accent: "#F0C94A",
  },
  { icon: "Sofa", name: "Plug Clean", desc: "Limpeza profunda", accent: "#4fd1c5" },
];

export function Footer() {
  return (
    <footer className="bg-[#080808] pt-16">
      <div className="mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo size={46} />
            <p className="mt-5 text-sm text-stone-400">
              Grupo empresarial angolano multissetorial, sediado em Lubango, Huíla. Tecnologia,
              ourivesaria e limpeza numa só marca de confiança.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com/plugbusiness.lda"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A227]/25 text-stone-300 transition hover:border-[#C9A227] hover:text-[#F0C94A]"
              >
                <Icon.Instagram size={20} />
              </a>
              <a
                href="https://tiktok.com/@plugbusiness.lda"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A227]/25 text-stone-300 transition hover:border-[#C9A227] hover:text-[#F0C94A]"
              >
                <Icon.Music size={20} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A227]/25 text-stone-300 transition hover:border-[#C9A227] hover:text-[#F0C94A]"
              >
                <Icon.WhatsApp size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-[#F0C94A]">As nossas marcas</h3>
            <ul className="mt-5 space-y-4">
              {brands.map((b) => {
                const Ico = Icon[b.icon];
                return (
                  <li key={b.name} className="flex items-start gap-3">
                    <span className="mt-0.5" style={{ color: b.accent }}>
                      <Ico size={22} />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-white">{b.name}</div>
                      <div className="text-xs text-stone-500">{b.desc}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-[#F0C94A]">Morada & Horário</h3>
            <p className="mt-5 flex items-start gap-2 text-sm text-stone-400">
              <Icon.Pin size={18} className="mt-0.5 shrink-0 text-[#F0C94A]" />
              Rua da Clínica Danfran, ao lado do ATM do Banco Atlântico, perto do Hotel Chik Chik /
              Bombas Central, Lubango, Huíla, Angola.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-stone-400">
              <Icon.Clock size={18} className="text-[#F0C94A]" />
              <span>
                <span className="font-semibold text-stone-200">Seg. a Sáb.</span> · 08h às 18h
              </span>
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-[#F0C94A]">Contactos</h3>
            <ul className="mt-5 space-y-3 text-sm text-stone-400">
              <li>
                <a
                  href={`tel:+${WHATSAPP}`}
                  className="flex items-center gap-2 hover:text-[#F0C94A]"
                >
                  <Icon.Phone size={18} /> {formatPhone(WHATSAPP)}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  className="flex items-center gap-2 hover:text-[#F0C94A]"
                >
                  <Icon.WhatsApp size={18} /> WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon.Instagram size={18} /> @plugbusiness.lda
              </li>
              <li className="flex items-center gap-2">
                <Icon.Map size={18} /> Lubango · Namibe · Benguela · Luanda
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 py-8 text-xs text-stone-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Grupo Plug Business, Lda. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Marca angolana <Icon.Flag size={14} className="text-[#F0C94A]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
