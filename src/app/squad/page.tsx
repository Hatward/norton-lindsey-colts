import Image from "next/image";
import { teams } from "@/content/squad";
import { goalsFor } from "@/lib/stats";
import { withBasePath } from "@/lib/basePath";
import { ACCENT_BG, ACCENT_BORDER } from "@/lib/teamAccent";

export const metadata = {
  title: "Squad — Norton Lindsey Colts",
};

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

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[...team.players]
                .sort((a, b) => a.number - b.number)
                .map((player) => {
                  const goals = goalsFor(player.name);
                  return (
                    <div
                      key={`${team.id}-${player.number}`}
                      className={`clip-card-sm flex flex-col items-center gap-2 border-2 ${ACCENT_BORDER[team.id]} bg-white p-5 text-center transition-colors hover:bg-brand-cream`}
                    >
                      <div className="relative h-20 w-20">
                        <Image
                          src={withBasePath(team.shirtImage)}
                          alt={`${team.teamName} shirt`}
                          fill
                          className="object-contain"
                        />
                        <span className="absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center border-2 border-white bg-brand-navy font-mono text-xs font-bold text-white">
                          {player.number}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy">
                          {player.displayName}
                        </p>
                        {goals > 0 && (
                          <p className="mt-0.5 font-mono text-xs tracking-wide text-black/50">
                            {goals} goal{goals > 1 ? "s" : ""}
                          </p>
                        )}
                      </div>

                      <div className="mt-2 w-full space-y-1.5 border-t border-brand-navy/10 pt-3 text-left">
                        <p className="flex items-start gap-1.5 text-xs text-black/70">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-brand-yellow" />
                          <span>
                            <span className="font-mono font-semibold uppercase tracking-wide text-brand-navy/60">
                              Idol:{" "}
                            </span>
                            {player.favouritePlayer}
                          </span>
                        </p>
                        <p className="flex items-start gap-1.5 text-xs text-black/70">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-brand-yellow" />
                          <span>
                            <span className="font-mono font-semibold uppercase tracking-wide text-brand-navy/60">
                              Go-to skill:{" "}
                            </span>
                            {player.signatureSkill}
                          </span>
                        </p>
                        <p className="flex items-start gap-1.5 text-xs text-black/70">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-brand-yellow" />
                          <span>
                            <span className="font-mono font-semibold uppercase tracking-wide text-brand-navy/60">
                              Loves:{" "}
                            </span>
                            {player.favouriteThing}
                          </span>
                        </p>
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
