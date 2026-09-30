import { useState } from "react";
import { faqs } from "../lib/data";
import { Icon } from "./Icon";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-14">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Tudo o que precisa de <span className="text-gradient-gold">saber</span>
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="reveal glass overflow-hidden rounded-2xl">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-white">{f.q}</span>
                <span
                  className="text-[#F0C94A] transition-transform"
                  style={{ transform: open === i ? "rotate(45deg)" : "none" }}
                >
                  <Icon.Plus size={22} />
                </span>
              </button>
              <div
                className="grid transition-all duration-300"
                style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-stone-400">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
