export type Player = {
  /** Short form used to match goal-scorer entries in match reports. */
  name: string;
  displayName: string;
  number: number;
};

export type Team = {
  id: "yellows" | "blues";
  teamName: string;
  league: string;
  playDay: string;
  shirt: { body: string; trim: string; outline?: string };
  players: Player[];
};

// Rosters and league details from the club's 2026/27 Season Preview
// magazine ("Meet the Teams"). Several players turn out for both squads.
export const teams: Team[] = [
  {
    id: "yellows",
    teamName: "The Yellows",
    league: "Mid Warwickshire Football League",
    playDay: "Saturdays",
    shirt: { body: "#FFCD00", trim: "#14205C" },
    players: [
      { name: "Reign", displayName: "Reign Webb", number: 1 },
      { name: "Hugo", displayName: "Hugo Copeland", number: 5 },
      { name: "Roman", displayName: "Roman Webb", number: 6 },
      { name: "Taylor", displayName: "Taylor Cohn", number: 8 },
      { name: "Jake", displayName: "Jake Hayward", number: 9 },
      { name: "Max", displayName: "Max Eaton", number: 10 },
      { name: "Arthur", displayName: "Arthur Warren", number: 11 },
    ],
  },
  {
    id: "blues",
    teamName: "The Blues",
    league: "Nuneaton and Bedworth Junior League",
    playDay: "Sundays",
    shirt: { body: "#FFFFFF", trim: "#14205C", outline: "#c9cdd6" },
    players: [
      { name: "Reign", displayName: "Reign Webb", number: 1 },
      { name: "Woody", displayName: "Woody Hopkins", number: 4 },
      { name: "Roman", displayName: "Roman Webb", number: 6 },
      { name: "Ziah", displayName: "Ziah Crowley", number: 7 },
      { name: "Jake", displayName: "Jake Hayward", number: 9 },
      { name: "George", displayName: "George Lee", number: 12 },
      { name: "Noah", displayName: "Noah Kelly", number: 20 },
    ],
  },
];
