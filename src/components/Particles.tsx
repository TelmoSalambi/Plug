const dots = Array.from({ length: 22 }, () => ({
  left: Math.random() * 100,
  delay: Math.random() * 12,
  dur: 10 + Math.random() * 12,
  size: 2 + Math.random() * 4,
}));

export function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
