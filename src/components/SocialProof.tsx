import { socialProof, social, schedule } from "../lib/data";
import { Icon } from "./Icon";

export function SocialProof() {
  return (
    <section className="relative bg-[#0d0d0d] py-12">
      <div className="mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {socialProof.map((s, i) => {
            const Ico = Icon[s.icon];
            return (
              <div
                key={s.title}
                className="reveal glass rounded-2xl p-6 text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A227]/30 bg-[#C9A227]/10 text-[#F0C94A]">
                  <Ico size={24} />
                </div>
                <h2 className="font-display text-lg font-bold text-[#F0C94A]">{s.title}</h2>
                <p className="mt-1 text-sm text-stone-400">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-stone-400">
            <Icon.Clock size={18} className="text-[#F0C94A]" />
            <span className="font-semibold text-stone-200">Horário:</span> {schedule}
          </div>
          <div className="flex items-center gap-5 text-sm">
            <a
              href={social.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-stone-300 transition hover:text-[#F0C94A]"
            >
              <Icon.Instagram size={18} /> {social.instagram.handle}
            </a>
            <a
              href={social.tiktok.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-stone-300 transition hover:text-[#F0C94A]"
            >
              <Icon.Music size={18} /> TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
