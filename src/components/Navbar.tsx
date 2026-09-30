import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { waLink } from "../lib/data";
import { Icon } from "./Icon";
import { cn } from "../utils/cn";

const links = [
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#ourivesaria", label: "Ourivesaria" },
  { href: "#plugclean", label: "Plug Clean" },
  { href: "#precos", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-[1760px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <a href="#top">
          <Logo size={scrolled ? 38 : 44} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-stone-300 transition hover:text-[#F0C94A]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink("Olá! Gostaria de falar com o Grupo Plug Business.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 btn-shine rounded-full bg-gradient-to-r from-[#F0C94A] to-[#C9A227] px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] transition hover:brightness-110 gold-glow"
          >
            <Icon.WhatsApp size={18} /> Fale connosco
          </a>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-[#F0C94A]"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-3 mx-4 rounded-2xl glass p-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-stone-200 font-medium hover:text-[#F0C94A]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink("Olá! Gostaria de falar com o Grupo Plug Business.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 btn-shine rounded-full bg-gradient-to-r from-[#F0C94A] to-[#C9A227] px-5 py-3 text-center text-sm font-semibold text-[#0A0A0A]"
          >
            <Icon.WhatsApp size={18} /> Fale connosco
          </a>
        </div>
      )}
    </header>
  );
}
