import { waLink } from "../lib/data";
import { Icon } from "./Icon";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Olá! Vim pelo site do Grupo Plug Business.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale connosco no WhatsApp"
      className="animate-wa-pulse fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/50 transition hover:scale-110"
    >
      <Icon.WhatsApp size={28} />
    </a>
  );
}
