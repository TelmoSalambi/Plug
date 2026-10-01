import { useMemo, useState } from "react";
import { Logo } from "./Logo";
import { Icon, type IconKey } from "./Icon";
import {
  WHATSAPP_LIST,
  formatPhone,
  address,
  schedule,
  social,
  mapCoords,
  telLink,
  waLink,
} from "../lib/data";
import { cn } from "../utils/cn";

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

function PhoneRow({ number, defaultNumber }: { number: string; defaultNumber: string }) {
  const [copied, setCopied] = useState(false);
  const isPrimary = number === defaultNumber;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`+${number}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* silencioso */
    }
  };

  return (
    <li className="group flex items-center gap-2">
      <a
        href={telLink(number)}
        className="flex flex-1 items-center gap-2 transition hover:text-[#F0C94A]"
      >
        <Icon.Phone size={18} />
        {formatPhone(number)}
        {isPrimary && (
          <span className="ml-1 rounded-full bg-[#C9A227]/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#F0C94A]">
            WhatsApp
          </span>
        )}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label="Copiar número"
        className={cn(
          "hidden h-6 w-6 items-center justify-center rounded text-stone-500 transition hover:text-[#F0C94A] group-hover:flex",
          copied && "flex text-[#F0C94A]"
        )}
      >
        {copied ? <Icon.Check size={14} /> : <Icon.Copy size={12} />}
      </button>
    </li>
  );
}

export function Footer() {
  const mapSrc = useMemo(() => {
    const delta = 0.006;
    const bbox = `${mapCoords.lon - delta},${mapCoords.lat - delta},${mapCoords.lon + delta},${mapCoords.lat + delta}`;
    return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${mapCoords.lat},${mapCoords.lon}`;
  }, []);

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
                href={social.instagram.url}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A227]/25 text-stone-300 transition hover:border-[#C9A227] hover:text-[#F0C94A]"
              >
                <Icon.Instagram size={20} />
              </a>
              <a
                href={social.tiktok.url}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A227]/25 text-stone-300 transition hover:border-[#C9A227] hover:text-[#F0C94A]"
              >
                <Icon.Music size={20} />
              </a>
              <a
                href={waLink("Olá! Vim pelo site do Grupo Plug Business.")}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
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
              {address}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-stone-400">
              <Icon.Clock size={18} className="text-[#F0C94A]" />
              <span>
                <span className="font-semibold text-stone-200">{schedule}</span>
              </span>
            </p>
            {/* Mini mapa OpenStreetMap */}
            <div className="mt-5 overflow-hidden rounded-xl border border-[#C9A227]/20">
              <iframe
                title="Localização do Grupo Plug Business no Lubango"
                src={mapSrc}
                width="100%"
                height="180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block bg-[#0A0A0A]"
              />
            </div>
            <a
              href={`https://www.openstreetmap.org/?mlat=${mapCoords.lat}&mlon=${mapCoords.lon}#map=17/${mapCoords.lat}/${mapCoords.lon}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-xs text-stone-400 transition hover:text-[#F0C94A]"
            >
              <Icon.Map size={14} /> Ver mapa completo
            </a>
          </div>

          <div>
            <h3 className="font-display font-bold text-[#F0C94A]">Contactos</h3>
            <ul className="mt-5 space-y-3 text-sm text-stone-400">
              {WHATSAPP_LIST.map((n) => (
                <PhoneRow key={n} number={n} defaultNumber={WHATSAPP_LIST[0]} />
              ))}
              <li>
                <a
                  href={waLink("Olá! Vim pelo site do Grupo Plug Business.")}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition hover:text-[#F0C94A]"
                >
                  <Icon.WhatsApp size={18} /> WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon.Instagram size={18} /> {social.instagram.handle}
              </li>
              <li className="flex items-center gap-2">
                <Icon.Map size={18} /> Lubango · Namibe · Benguela · Luanda
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/5 py-8 text-xs text-stone-500 sm:flex-row">
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
