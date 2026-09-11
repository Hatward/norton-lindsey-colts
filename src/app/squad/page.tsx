import { teams } from "@/content/squad";
import { goalsFor } from "@/lib/stats";
import { Shirt } from "@/components/Shirt";

export const metadata = {
  title: "Squad — Norton Lindsey Colts",
};

export default function SquadPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-brand-navy">Squad</h1>
      <p className="mt-2 max-w-2xl text-black/60">
        Norton Lindsey Colts field two U8 squads this season — The Yellows
        and The Blues.
      </p>

      <div className="mt-10 space-y-14">
        {teams.map((team) => (
          <section key={team.id}>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="h-4 w-4 rounded-full border border-black/10"
                style={{ backgroundColor: team.shirt.body }}
              />
              <h2 className="text-2xl font-bold text-brand-navy">
                {team.teamName}
              </h2>
            </div>
            <p className="mt-1 text-sm font-medium text-black/50">
              {team.league} &middot; {team.playDay}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {[...team.players]
                .sort((a, b) => a.number - b.number)
                .map((player) => {
                  const goals = goalsFor(player.name);
                  return (
                    <div
                      key={`${team.id}-${player.number}`}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-black/5 bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-md"
                    >
                      <Shirt
                        body={team.shirt.body}
                        trim={team.shirt.trim}
                        outline={team.shirt.outline}
                        number={player.number}
                        className="h-16 w-16"
                      />
                      <div>
                        <p className="font-semibold text-brand-navy">
                          {player.displayName}
                        </p>
                        {goals > 0 && (
                          <p className="mt-0.5 text-xs font-medium text-black/50">
                            {goals} goal{goals > 1 ? "s" : ""}
                          </p>
                        )}
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
