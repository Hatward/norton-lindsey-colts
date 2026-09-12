import Image from "next/image";
import { teams } from "@/content/squad";
import { withBasePath } from "@/lib/basePath";
import { ACCENT_BG, ACCENT_BORDER } from "@/lib/teamAccent";

export const metadata = {
  title: "Squad — Norton Lindsey Colts",
};

const ICON_PATHS = {
  star: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 21.14a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
  bolt: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  heart:
    "M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z",
} as const;

function StatRow({
  icon,
  label,
  value,
}: {
  icon: keyof typeof ICON_PATHS;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-yellow/20">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-brand-navy">
          <path d={ICON_PATHS[icon]} />
        </svg>
      </span>
      <span className="text-xs text-black/70">
        <span className="block font-mono text-[10px] font-semibold uppercase tracking-wide text-brand-navy/60">
          {label}
        </span>
        {value}
      </span>
    </div>
  );
}

export default function SquadPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
        <span className="h-2 w-2 bg-brand-yellow" />
        Season 2026/27
      </p>
      <h1 className="font-display text-4xl uppercase tracking-tight text-brand-navy">
        Squad
      </h1>
      <p className="mt-2 max-w-2xl text-black/60">
        Norton Lindsey Colts field two U8 squads this season — The Yellows
        and The Blues.
      </p>

      <div className="mt-10 space-y-16">
        {teams.map((team) => (
          <section key={team.id}>
            <div
              className={`clip-card flex flex-wrap items-center justify-between gap-3 border-2 border-brand-navy px-6 py-5 ${ACCENT_BG[team.id]}`}
            >
              <h2 className="font-display text-3xl uppercase tracking-tight text-brand-navy">
                {team.teamName}
              </h2>
              <p className="font-mono text-xs font-semibold uppercase tracking-wide text-brand-navy/70">
                {team.league} &middot; {team.playDay}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[...team.players]
                .sort((a, b) => a.number - b.number)
                .map((player) => {
                  return (
                    <div
                      key={`${team.id}-${player.number}`}
                      className={`group clip-card-sm flex flex-col items-center gap-3 border-2 ${ACCENT_BORDER[team.id]} bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                    >
                      <div
                        className={`clip-card-sm relative h-24 w-24 shrink-0 p-1 ${ACCENT_BG[team.id]}`}
                      >
                        <div className="clip-card-sm relative h-full w-full overflow-hidden bg-white">
                          <Image
                            src={withBasePath(player.photo)}
                            alt={player.displayName}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="relative h-10 w-10 shrink-0">
                          <Image
                            src={withBasePath(player.shirtImage)}
                            alt={`Shirt number ${player.number}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="font-display text-lg uppercase tracking-tight text-brand-navy">
                          {player.displayName}
                        </p>
                      </div>

                      <div className="mt-1 w-full space-y-2.5 border-t border-brand-navy/10 pt-4 text-left">
                        <StatRow
                          icon="star"
                          label="Idol"
                          value={player.favouritePlayer}
                        />
                        <StatRow
                          icon="bolt"
                          label="Go-to skill"
                          value={player.signatureSkill}
                        />
                        <StatRow
                          icon="heart"
                          label="Loves"
                          value={player.favouriteThing}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

