import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

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

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-stretch">
        <div className="clip-card relative aspect-3/4 w-full overflow-hidden border-2 border-brand-navy lg:aspect-auto">
          <Image
            src={withBasePath("/images/club-hero.jpg")}
            alt="The Norton Lindsey Juniors FC corner flag"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
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
      </div>
    </div>
  );
}
