import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { brands, waLink } from "../lib/data";
import { Icon } from "./Icon";
import { cn } from "../utils/cn";

type NavLink = { to: string; label: string; hash?: string };

const navLinks: NavLink[] = [
  { to: "/", label: "Início" },
  { to: "/", hash: "#como-funciona", label: "Como funciona" },
  { to: "/marcas/clean", hash: "#precos", label: "Preços Clean" },
  { to: "/", hash: "#faq", label: "Perguntas frequentes" },
];

function linkTarget(link: NavLink) {
  return link.hash ? { pathname: link.to, hash: link.hash } : link.to;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const brandsMenuRef = useRef<HTMLLIElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeMenus = () => {
      setMobileOpen(false);
      setBrandsOpen(false);
    };
    window.addEventListener("popstate", closeMenus);
    return () => window.removeEventListener("popstate", closeMenus);
  }, []);

  useEffect(() => {
    if (!mobileOpen && !brandsOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        mobileOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        !mobileButtonRef.current?.contains(target)
      ) {
        setMobileOpen(false);
      }
      if (brandsOpen && brandsMenuRef.current && !brandsMenuRef.current.contains(target)) {
        setBrandsOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (brandsOpen) setBrandsOpen(false);
      if (mobileOpen) {
        setMobileOpen(false);
        mobileButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [brandsOpen, mobileOpen]);

  const closeMenus = () => {
    setMobileOpen(false);
    setBrandsOpen(false);
  };

  const featured = brands.filter((brand) => brand.featured);
  const other = brands.filter((brand) => !brand.featured);
  const activeBrandPage = location.pathname.startsWith("/marcas/");

  const renderLink = (link: NavLink, mobile = false) => {
    const isActive = !link.hash && location.pathname === link.to;
    return (
      <li key={`${link.to}${link.hash ?? ""}`}>
        <Link
          to={linkTarget(link)}
          onClick={closeMenus}
          aria-current={isActive ? "page" : undefined}
          className={cn(
            "inline-flex min-h-10 items-center rounded-lg text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0C94A]",
            mobile
              ? "w-full px-3 text-stone-200 hover:bg-white/[0.04] hover:text-[#F0C94A]"
              : "px-2 text-stone-300 hover:text-white",
            isActive && "text-[#F0C94A]"
          )}
        >
          {link.label}
        </Link>
      </li>
    );
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-200",
        scrolled
          ? "border-white/[0.09] bg-[#090a0d]/95 py-2.5 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "border-white/[0.04] bg-[#090a0d]/80 py-3.5 backdrop-blur-lg"
      )}
    >
      <div className="site-container flex min-h-12 items-center justify-between gap-6">
        <Link
          to="/"
          aria-label="Grupo Plug Business — início"
          onClick={closeMenus}
          className="shrink-0"
        >
          <Logo size={scrolled ? 38 : 42} />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => renderLink(link))}
            <li
              ref={brandsMenuRef}
              className="relative"
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null))
                  setBrandsOpen(false);
              }}
            >
              <button
                type="button"
                aria-expanded={brandsOpen}
                aria-controls="desktop-brand-menu"
                onClick={() => setBrandsOpen((open) => !open)}
                className={cn(
                  "inline-flex min-h-10 items-center gap-1.5 rounded-lg px-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0C94A]",
                  brandsOpen || activeBrandPage
                    ? "text-[#F0C94A]"
                    : "text-stone-300 hover:text-white"
                )}
              >
                As marcas
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={cn("transition-transform duration-200", brandsOpen && "rotate-180")}
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                id="desktop-brand-menu"
                aria-hidden={!brandsOpen}
                inert={!brandsOpen}
                className={cn(
                  "absolute right-0 top-full z-50 w-[min(640px,calc(100vw-3rem))] pt-3 transition-all duration-200",
                  brandsOpen
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0"
                )}
              >
                <div className="rounded-2xl border border-white/10 bg-[#111318]/[0.98] p-5 shadow-2xl shadow-black/45 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="section-kicker text-[10px]">Encontre a área certa</p>
                      <p className="mt-1 text-xs text-stone-400">
                        Escolha uma marca para ver serviços e contactos.
                      </p>
                    </div>
                    <Link
                      to={{ pathname: "/", hash: "#marcas" }}
                      onClick={closeMenus}
                      className="shrink-0 text-xs font-semibold text-[#F0C94A] hover:text-white"
                    >
                      Ver todas <Icon.ArrowRight className="ml-1 inline" size={14} />
                    </Link>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {featured.map((brand) => {
                      const Ico = Icon[brand.icon];
                      return (
                        <Link
                          key={brand.id}
                          to={`/marcas/${brand.id}`}
                          onClick={closeMenus}
                          className="group rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 transition-colors hover:border-[#C9A227]/30 hover:bg-[#C9A227]/[0.04]"
                        >
                          <Ico size={20} style={{ color: brand.accent }} />
                          <span className="mt-2 block text-sm font-semibold text-white transition-colors group-hover:text-[#F0C94A]">
                            {brand.name}
                          </span>
                          <span className="mt-0.5 block text-[11px] text-stone-400">
                            {brand.shortDesc}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-4 border-t border-white/[0.08] pt-3">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-stone-400">
                      Outras marcas
                    </p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {other.map((brand) => {
                        const Ico = Icon[brand.icon];
                        return (
                          <li key={brand.id}>
                            <Link
                              to={`/marcas/${brand.id}`}
                              onClick={closeMenus}
                              className="flex min-h-9 items-center gap-2 rounded-lg px-2 text-sm text-stone-300 transition-colors hover:bg-white/[0.035] hover:text-[#F0C94A]"
                            >
                              <Ico size={15} style={{ color: brand.accent }} /> {brand.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <a
            href={waLink("Olá! Gostaria de falar com o Grupo Plug Business.")}
            target="_blank"
            rel="noreferrer"
            className="button-primary min-h-10 px-4 text-xs"
          >
            <Icon.WhatsApp size={16} /> Fale connosco
          </a>
        </nav>

        <button
          ref={mobileButtonRef}
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white transition hover:border-[#C9A227]/40 hover:text-[#F0C94A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0C94A] lg:hidden"
          aria-label={mobileOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            {mobileOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <nav
        ref={mobileMenuRef}
        id="mobile-menu"
        aria-label="Navegação móvel"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
        className={cn(
          "site-container mt-3 max-h-[calc(100svh-5rem)] overflow-y-auto rounded-2xl border border-white/10 bg-[#111318]/[0.98] p-3 shadow-2xl shadow-black/45 backdrop-blur-xl transition-all duration-200 lg:hidden",
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none hidden -translate-y-1 opacity-0"
        )}
      >
        <ul className="space-y-1">{navLinks.map((link) => renderLink(link, true))}</ul>
        <div className="mt-3 border-t border-white/[0.08] pt-3">
          <div className="flex items-center justify-between px-3 pb-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F0C94A]">
              As 11 marcas
            </p>
            <Link
              to={{ pathname: "/", hash: "#marcas" }}
              onClick={closeMenus}
              className="text-xs text-stone-400 hover:text-white"
            >
              Ver todas
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-1">
            {brands.map((brand) => {
              const Ico = Icon[brand.icon];
              return (
                <li key={brand.id}>
                  <Link
                    to={`/marcas/${brand.id}`}
                    onClick={closeMenus}
                    className="flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm text-stone-200 transition-colors hover:bg-white/[0.04] hover:text-[#F0C94A]"
                  >
                    <Ico size={15} style={{ color: brand.accent }} /> {brand.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <a
          href={waLink("Olá! Gostaria de falar com o Grupo Plug Business.")}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenus}
          className="button-primary mt-3 w-full"
        >
          <Icon.WhatsApp size={18} /> Fale connosco
        </a>
      </nav>
    </header>
  );
}
