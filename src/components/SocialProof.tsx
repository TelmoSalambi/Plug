import { socialProof } from "../lib/data";
import { Icon } from "./Icon";

export function SocialProof() {
  return (
    <section
      className="border-b border-white/[0.06] bg-[#0d0f13]/75 py-8 sm:py-10"
      aria-label="Informações do Grupo Plug Business"
    >
      <div className="site-container">
        <dl className="grid grid-cols-2 divide-x divide-y divide-white/[0.08] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.018] sm:grid-cols-4 sm:divide-y-0">
          {socialProof.map((item) => {
            const Ico = Icon[item.icon];
            return (
              <div key={item.title} className="flex items-center gap-3 px-4 py-5 sm:px-5 lg:px-7">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A227]/[0.08] text-[#F0C94A]">
                  <Ico size={20} />
                </span>
                <div className="min-w-0">
                  <dt className="truncate text-sm font-semibold text-white">{item.title}</dt>
                  <dd className="mt-0.5 text-xs leading-relaxed text-stone-400">{item.desc}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
