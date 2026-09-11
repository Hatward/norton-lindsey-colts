export type Player = {
  name: string;
  displayName: string;
};

// Unified from mentions across match reports (e.g. "Roman" / "Roman Webb"
// are the same player) — update this list as the squad changes.
export const squad: Player[] = [
  { name: "Jake", displayName: "Jake" },
  { name: "Roman", displayName: "Roman Webb" },
  { name: "George", displayName: "George Lee" },
  { name: "Noah", displayName: "Noah Kelly" },
  { name: "Ziah", displayName: "Ziah" },
  { name: "Woody", displayName: "Woody" },
  { name: "Reign", displayName: "Reign" },
  { name: "Arthur", displayName: "Arthur" },
  { name: "Max", displayName: "Max" },
  { name: "Hugo", displayName: "Hugo" },
  { name: "Taylor", displayName: "Taylor Cohn" },
];
