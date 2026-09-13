export type Fixture = {
  slug: string;
  opponent: string;
  opponentBadge?: string;
  competition: string;
  matchweek: number;
  venue: "Home" | "Away";
  date: string;
};

export const fixtures: Fixture[] = [
  {
    slug: "vs-sky-blues-community-u9-girls",
    opponent: "Sky Blues in the Community U9 Girls",
    opponentBadge: "/images/skyblues.jpeg",
    competition: "Mid Warwickshire Football League",
    matchweek: 3,
    venue: "Away",
    date: "2026-09-19",
  },
  {
    slug: "vs-chetwynd-lionesses-u9",
    opponent: "Chetwynd Lionesses U9",
    opponentBadge: "/images/chetwynd.png",
    competition: "Nuneaton and Bedworth Junior League",
    matchweek: 3,
    venue: "Home",
    date: "2026-09-20",
  },
];
