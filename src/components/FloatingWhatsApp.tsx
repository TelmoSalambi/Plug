import { useEffect, useState } from "react";
import { waLink, WHATSAPP_LIST, formatPhone } from "../lib/data";
import { Icon } from "./Icon";
import { cn } from "../utils/cn";

const PRIMARY_MSG = "Olá! Vim pelo site do Grupo Plug Business.";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  // Fechar ao clicar fora
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    // Pequeno atraso para não capturar o clique que abriu
    const t = window.setTimeout(() => {
      window.addEventListener("click", close);
      window.addEventListener("scroll", close, { passive: true });
    }, 50);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("click", close);
      window.removeEventListener("scroll", close);
    };
  }, [open]);

  const hasMultiple = WHATSAPP_LIST.length > 1;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Menu expansível com contactos */}
      {open && hasMultiple && (
        <div
          className="animate-fade-slide flex flex-col gap-2 rounded-2xl glass p-3 shadow-2xl shadow-black/50"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="px-2 pb-1 pt-1 text-xs font-semibold uppercase tracking-wider text-[#F0C94A]">
            Escolha o contacto
          </p>
          {WHATSAPP_LIST.map((n) => (
            <a
              key={n}
              href={waLink(PRIMARY_MSG, n)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-stone-100 transition hover:bg-[#25D366]/15 hover:text-white"
              onClick={() => setOpen(false)}
            >
              <Icon.WhatsApp size={18} className="text-[#25D366]" />
              {formatPhone(n)}
            </a>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (hasMultiple) {
            setOpen((o) => !o);
          } else {
            window.open(waLink(PRIMARY_MSG), "_blank", "noreferrer");
          }
        }}
        aria-label="Fale connosco no WhatsApp"
        aria-expanded={open}
        aria-haspopup={hasMultiple ? "menu" : undefined}
        className={cn(
          "flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/50 transition",
          open ? "h-14 w-14 rotate-90" : "h-14 w-14 hover:scale-110",
          !open && "animate-wa-pulse"
        )}
      >
        {open ? <Icon.Plus size={28} /> : <Icon.WhatsApp size={28} />}
      </button>
    </div>
  );
}
