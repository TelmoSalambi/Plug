import { useEffect, useRef, useState } from "react";
import { waLink, WHATSAPP_LIST, formatPhone } from "../lib/data";
import { Icon } from "./Icon";
import { cn } from "../utils/cn";

const PRIMARY_MSG = "Olá! Vim pelo site do Grupo Plug Business.";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const hasMultiple = WHATSAPP_LIST.length > 1;

  useEffect(() => {
    if (!open || !hasMultiple) return;

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnScroll = () => setOpen(false);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("click", closeOnOutsideClick);
    window.addEventListener("scroll", closeOnScroll, { passive: true });
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
      window.removeEventListener("scroll", closeOnScroll);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [hasMultiple, open]);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
    >
      {hasMultiple && (
        <div
          id="whatsapp-contacts"
          role="group"
          aria-label="Contactos do WhatsApp"
          aria-hidden={!open}
          className={cn(
            "flex w-[min(19rem,calc(100vw-2rem))] flex-col gap-2 rounded-2xl border border-white/10 bg-[#111318] p-3 shadow-2xl shadow-black/50",
            open ? "animate-fade-slide" : "hidden"
          )}
        >
          <p className="px-2 pb-1 pt-1 text-xs font-semibold uppercase tracking-wider text-[#F0C94A]">
            Escolha o contacto
          </p>
          {WHATSAPP_LIST.map((number) => (
            <a
              key={number}
              href={waLink(PRIMARY_MSG, number)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-stone-100 transition hover:bg-[#25D366]/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
            >
              <Icon.WhatsApp size={18} className="text-[#25D366]" />
              {formatPhone(number)}
            </a>
          ))}
        </div>
      )}

      {hasMultiple ? (
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Fechar contactos WhatsApp" : "Escolher contacto WhatsApp"}
          aria-expanded={open}
          aria-controls="whatsapp-contacts"
          className={cn(
            "inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/10 bg-[#1caa58] px-4 text-white shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:bg-[#168f49] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white",
            open && "bg-[#137a3f] hover:bg-[#137a3f]"
          )}
        >
          {open ? <Icon.Plus size={21} /> : <Icon.WhatsApp size={22} />}
          <span className="hidden pr-1 text-sm font-semibold sm:inline">
            {open ? "Fechar" : "WhatsApp"}
          </span>
        </button>
      ) : (
        <a
          href={waLink(PRIMARY_MSG)}
          target="_blank"
          rel="noreferrer"
          aria-label="Fale connosco no WhatsApp"
          className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/10 bg-[#1caa58] px-4 text-white shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:bg-[#168f49] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <Icon.WhatsApp size={22} />
          <span className="hidden pr-1 text-sm font-semibold sm:inline">WhatsApp</span>
        </a>
      )}
    </div>
  );
}
