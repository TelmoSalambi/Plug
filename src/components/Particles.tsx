// Gerador pseudo-aleatório determinístico para evitar mismatch SSR/hidratação
function seeded(seed: number) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

const rand = seeded(42);
const dots = Array.from({ length: 22 }, () => ({
  left: rand() * 100,
  delay: rand() * 12,
  dur: 10 + rand() * 12,
  size: 2 + rand() * 4,
}));

export function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((dot, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${dot.left}%`,
            bottom: "-10px",
            width: dot.size,
            height: dot.size,
            background: "radial-gradient(circle, #F0C94A 0%, rgba(201,162,39,0) 70%)",
            animation: `floatUp ${dot.dur}s linear ${dot.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
