export const metadata = {
  title: "Club — Norton Lindsey Colts",
};

const CLUB_FACTS = [
  {
    title: "The Club's Foundation",
    body: "Set up more than 50 years ago to give young players in Warwickshire a structured place to play, practice, and learn the game.",
  },
  {
    title: "Long-Serving Volunteers",
    body: "The club relies entirely on dedicated local helpers and coaches — Des Davies famously supported the teams and looked after youth football here for 55 years.",
  },
  {
    title: "Growth Over the Years",
    body: "It began as a small village group but has grown into something much larger, allowing children of all ages to wear the club shirt every weekend.",
  },
  {
    title: "League Matches",
    body: "Today the Colts compete across regional divisions like the Mid Warwickshire Football League, the Nuneaton and Bedworth Junior League, and the Central Warwickshire Youth Football League.",
  },
];

const COLTS_CODE = [
  {
    title: "Help Your Team",
    body: "We work hard for our teammates. We always keep going. We never give up.",
  },
  {
    title: "Respect",
    body: "We listen. We use kind words. We are fair to everyone.",
  },
  {
    title: "Be Brave",
    body: "We try new things. It is ok to make mistakes. Mistakes help us learn.",
  },
  {
    title: "Have Fun",
    body: "We smile and enjoy football. We help everyone and have fun.",
  },
];

const SPECTATOR_GUIDE = [
  "Be kind, calm, encouraging and supportive",
  "Be their biggest fan, not their biggest critic",
  "Be positive in your communication, including your body language",
  "Praise their effort, even if things aren't going well on the pitch",
  "Never distract players during matches",
  "Let the players play, the coaches coach and the referees, referee",
  "Avoid using upsetting, offensive, discriminatory language or behaviour towards anyone",
];

export default function ClubPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
        <span className="h-2 w-2 bg-brand-yellow" />
        Est. 1969
      </p>
      <h1 className="font-display text-4xl uppercase tracking-tight text-brand-navy">
        Our Club
      </h1>
      <p className="mt-2 max-w-2xl text-black/60">
        Norton Lindsey Junior Football Club was established in 1969, making
        it a proud part of local grassroots football history.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {CLUB_FACTS.map((fact) => (
          <div
            key={fact.title}
            className="clip-card-sm border-2 border-brand-navy bg-brand-cream p-5"
          >
            <p className="font-display text-lg uppercase tracking-tight text-brand-navy">
              {fact.title}
            </p>
            <p className="mt-2 text-sm text-black/70">{fact.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t-4 border-brand-navy pt-10">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
          <span className="h-2 w-2 bg-brand-yellow" />
          Our Values
        </p>
        <h2 className="font-display text-3xl uppercase tracking-tight text-brand-navy">
          The Colts Code
        </h2>
        <p className="mt-2 max-w-2xl text-black/60">
          These are the rules we all follow to do our best and help each
          other. When you join the Colts, we help you grow and be your very
          best — both when playing football and in everyday life.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {COLTS_CODE.map((rule, i) => (
            <div
              key={rule.title}
              className={`clip-card-sm border-2 bg-white p-5 ${
                i % 2 === 0 ? "border-brand-navy" : "border-brand-yellow"
              }`}
            >
              <p className="font-display text-xl uppercase tracking-tight text-brand-navy">
                {rule.title}
              </p>
              <p className="mt-2 text-sm text-black/70">{rule.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-display text-2xl uppercase tracking-tight text-brand-navy sm:text-3xl">
          Hard Work will always beat{" "}
          <span className="text-brand-yellow">Talent!</span>
        </p>
      </div>

      <div className="mt-16 border-t-4 border-brand-navy pt-10">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
          <span className="h-2 w-2 bg-brand-yellow" />
          For Parents &amp; Supporters
        </p>
        <h2 className="font-display text-3xl uppercase tracking-tight text-brand-navy">
          Spectator&rsquo;s Guide
        </h2>
        <p className="mt-2 max-w-2xl text-black/60">
          We love the support from all of the parents, family, and friends
          at every match. These expectations were written by children and
          young people who are current Academy Players in the FA&rsquo;s
          Foundation and Youth Development Phases — and we think they&rsquo;re
          a good rule of thumb for us too. In their words, the boys would
          like all parents, carers and spectators to:
        </p>

        <div className="clip-card mt-6 border-2 border-brand-navy bg-brand-cream p-6">
          <ul className="space-y-3">
            {SPECTATOR_GUIDE.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-black/80"
              >
                <span className="mt-1 h-2 w-2 shrink-0 bg-brand-yellow" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
