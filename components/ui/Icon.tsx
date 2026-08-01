/** Thin line icons (1.6px stroke), currentColor. */
export function Icon({ name, size = 26 }: { name: IconName; size?: number }) {
  const p = paths[name];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {p}
    </svg>
  );
}

export type IconName =
  | "render"
  | "drawing"
  | "supplier"
  | "ambient"
  | "task"
  | "accent"
  | "ruler"
  | "spark"
  | "shield";

const paths: Record<IconName, React.ReactNode> = {
  render: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  drawing: (
    <>
      <path d="M4 20h16" />
      <path d="M6 20V8l6-4 6 4v12" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  supplier: (
    <>
      <path d="M12 3v18M5 8l7-5 7 5" />
      <circle cx="12" cy="16" r="3" />
    </>
  ),
  ambient: (
    <>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
    </>
  ),
  task: (
    <>
      <path d="M9 3h6l2 7H7l2-7Z" />
      <path d="M12 10v7M8 21h8" />
    </>
  ),
  accent: (
    <>
      <path d="M5 21V8l7-5 7 5v13" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  ruler: (
    <>
      <path d="M3 8l5-5 13 13-5 5z" />
      <path d="M8 7l1.5 1.5M11 10l1.5 1.5M14 13l1.5 1.5" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.9 5.6L20 10l-6.1 1.4L12 17l-1.9-5.6L4 10l6.1-1.4z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.2-3 7.4-7 9-4-1.6-7-4.8-7-9V6z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </>
  ),
};
