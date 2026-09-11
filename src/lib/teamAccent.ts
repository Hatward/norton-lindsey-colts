export type TeamAccent = "yellows" | "blues";

export function teamAccentFrom(teamName: string): TeamAccent {
  return teamName.toLowerCase().includes("yellow") ? "yellows" : "blues";
}

// Tailwind can't see dynamically-interpolated class names at build time —
// always resolve through these maps rather than templating `team-${accent}`.
export const ACCENT_BORDER: Record<TeamAccent, string> = {
  yellows: "border-team-yellows",
  blues: "border-team-blues",
};

export const ACCENT_BG: Record<TeamAccent, string> = {
  yellows: "bg-team-yellows",
  blues: "bg-team-blues",
};

export const ACCENT_TEXT: Record<TeamAccent, string> = {
  yellows: "text-team-yellows",
  blues: "text-team-blues",
};

export const ACCENT_SHIRT: Record<TeamAccent, string> = {
  yellows: "/images/shirt-yellows.png",
  blues: "/images/shirt-blues.png",
};
