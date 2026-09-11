export type Player = {
  /** Short form used to match goal-scorer entries in match reports. */
  name: string;
  displayName: string;
  number: number;
  photo: string;
  shirtImage: string;
  favouritePlayer: string;
  signatureSkill: string;
  favouriteThing: string;
};

export type Team = {
  id: "yellows" | "blues";
  teamName: string;
  league: string;
  playDay: string;
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
    players: [
      {
        name: "Reign",
        displayName: "Reign Webb",
        number: 1,
        photo: "/images/squad/profiles/reign.jpg",
        shirtImage: "/images/squad/shirt-yellows-1.png",
        favouritePlayer: "Tatsuhiro Sakamoto",
        signatureSkill: "360",
        favouriteThing: "Making saves",
      },
      {
        name: "Hugo",
        displayName: "Hugo Copeland",
        number: 5,
        photo: "/images/squad/profiles/hugo.jpg",
        shirtImage: "/images/squad/shirt-yellows-5.png",
        favouritePlayer: "Desire Doue",
        signatureSkill: "360",
        favouriteThing: "Playing against harder opponents",
      },
      {
        name: "Roman",
        displayName: "Roman Webb",
        number: 6,
        photo: "/images/squad/profiles/roman.jpg",
        shirtImage: "/images/squad/shirt-yellows-6.png",
        favouritePlayer: "Cristiano Ronaldo",
        signatureSkill: "360",
        favouriteThing: "Being tough",
      },
      {
        name: "Taylor",
        displayName: "Taylor Cohn",
        number: 8,
        photo: "/images/squad/profiles/taylor.jpg",
        shirtImage: "/images/squad/shirt-yellows-8.png",
        favouritePlayer: "CR7",
        signatureSkill: "Step Overs",
        favouriteThing: "Scoring goals",
      },
      {
        name: "Jake",
        displayName: "Jake Hayward",
        number: 9,
        photo: "/images/squad/profiles/jake.jpg",
        shirtImage: "/images/squad/shirt-yellows-9.png",
        favouritePlayer: "Wayne Rooney",
        signatureSkill: "Drag then rabona",
        favouriteThing: "Playing football with my friends",
      },
      {
        name: "Max",
        displayName: "Max Eaton",
        number: 10,
        photo: "/images/squad/profiles/max.jpg",
        shirtImage: "/images/squad/shirt-yellows-10.png",
        favouritePlayer: "James Maddison",
        signatureSkill: "Step over shift",
        favouriteThing: "I like celebrating with the team and they're my friends",
      },
      {
        name: "Arthur",
        displayName: "Arthur Warren",
        number: 11,
        photo: "/images/squad/profiles/arthur.jpg",
        shirtImage: "/images/squad/shirt-yellows-11.png",
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
    players: [
      {
        name: "Reign",
        displayName: "Reign Webb",
        number: 1,
        photo: "/images/squad/profiles/reign.jpg",
        shirtImage: "/images/squad/shirt-blues-1.png",
        favouritePlayer: "Tatsuhiro Sakamoto",
        signatureSkill: "360",
        favouriteThing: "Making saves",
      },
      {
        name: "Woody",
        displayName: "Woody Hopkins",
        number: 4,
        photo: "/images/squad/profiles/woody.jpg",
        shirtImage: "/images/squad/shirt-blues-4.png",
        favouritePlayer: "Cristiano Ronaldo",
        signatureSkill: "Ronaldo chop",
        favouriteThing: "Winning matches",
      },
      {
        name: "Roman",
        displayName: "Roman Webb",
        number: 6,
        photo: "/images/squad/profiles/roman.jpg",
        shirtImage: "/images/squad/shirt-blues-6.png",
        favouritePlayer: "Cristiano Ronaldo",
        signatureSkill: "360",
        favouriteThing: "Being tough",
      },
      {
        name: "Ziah",
        displayName: "Ziah Crowley",
        number: 7,
        photo: "/images/squad/profiles/ziah.jpg",
        shirtImage: "/images/squad/shirt-blues-7.png",
        favouritePlayer: "Messi",
        signatureSkill: "Maradona",
        favouriteThing: "Having friends",
      },
      {
        name: "Jake",
        displayName: "Jake Hayward",
        number: 9,
        photo: "/images/squad/profiles/jake.jpg",
        shirtImage: "/images/squad/shirt-blues-9.png",
        favouritePlayer: "Wayne Rooney",
        signatureSkill: "Drag then rabona",
        favouriteThing: "Playing football with my friends",
      },
      {
        name: "George",
        displayName: "George Lee",
        number: 12,
        photo: "/images/squad/profiles/george.jpg",
        shirtImage: "/images/squad/shirt-blues-12.png",
        favouritePlayer: "Lamine Yamal",
        signatureSkill: "Step overs",
        favouriteThing: "Playing matches with my friends",
      },
      {
        name: "Noah",
        displayName: "Noah Kelly",
        number: 20,
        photo: "/images/squad/profiles/noah.jpg",
        shirtImage: "/images/squad/shirt-blues-20.png",
        favouritePlayer: "Phil Foden",
        signatureSkill: "Drop the shoulder then take them on the outside",
        favouriteThing: "All of my friends",
      },
    ],
  },
];
