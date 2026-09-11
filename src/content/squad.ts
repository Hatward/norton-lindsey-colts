export type Player = {
  /** Short form used to match goal-scorer entries in match reports. */
  name: string;
  displayName: string;
  number: number;
  favouritePlayer: string;
  signatureSkill: string;
  favouriteThing: string;
};

export type Team = {
  id: "yellows" | "blues";
  teamName: string;
  league: string;
  playDay: string;
  shirtImage: string;
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
    shirtImage: "/images/shirt-yellows.png",
    players: [
      {
        name: "Reign",
        displayName: "Reign Webb",
        number: 1,
        favouritePlayer: "Tatsuhiro Sakamoto",
        signatureSkill: "360",
        favouriteThing: "Making saves",
      },
      {
        name: "Hugo",
        displayName: "Hugo Copeland",
        number: 5,
        favouritePlayer: "Desire Doue",
        signatureSkill: "360",
        favouriteThing: "Playing against harder opponents",
      },
      {
        name: "Roman",
        displayName: "Roman Webb",
        number: 6,
        favouritePlayer: "Cristiano Ronaldo",
        signatureSkill: "360",
        favouriteThing: "Being tough",
      },
      {
        name: "Taylor",
        displayName: "Taylor Cohn",
        number: 8,
        favouritePlayer: "CR7",
        signatureSkill: "Step Overs",
        favouriteThing: "Scoring goals",
      },
      {
        name: "Jake",
        displayName: "Jake Hayward",
        number: 9,
        favouritePlayer: "Wayne Rooney",
        signatureSkill: "Drag then rabona",
        favouriteThing: "Playing football with my friends",
      },
      {
        name: "Max",
        displayName: "Max Eaton",
        number: 10,
        favouritePlayer: "James Maddison",
        signatureSkill: "Step over shift",
        favouriteThing: "I like celebrating with the team and they're my friends",
      },
      {
        name: "Arthur",
        displayName: "Arthur Warren",
        number: 11,
        favouritePlayer: "Hajji Wright",
        signatureSkill: "Ronaldo Chop",
        favouriteThing: "Having lots of mates and that we all play as a team",
      },
    ],
  },
  {
    id: "blues",
    teamName: "The Blues",
    league: "Nuneaton and Bedworth Junior League",
    playDay: "Sundays",
    shirtImage: "/images/shirt-blues.png",
    players: [
      {
        name: "Reign",
        displayName: "Reign Webb",
        number: 1,
        favouritePlayer: "Tatsuhiro Sakamoto",
        signatureSkill: "360",
        favouriteThing: "Making saves",
      },
      {
        name: "Woody",
        displayName: "Woody Hopkins",
        number: 4,
        favouritePlayer: "Cristiano Ronaldo",
        signatureSkill: "Ronaldo chop",
        favouriteThing: "Winning matches",
      },
      {
        name: "Roman",
        displayName: "Roman Webb",
        number: 6,
        favouritePlayer: "Cristiano Ronaldo",
        signatureSkill: "360",
        favouriteThing: "Being tough",
      },
      {
        name: "Ziah",
        displayName: "Ziah Crowley",
        number: 7,
        favouritePlayer: "Messi",
        signatureSkill: "Maradona",
        favouriteThing: "Having friends",
      },
      {
        name: "Jake",
        displayName: "Jake Hayward",
        number: 9,
        favouritePlayer: "Wayne Rooney",
        signatureSkill: "Drag then rabona",
        favouriteThing: "Playing football with my friends",
      },
      {
        name: "George",
        displayName: "George Lee",
        number: 12,
        favouritePlayer: "Lamine Yamal",
        signatureSkill: "Step overs",
        favouriteThing: "Playing matches with my friends",
      },
      {
        name: "Noah",
        displayName: "Noah Kelly",
        number: 20,
        favouritePlayer: "Phil Foden",
        signatureSkill: "Drop the shoulder then take them on the outside",
        favouriteThing: "All of my friends",
      },
    ],
  },
];
