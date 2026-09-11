export type Fixture = {
  slug: string;
  opponent: string;
  venue: "Home" | "Away";
  date: string;
};

export const fixtures: Fixture[] = [
  {
    slug: "vs-hillmorton-dragons-u8s",
    opponent: "Hillmorton Dragons U8s",
    venue: "Home",
    date: "2026-09-12",
  },
  {
    slug: "vs-chetwynd-lions",
    opponent: "Chetwynd Lions",
    venue: "Home",
    date: "2026-09-13",
  },
  {
    slug: "vs-sky-blues-community-u9-girls",
    opponent: "Sky Blues in the Community U9 Girls",
    venue: "Away",
    date: "2026-09-19",
  },
  {
    slug: "vs-chetwynd-lionesses-u9",
    opponent: "Chetwynd Lionesses U9",
    venue: "Home",
    date: "2026-09-20",
  },
];
