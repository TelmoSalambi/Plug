import { testimonials } from "../lib/data";
import { Icon } from "./Icon";

export function Testimonials() {
  return (
    <section
      className="border-b border-white/[0.06] py-20 sm:py-24"
      aria-labelledby="testimonials-title"
    >
      <div className="site-container">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="section-kicker">Clientes satisfeitos</p>
          <h2 id="testimonials-title" className="section-title mt-4">
            Relações construídas com <span className="text-gradient-gold">confiança.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className="reveal flex flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-5 sm:p-6"
              style={{ transitionDelay: `${index * 35}ms` }}
            >
              <div
                className="flex items-center gap-1 text-[#F0C94A]"
                role="img"
                aria-label={`${testimonial.rating} de 5 estrelas`}
              >
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Icon.Star key={starIndex} size={15} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-stone-300">
                “{testimonial.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/[0.08] pt-4">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A227]/25 bg-[#C9A227]/[0.08] font-semibold text-[#F0C94A]"
                  aria-hidden="true"
                >
                  {testimonial.name[0]}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{testimonial.name}</span>
                  <span className="mt-0.5 flex items-center gap-1 text-xs text-stone-400">
                    <Icon.Pin size={12} /> {testimonial.city}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
