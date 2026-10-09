import { useState } from "react";
import { faqs } from "../lib/data";
import { Icon } from "./Icon";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 border-b border-white/[0.06] py-20 sm:py-24"
      aria-labelledby="faq-title"
    >
      <div className="site-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div className="reveal max-w-xl">
          <p className="section-kicker">Perguntas frequentes</p>
          <h2 id="faq-title" className="section-title mt-4">
            Respostas claras, <span className="text-gradient-gold">sem complicação.</span>
          </h2>
          <p className="section-copy mt-4">
            Reunimos as dúvidas mais comuns sobre o Grupo Plug Business e as suas marcas.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <article
                key={faq.q}
                className="reveal overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]"
              >
                <h3>
                  <button
                    id={`faq-question-${index}`}
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.025] sm:px-6"
                  >
                    <span className="font-semibold leading-snug text-white">{faq.q}</span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#F0C94A] transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    >
                      <Icon.Plus size={17} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  aria-hidden={!isOpen}
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl px-5 pb-5 text-sm leading-relaxed text-stone-400 sm:px-6 sm:pb-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
