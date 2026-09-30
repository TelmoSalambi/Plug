type IconProps = { className?: string; size?: number; stroke?: number };

const base = (p: IconProps) => ({
  width: p.size ?? 24,
  height: p.size ?? 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: p.stroke ?? 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: p.className,
});

export const Icon = {
  Phone: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  ),
  Recycle: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M7 19H4.8a2 2 0 0 1-1.7-3l1.4-2.4" />
      <path d="m9.5 3.8 1.1-1.9a2 2 0 0 1 3.4 0l1.4 2.4" />
      <path d="M14.5 20.2l1.1 1.9M17 19h2.2a2 2 0 0 0 1.7-3l-1.4-2.4" />
      <path d="m10 8-3 1 1 3" />
      <path d="m14 16 3-1-1-3" />
      <path d="M12 2 9.5 6.3" />
    </svg>
  ),
  Headphones: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
      <rect x="2.5" y="14" width="4" height="7" rx="1.5" />
      <rect x="17.5" y="14" width="4" height="7" rx="1.5" />
    </svg>
  ),
  Plug: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M9 2v6M15 2v6" />
      <path d="M6 8h12v3a6 6 0 0 1-12 0V8Z" />
      <path d="M12 17v5" />
    </svg>
  ),
  Gamepad: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M6 12h4M8 10v4" />
      <circle cx="15" cy="11" r="1" />
      <circle cx="17.5" cy="13.5" r="1" />
      <rect x="2" y="6" width="20" height="12" rx="5" />
    </svg>
  ),
  Tool: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-2.4 2.6-2.6Z" />
    </svg>
  ),
  Ring: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="14" r="6" />
      <path d="m9 6 3-4 3 4" />
      <path d="m9 6 3 3 3-3" />
    </svg>
  ),
  Scale: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 3v18M7 21h10M5 7h14l-3.5 8h-7L5 7Z" />
      <path d="M5 7 3 12M19 7l2 5" />
    </svg>
  ),
  Cash: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  ),
  Sofa: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
      <path d="M2 13a2 2 0 0 1 4 0v3h12v-3a2 2 0 0 1 4 0v5H2v-5Z" />
      <path d="M4 18v2M20 18v2" />
    </svg>
  ),
  Car: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M5 13 6.5 8h11L19 13" />
      <path d="M3 17v-2.5A1.5 1.5 0 0 1 4.5 13h15a1.5 1.5 0 0 1 1.5 1.5V17a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-2 0v-1H7v1a1 1 0 0 1-2 0v-1H4a1 1 0 0 1-1-1Z" />
      <circle cx="7" cy="15.5" r="1" />
      <circle cx="17" cy="15.5" r="1" />
    </svg>
  ),
  Bed: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M2 18V7M2 12h20a0 0 0 0 1 0 0v6M22 18v-4" />
      <path d="M2 12v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      <path d="M2 18h20" />
    </svg>
  ),
  Chair: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M7 3v9M17 3v9M6 12h12l-1 4H7l-1-4Z" />
      <path d="M8 16v5M16 16v5M5 8h14" />
    </svg>
  ),
  Pin: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  Clock: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  Shield: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Truck: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.5" />
      <circle cx="17" cy="18" r="1.5" />
    </svg>
  ),
  Cart: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="9" cy="20" r="1.3" />
      <circle cx="18" cy="20" r="1.3" />
      <path d="M2 3h2.2l2 12h11l2-8H6" />
    </svg>
  ),
  Handshake: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" />
      <path d="m14 16 2.5 2.5a1.4 1.4 0 0 0 2-2L16 14" />
      <path d="M18 14 21 11 17 5l-3 1-4-1-6 3v5l2 2" />
      <path d="m4 15 4-4 3 3-2 2a1.4 1.4 0 0 1-2 0l-1-1" />
    </svg>
  ),
  Calendar: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  ),
  Sparkles: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
      <path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z" />
    </svg>
  ),
  Award: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
    </svg>
  ),
  Map: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  ),
  Users: (p: IconProps) => (
    <svg {...base(p)}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5M21 20a6 6 0 0 0-4-5.6" />
    </svg>
  ),
  Star: (p: IconProps) => (
    <svg {...base(p)} fill="currentColor" stroke="none">
      <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 20.8l1.2-6.6L2.5 9l6.6-.9L12 2Z" />
    </svg>
  ),
  Plus: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  WhatsApp: (p: IconProps) => (
    <svg
      width={p.size ?? 24}
      height={p.size ?? 24}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={p.className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.13c-.24.68-1.42 1.32-1.95 1.36-.5.05-.98.24-3.33-.7-2.8-1.13-4.6-3.98-4.74-4.17-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34.24-.26.53-.33.71-.33.18 0 .36 0 .51.01.16.01.39-.06.6.47.24.55.79 1.92.86 2.06.07.14.12.3.02.49-.09.19-.14.3-.28.47-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.24 2.25 1.38.28.14.44.12.6-.07.16-.19.69-.8.87-1.08.18-.28.36-.23.6-.14.24.09 1.55.73 1.82.87.28.14.46.21.53.33.07.12.07.68-.17 1.36z" />
    </svg>
  ),
  Instagram: (p: IconProps) => (
    <svg {...base(p)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Music: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M9 18V5l10-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="16" cy="16" r="3" />
    </svg>
  ),
  Flag: (p: IconProps) => (
    <svg {...base(p)}>
      <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
    </svg>
  ),
};

export type IconKey = keyof typeof Icon;
