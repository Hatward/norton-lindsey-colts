export type Scorer = {
  name: string;
  goals: number;
};

export type MatchReport = {
  slug: string;
  teamName: string;
  opponent: string;
  result: "W" | "D" | "L";
  scoreFor: number;
  scoreAgainst: number;
  venue: string;
  scorers: Scorer[];
  summary: string;
  body: string[];
  parentsPOTM: { name: string; note: string };
  coachesPOTM: { name: string; note: string };
  image: string;
};

export const matchReports: MatchReport[] = [
  {
    slug: "blues-vs-grove-pavillion",
    teamName: "Colts U7 Blues",
    opponent: "Grove Pavillion FC",
    result: "W",
    scoreFor: 11,
    scoreAgainst: 0,
    venue: "Away",
    scorers: [
      { name: "Jake", goals: 4 },
      { name: "Roman", goals: 3 },
      { name: "George", goals: 2 },
      { name: "Noah", goals: 1 },
      { name: "Ziah", goals: 1 },
    ],
    summary:
      "A ruthless 11-0 win for the Colts U7 Blues in their first league outing of the season.",
    body: [
      "Grove Pavillion hadn't been together very long, having just played a handful of friendlies at U8 level over the summer. But you can only beat what's in front of you, and the Blues were absolutely merciless in their first league outing. All the hard work in training is paying off, with patterns of play emerging, the boys getting their heads up and passing, and working hard for the team even when the result was comfortable.",
      "No one exemplified that work rate more than Ziah, who was absolutely tireless in midfield, carrying the ball forward and tracking back to help in defence. Jake also put in a great shift up front and on the wing, and it was great to see him getting his head up to make some passes in the attacking third. Woody was unlucky not to get on the score sheet but did plenty to create chances in midfield, with his usual great feet and pinpoint passing. Reign didn't have a great deal to do again but when called upon he was solid, distributing the ball well — and we are buzzing for a well earned clean sheet!",
      "Roman Webb could easily have walked away with the Man of the Match today, showing that he's just as comfortable in attack as he was in defence yesterday. A fantastic hat-trick, including a poacher's finish at the back post and a mazy run followed by an adept finish at the near post.",
      "Grove Pavillion put a couple of extra players on but even that wasn't enough to stop the scoring. It won't always be this easy, but good to put an early marker down!",
      "What a great start to the season for the Colts — great performances, great vibes on the touchline, and 11 happy footballers.",
    ],
    parentsPOTM: {
      name: "George Lee",
      note: "A typically selfless display — he played every position for us today and played some eye-catching passes from deep, before rounding off a superb performance with two goals.",
    },
    coachesPOTM: {
      name: "Noah Kelly",
      note: "A brilliant all-round display, assured in defence and dangerous up front. Every time we've seen him in the last few weeks he's gone up a level.",
    },
    image: "/images/match-1.jpg",
  },
  {
    slug: "yellows-vs-whitnash",
    teamName: "Colts U7 Yellows",
    opponent: "Whitnash FC",
    result: "W",
    scoreFor: 2,
    scoreAgainst: 1,
    venue: "Home — Kingsley",
    scorers: [{ name: "Taylor", goals: 2 }],
    summary:
      "A great 2-1 win for the Colts U7 Yellows in a positive start to the season at home.",
    body: [
      "A really positive start to the season from the Yellows! We played some excellent football in spells, controlled long periods of the game and created plenty of chances.",
      "We were particularly impressed by the boys' resilience. Despite being on top for long periods, the breakthrough would not come, and it would have been easy for them to become frustrated. Instead, they stayed positive, kept playing and continued to believe. Going into the final ten minutes at 0-0 flattered Whitnash, before Taylor Cohn took the initiative with two composed finishes.",
      "Arthur produced some excellent running and tackling, alongside several powerful ball carries out of defence. Max was solid at the back and played some good passes into the wide areas. Roman was a rock as always, competing fearlessly against much larger opponents and refusing to let them get the better of him — it was also great to see him produce a 360 turn in the final third! Reign did not have a great deal to do, but he remained alert and ready whenever he was called into action, bravely winning his 50/50s. Hugo was sensational all over the pitch and incredibly unlucky not to score several goals — by his own account, he almost completed a hat-trick of assists!",
    ],
    parentsPOTM: {
      name: "Taylor",
      note: "Some brave ball carrying and two excellent goals. He was also unlucky not to complete his hat-trick after striking the crossbar.",
    },
    coachesPOTM: {
      name: "Jake",
      note: "An energetic display leading the line. He worked tirelessly, battled for every ball and was unfortunate not to score after hitting the post and being denied by some good saves. Most impressive of all was the way he kept his head and remained positive throughout.",
    },
    image: "/images/match-2.jpg",
  },
];
