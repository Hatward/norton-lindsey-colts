import { squad } from "@/content/squad";
import { goalsFor } from "@/lib/stats";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export const metadata = {
  title: "Squad — Norton Lindsey Colts",
};

export default function SquadPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-brand-navy">Squad</h1>
      <p className="mt-2 max-w-2xl text-black/60">
        The players representing Norton Lindsey Colts this season.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {squad.map((player) => {
          const goals = goalsFor(player.name);
          return (
            <div
              key={player.name}
              className="flex flex-col items-center gap-3 rounded-2xl border border-black/5 bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy text-lg font-bold text-brand-yellow">
                {initials(player.displayName)}
              </div>
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
    </div>
  );
}
