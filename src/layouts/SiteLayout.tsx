import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";

export function SiteLayout() {
  const { pathname } = useLocation();

  // Scroll para o topo em cada troca de página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-stone-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#F0C94A] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0A0A0A]"
      >
        Ir para o conteúdo principal
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
