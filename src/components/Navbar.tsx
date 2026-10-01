import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { brands } from "../lib/data";
import { Icon, type IconKey } from "./Icon";
import { cn } from "../utils/cn";

type NavLink = { to: string; label: string; isAnchor?: boolean };

const navLinks: NavLink[] = [
  { to: "/", label: "Início" },
  { to: "/#como-funciona", label: "Como Funciona", isAnchor: true },
  { to: "/marcas/clean", label: "Preços Clean" },
  { to: "/#faq", label: "FAQ", isAnchor: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
        setDropdown(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Fechar menu mobile é tratado por onClick em cada Link/botão de navegação

  useEffect(() => {
    if (!dropdown) return;
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setDropdown(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdown(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [dropdown]);

  const openDropdown = () => {
    if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    setDropdown(true);
  };
  const scheduleClose = () => {
    closeTimeoutRef.current = window.setTimeout(() => setDropdown(false), 150);
  };

  const closeAll = () => {
    setOpen(false);
    setDropdown(false);
  };

  // Navegar para âncora na home (funciona de qualquer página)
  const goAnchor = (hash: string) => {
    closeAll();
    const id = hash.replace("#", "");
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Espera pelo render da home antes de fazer scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const featured = brands.filter((b) => b.featured);
  const other = brands.filter((b) => !b.featured);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-[1760px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <Link to="/" aria-label="Grupo Plug Business — início" onClick={closeAll}>
          <Logo size={scrolled ? 38 : 44} />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          <ul className="flex items-center gap-7">
            {navLinks.map((l) =>
              l.isAnchor ? (
                <li key={l.to}>
                  <button
                    type="button"
                    onClick={() => goAnchor(l.to.slice(l.to.indexOf("#")))}
                    className="text-sm font-medium text-stone-300 transition hover:text-[#F0C94A]"
                  >
                    {l.label}
                  </button>
                </li>
              ) : (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={closeAll}
                    className="text-sm font-medium text-stone-300 transition hover:text-[#F0C94A]"
                  >
                    {l.label}
                  </Link>
                </li>
              )
            )}

            {/* Dropdown "As Marcas" */}
            <li
              ref={dropdownRef}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleClose}
              onFocus={openDropdown}
              onBlur={scheduleClose}
            >
              <button
                type="button"
                aria-expanded={dropdown}
                aria-haspopup="true"
                onClick={() => {
                  if (location.pathname !== "/") {
                    closeAll();
                    navigate("/");
                    setTimeout(() => {
                      const el = document.getElementById("marcas");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  } else {
                    setDropdown((d) => !d);
                  }
                }}
                className={cn(
                  "inline-flex items-center gap-1 text-sm font-medium transition",
                  dropdown ? "text-[#F0C94A]" : "text-stone-300 hover:text-[#F0C94A]"
                )}
              >
                As Marcas
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={cn("transition-transform", dropdown && "rotate-180")}
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={cn(
                  "absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all",
                  dropdown
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                )}
              >
                <div className="w-[580px] rounded-2xl border border-[#C9A227]/20 bg-[#0d0d0d]/95 p-5 shadow-2xl shadow-black/70 backdrop-blur-xl">
                  <div className="mb-3 flex items-center justify-between px-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F0C94A]">
                      Principais
                    </span>
                    <span className="text-xs text-stone-500">{featured.length} em destaque</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {featured.map((b) => {
                      const Ico = Icon[b.icon as IconKey];
                      return (
                        <Link
                          key={b.id}
                          to={`/marcas/${b.id}`}
                          onClick={closeAll}
                          className="group flex flex-col items-start gap-1 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-[#C9A227]/40 hover:bg-[#C9A227]/5"
                        >
                          <Ico size={22} style={{ color: b.accent }} />
                          <span className="mt-1 text-sm font-semibold text-white group-hover:text-[#F0C94A]">
                            {b.name}
                          </span>
                          <span className="text-[11px] text-stone-400">{b.shortDesc}</span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-4 border-t border-white/5 pt-3">
                    <span className="px-2 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">
                      Outras marcas
                    </span>
                    <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 px-2 py-1">
                      {other.map((b) => {
                        const Ico = Icon[b.icon as IconKey];
                        return (
                          <li key={b.id}>
                            <Link
                              to={`/marcas/${b.id}`}
                              onClick={closeAll}
                              className="flex items-center gap-2 rounded-lg py-1.5 text-sm text-stone-300 transition hover:text-[#F0C94A]"
                            >
                              <Ico size={14} style={{ color: b.accent }} />
                              {b.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => goAnchor("#marcas")}
                    className="mt-3 block w-full rounded-xl border border-[#C9A227]/30 bg-[#C9A227]/10 py-2 text-center text-sm font-semibold text-[#F0C94A] transition hover:bg-[#C9A227]/20"
                  >
                    Ver todas as 11 marcas →
                  </button>
                </div>
              </div>
            </li>
          </ul>

          <a
            href="https://wa.me/244941216095?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20o%20Grupo%20Plug%20Business."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 btn-shine rounded-full bg-gradient-to-r from-[#F0C94A] to-[#C9A227] px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] transition hover:brightness-110 gold-glow"
          >
            <Icon.WhatsApp size={18} /> Fale connosco
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-[#F0C94A]"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden mt-3 mx-4 rounded-2xl glass p-5 flex flex-col gap-1 max-h-[75vh] overflow-y-auto"
        >
          {navLinks.map((l) =>
            l.isAnchor ? (
              <button
                key={l.to}
                type="button"
                onClick={() => goAnchor(l.to.slice(l.to.indexOf("#")))}
                className="rounded-lg py-2 text-left text-stone-200 font-medium transition hover:text-[#F0C94A]"
              >
                {l.label}
              </button>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                onClick={closeAll}
                className="rounded-lg py-2 text-stone-200 font-medium transition hover:text-[#F0C94A]"
              >
                {l.label}
              </Link>
            )
          )}
          <div className="py-2">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#F0C94A]">
              As 11 Marcas
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 pl-1">
              {brands.map((b) => {
                const Ico = Icon[b.icon as IconKey];
                return (
                  <Link
                    key={b.id}
                    to={`/marcas/${b.id}`}
                    onClick={closeAll}
                    className="flex items-center gap-2 rounded-lg py-1.5 text-sm text-stone-200 transition hover:text-[#F0C94A]"
                  >
                    <Ico size={14} style={{ color: b.accent }} />
                    {b.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <a
            href="https://wa.me/244941216095?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20o%20Grupo%20Plug%20Business."
            target="_blank"
            rel="noreferrer"
            onClick={closeAll}
            className="mt-2 inline-flex items-center justify-center gap-2 btn-shine rounded-full bg-gradient-to-r from-[#F0C94A] to-[#C9A227] px-5 py-3 text-center text-sm font-semibold text-[#0A0A0A]"
          >
            <Icon.WhatsApp size={18} /> Fale connosco
          </a>
        </div>
      )}
    </header>
  );
}
