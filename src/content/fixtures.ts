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
  {
    slug: "vs-amington-diamonds",
    opponent: "Amington Diamonds U8",
    opponentBadge: "/images/amington.jpg",
    competition: "Nuneaton and Bedworth Junior League",
    matchweek: 3,
    venue: "Home",
    date: "2026-10-04",
  },
  {
    slug: "vs-vision-phoenix",
    opponent: "Vision Phoenix U8",
    opponentBadge: "/images/vision.jpg",
    competition: "Nuneaton and Bedworth Junior League",
    matchweek: 4,
    venue: "Home",
    date: "2026-10-11",
  },
];
