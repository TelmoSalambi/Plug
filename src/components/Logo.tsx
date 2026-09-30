import logoUrl from "../assets/logo.jpg";

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="relative flex items-center justify-center rounded-xl gold-glow"
        style={{
          width: size,
          height: size,
          background: "linear-gradient(140deg,#1a1a1a,#0a0a0a)",
          border: "1px solid rgba(201,162,39,0.5)",
        }}
      >
        <img
          src={logoUrl}
          alt="Logotipo do Grupo Plug Business"
          width={size * 0.8}
          height={size * 0.8}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="leading-tight">
        <div className="font-display text-lg font-bold tracking-wide text-gradient-gold">
          PLUG BUSINESS
        </div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-stone-400">
          Grupo Empresarial
        </div>
      </div>
    </div>
  );
}
