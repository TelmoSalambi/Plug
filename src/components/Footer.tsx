import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import {
  brands,
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
        aria-label={
          copied ? `Número ${formatPhone(number)} copiado` : `Copiar número ${formatPhone(number)}`
        }
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded text-stone-400 transition hover:text-[#F0C94A] sm:hidden sm:group-hover:flex sm:group-focus-within:flex",
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
    <footer className="border-t border-white/[0.07] bg-[#080a0d] pt-14 sm:pt-16">
      <div className="site-container">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Logo size={46} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-400">
              Grupo empresarial angolano sediado em Lubango, Huíla. Conheça as nossas onze marcas e
              encontre os contactos certos para cada serviço.
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

          <div className="lg:col-span-4">
            <h3 className="font-display font-bold text-white">As 11 marcas do grupo</h3>
            <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {brands.map((b) => {
                const Ico = Icon[b.icon];
                return (
                  <li key={b.id}>
                    <Link
                      to={`/marcas/${b.id}`}
                      className="group flex items-start gap-2 rounded-lg transition hover:text-[#F0C94A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0C94A]"
                    >
                      <span className="mt-0.5 shrink-0" style={{ color: b.accent }}>
                        <Ico size={18} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-white group-hover:text-[#F0C94A]">
                          {b.name}
                        </span>
                        <span className="block text-xs text-stone-400">{b.shortDesc}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-white">Morada & Horário</h3>
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

          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-white">Contactos</h3>
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
              <li>
                <a
                  href={social.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition hover:text-[#F0C94A]"
                >
                  <Icon.Instagram size={18} /> {social.instagram.handle}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon.Map size={18} className="mt-0.5 shrink-0" /> Lubango · Namibe · Benguela ·
                Luanda
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/5 py-8 text-xs text-stone-400 sm:flex-row">
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
