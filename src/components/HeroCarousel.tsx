import { useCallback, useEffect, useRef, useState } from "react";
import { Icon, type IconKey } from "./Icon";
import bannerTech from "../assets/banner-tech.jpg";
import bannerGold from "../assets/banner-gold.jpg";
import bannerClean from "../assets/banner-clean.jpg";

type Slide = {
  image: string;
  label: string;
  icon: IconKey;
  accent: string;
};

const slides: Slide[] = [
  { image: bannerTech, label: "Tecnologia", icon: "Phone", accent: "#F0C94A" },
  { image: bannerGold, label: "Ourivesaria", icon: "Ring", accent: "#F0C94A" },
  { image: bannerClean, label: "Plug Clean", icon: "Sofa", accent: "#4fd1c5" },
];

const ROTATE_MS = 5500;

/**
 * fill = true  → o carrossel preenche toda a secção (fundo, texto por cima)
 * fill = false → cartão 4/3 com chips das marcas (uso avulso)
 */
export function HeroCarousel({ fill = false }: { fill?: boolean }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  const goTo = useCallback((i: number) => setActive((i + slides.length) % slides.length), []);
  const next = useCallback(() => setActive((a) => (a + 1) % slides.length), []);

  // Ciclo automático com pausa inteligente
  useEffect(() => {
    if (paused) {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }
    timerRef.current = window.setInterval(next, ROTATE_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, next]);

  // Pausar quando o separador/tab está em background
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Pausar ao fazer hover ou focar no carrossel (fill mode = hero)
  const pauseProps = fill
    ? {
        onMouseEnter: () => setPaused(true),
        onMouseLeave: () => setPaused(false),
        onFocus: () => setPaused(true),
        onBlur: () => setPaused(false),
      }
    : {};

  return (
    <div
      ref={containerRef}
      className={fill ? "absolute inset-0" : "relative animate-fade-slide"}
      {...pauseProps}
      aria-roledescription="carrossel"
      aria-label="Áreas do Grupo Plug Business"
    >
      {!fill && (
        <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-[#C9A227]/20 to-transparent blur-2xl" />
      )}

      <div
        className={
          fill
            ? "absolute inset-0 overflow-hidden"
            : "relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#C9A227]/25"
        }
      >
        {slides.map((s, i) => (
          <div
            key={s.image}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
            aria-hidden={i !== active}
          >
            <img
              src={s.image}
              alt={s.label}
              className="h-full w-full object-cover"
              width={1400}
              height={788}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={i === 0 ? "high" : "auto"}
              style={{
                transform: i === active ? "scale(1.06)" : "scale(1)",
                transition: "transform 6s ease-out",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

            {/* slide label */}
            <div
              className={
                fill
                  ? "absolute bottom-6 right-6 hidden items-center gap-2 rounded-full bg-[#0A0A0A]/70 px-4 py-2 text-sm font-semibold backdrop-blur sm:flex"
                  : "absolute left-5 top-5 flex items-center gap-2 rounded-full bg-[#0A0A0A]/70 px-4 py-2 text-sm font-semibold backdrop-blur"
              }
              style={{ color: s.accent }}
            >
              {(() => {
                const Ico = Icon[s.icon];
                return <Ico size={18} />;
              })()}
              {s.label}
            </div>
          </div>
        ))}

        {/* progress dots */}
        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2" role="tablist">
          {slides.map((s, i) => (
            <button
              key={s.label}
              role="tab"
              aria-selected={i === active}
              aria-label={`Ver ${s.label}`}
              onClick={() => goTo(i)}
              className="h-1.5 rounded-full transition-all duration-500"
              style={{
                width: i === active ? 28 : 10,
                background: i === active ? s.accent : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>
      </div>

      {/* brand chips (apenas no modo cartão) */}
      {!fill && (
        <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 gap-4 rounded-2xl glass px-5 py-3 text-center text-xs">
          <span className="flex items-center gap-1.5 font-semibold text-stone-200">
            <Icon.Phone size={16} className="text-[#F0C94A]" /> Tecnologia
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-stone-200">
            <Icon.Ring size={16} className="text-[#F0C94A]" /> Ourivesaria
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-stone-200">
            <Icon.Sofa size={16} className="text-[#4fd1c5]" /> Plug Clean
          </span>
        </div>
      )}
    </div>
  );
}
