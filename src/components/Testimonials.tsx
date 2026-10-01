import { testimonials } from "../lib/data";
import { Icon } from "./Icon";

export function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#141005,#0A0A0A_60%)]" />
      <div className="relative mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-14">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            Clientes satisfeitos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Quem nos procura, <span className="text-gradient-gold">volta a confiar</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-[#C9A227]/40"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-3 flex gap-0.5 text-[#F0C94A]">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Icon.Star key={j} size={18} />
                ))}
              </div>
              <blockquote className="text-sm text-stone-300 leading-relaxed">
                <span className="text-[#F0C94A] font-display text-2xl leading-none mr-1 align-[-4px]">
                  “
                </span>
                {t.text}
                <span className="text-[#F0C94A] font-display text-2xl leading-none ml-1 align-[-4px]">
                  ”
                </span>
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F0C94A] to-[#C9A227] font-display font-bold text-[#0A0A0A]">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-stone-500 flex items-center gap-1">
                    <Icon.Pin size={12} /> {t.city}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
