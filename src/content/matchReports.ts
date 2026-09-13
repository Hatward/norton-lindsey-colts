export type Scorer = {
  name: string;
  goals: number;
};

export type MatchReport = {
  slug: string;
  teamName: string;
  opponent: string;
  opponentBadge?: string;
  competition: string;
  matchweek: number;
  date: string;
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
  imagePosition?: string;
};

export const matchReports: MatchReport[] = [
  {
    slug: "blues-vs-chetwynd-lions",
    teamName: "Colts U7 Blues",
    opponent: "Chetwynd Lions",
    opponentBadge: "/images/chetwynd.png",
    competition: "Nuneaton and Bedworth Junior League",
    matchweek: 2,
    date: "2026-09-13",
    result: "W",
    scoreFor: 8,
    scoreAgainst: 0,
    venue: "Home",
    scorers: [
      { name: "Ziah", goals: 4 },
      { name: "George", goals: 2 },
      { name: "Jake", goals: 2 },
    ],
    summary:
      "An emphatic 8-0 win for the Colts U7 Blues against Chetwynd Lions.",
    body: [
      "Absolutely scintillating stuff from the Colts today against an inexperienced but physical Chetwynd Lions side. They didn't really lay a glove on us as the boys kept them quiet all match.",
      "Noah was assured in his stint in defence, brave to both win his tackles and show for the ball as an option. He made some great runs in the attacking third. The only way Chetwynd could stop him was by fouling him. Unlucky not to score his penalty but kept his head up and kept going.",
      "George was fantastic all over the pitch and didn't put a foot wrong in any position. Some world class passing out from the back was a particular highlight, cutting the opposition apart with some zipped diagonal balls. Did very well to get his two goals too.",
      "It was a bit of a quiet one for Reign but when he was called upon he was superb, making some good stops and passing it out quickly to keep the play going.",
      "Jake took his chances well, tracked back to help out in defence, and kept getting his head up more — something he's been working on. He did a stint for us in goal with some safe hands and good distribution.",
      "Ziah had his shooting boots on today! He won and converted a penalty, scored a hat-trick of well taken goals, and showed lots of running, tenacity and determination both in attack and defence. Could have had a POTM award today.",
      "Roman was faultless in defence with some strong tackling and incisive passing into the final third. In his stint in midfield he worked hard and laid on some fantastic assists for his teammates. He was on the end of some extremely questionable refereeing but kept playing his game the right way.",
      "Woody was superb in all areas of the pitch today. Accomplished in defence, reading the play well and knocking the ball around beyond his years. Up front he was full of running and tricks, made some great passes into the box, and was very unlucky not to get on the score sheet. He was solid in goal too with some eye-catching saves!",
      "Another great weekend for the Colts with two brilliant performances! Thanks as always for the support from the touchlines. Darren and Jamie",
    ],
    parentsPOTM: {
      name: "Roman",
      note: "Faultless in defence with some strong tackling and incisive passing into the final third, then drove things on from midfield with some fantastic assists — all while brushing off some very questionable refereeing.",
    },
    coachesPOTM: {
      name: "Woody",
      note: "Accomplished in defence beyond his years, full of running and tricks up front, and rock solid in goal with some eye-catching saves — superb in every position he played.",
    },
    image: "/images/match-3.jpg",
    imagePosition: "object-[center_20%]",
  },
  {
    slug: "yellows-vs-hillmorton-dragons",
    teamName: "Colts U7 Yellows",
    opponent: "Hillmorton Dragons U8s",
    opponentBadge: "/images/hilmorton.png",
    competition: "Mid Warwickshire Football League",
    matchweek: 2,
    date: "2026-09-12",
    result: "L",
    scoreFor: 4,
    scoreAgainst: 9,
    venue: "Home",
    scorers: [
      { name: "Hugo", goals: 2 },
      { name: "Jake", goals: 1 },
      { name: "Arthur", goals: 1 },
    ],
    summary:
      "A brave 9-4 defeat for the Colts U7 Yellows against a strong Tier 1 Hillmorton Dragons side, a year older and much bigger, but the boys never stopped competing.",
    body: [
      "This was certainly one of the toughest tests the Yellows have faced. Hillmorton Dragons are a Tier 1 side who have been together for two years, a year older than our boys and considerably bigger — and it showed. But so did the character in our team. The Dragons' own manager came over after the final whistle and told us this was one of the best footballing sides they'd seen. High praise indeed, and every bit deserved.",
      "We tried something new today, too. Max spent large parts of the game dropping into a deeper, quarterback-style role in the middle of the park, staying calm on the ball and spraying passes out wide — exactly what we asked of him. Taylor also had a spell in the same role and did well with it, despite coming up against a very good opposition defender in what was a tough physical battle — he still found ways to entertain, full of tricks and energy throughout. It's something we'll keep coming back to, especially against bigger, stronger opposition, because when the boys get their heads up and pass, they're a real handful.",
      "Reign was peppered all game and stood up to every bit of it, pulling off some really special saves. His composure stood out too — at one point the ball rolled to him after an accidental deflection, and rather than panic he simply took a touch and played it away calmly, showing how far his game has come. Arthur was excellent, a big step up from recent weeks with his energy levels, his willingness to get on the ball and pass, some real graft in the tackle, and he got his reward with a goal of his own. Jake had a tough morning out of his usual central role, asked to play somewhere unfamiliar to help the team, and he got on with the job and capped it off with a superb free kick that flew in.",
      "Hugo was everywhere, and it was brilliant to see him get his rewards with two well-taken goals. Last week he created chance after chance without quite pulling the trigger — this week he backed himself and finished. Roman was strong in defence all morning, continuing to improve week on week, and played some really good passes out from the back.",
      "The scoreline doesn't tell the full story. Our boys are playing up an age group already, and fixtures threw them into a Tier 1 side, the toughest group in the whole division, for only their second game of the season. They went toe to toe, had spells of real quality, and were told by the opposition themselves that they were the better footballing team. Heads up, boys — that's a result we build on!",
    ],
    parentsPOTM: {
      name: "Hugo",
      note: "Determined all match, tracking back to help out and finding space for his teammates going forward. Great aggression, strong tackles, and two well-deserved goals.",
    },
    coachesPOTM: {
      name: "Reign",
      note: "A very busy afternoon between the sticks, and every time he was called upon he did his job and got us out of trouble. He keeps getting better every single week.",
    },
    image: "/images/hilmorton.jpg",
  },
  {
    slug: "blues-vs-grove-pavillion",
    teamName: "Colts U7 Blues",
    opponent: "Grove Pavillion FC",
    opponentBadge: "/images/grove-pavillion.jpg",
    competition: "Nuneaton and Bedworth Junior League",
    matchweek: 1,
    date: "2026-09-06",
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
    image: "/images/match-2.jpg",
  },
  {
    slug: "yellows-vs-whitnash",
    teamName: "Colts U7 Yellows",
    opponent: "Whitnash FC U8s",
    opponentBadge: "/images/whitnash.jpg",
    competition: "Mid Warwickshire Football League",
    matchweek: 1,
    date: "2026-09-05",
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
    image: "/images/match-1.jpg",
  },
];
