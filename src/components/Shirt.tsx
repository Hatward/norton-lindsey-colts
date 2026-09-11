type ShirtProps = {
  body: string;
  trim: string;
  outline?: string;
  number: number;
  className?: string;
};

const SLEEVE_LEFT = "M16,6 L4,18 L12,30 L20,24 Z";
const SLEEVE_RIGHT = "M48,6 L60,18 L52,30 L44,24 Z";
const BODY_PATH =
  "M32,4 L24,10 L16,6 L4,18 L12,30 L20,24 L20,60 L44,60 L44,24 L52,30 L60,18 L48,6 L40,10 Z";

/** Stylised jersey icon: two-tone body/sleeves with a number, matching the
 * kit graphics from the club's season preview magazine. */
export function Shirt({ body, trim, outline, number, className }: ShirtProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d={BODY_PATH}
        fill={body}
        stroke={outline ?? trim}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path d={SLEEVE_LEFT} fill={trim} />
      <path d={SLEEVE_RIGHT} fill={trim} />
      <text
        x="32"
        y="48"
        textAnchor="middle"
        fontSize="20"
        fontWeight="800"
        fill={trim}
        fontFamily="var(--font-sans), sans-serif"
      >
        {number}
      </text>
    </svg>
  );
}
