import Image from "next/image";
import { matchReports } from "@/content/matchReports";
import { fixtures } from "@/content/fixtures";
import { withBasePath } from "@/lib/basePath";
import { formatMatchDate, formatMatchDateShort } from "@/lib/date";
import { teamAccentFrom, teamAccentFromDate, ACCENT_BG } from "@/lib/teamAccent";

export const metadata = {
  title: "Match Reports — Norton Lindsey Colts",
};

type TimelineEntry =
  | { kind: "report"; date: string; report: (typeof matchReports)[number] }
  | { kind: "fixture"; date: string; fixture: (typeof fixtures)[number] };

export default function MatchReportsPage() {
  const entries: TimelineEntry[] = [
    ...matchReports.map((report) => ({
      kind: "report" as const,
      date: report.date,
      report,
    })),
    ...fixtures.map((fixture) => ({
      kind: "fixture" as const,
      date: fixture.date,
      fixture,
    })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
        <span className="h-2 w-2 bg-brand-yellow" />
        Season 2026/27
      </p>
      <h1 className="font-display text-4xl uppercase tracking-tight text-brand-navy">
        Match Reports
      </h1>
      <p className="mt-2 max-w-2xl text-black/60">
        Round-ups from every game, straight from the touchline — plus what&rsquo;s
        coming up next.
      </p>

      <div className="relative mt-12 space-y-16 border-l-4 border-brand-navy pl-8 sm:pl-10">
        {entries.map((entry) => {
          if (entry.kind === "fixture") {
            const { fixture } = entry;
            const accent = teamAccentFromDate(fixture.date);
            return (
              <article
                key={fixture.slug}
                id={fixture.slug}
                className="relative scroll-mt-24"
              >
                <span
                  className={`absolute top-1.5 -left-[calc(2rem+10px)] h-5 w-5 border-2 border-brand-navy sm:-left-[calc(2.5rem+10px)] ${ACCENT_BG[accent]}`}
                />

                <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
                  {fixture.competition} &middot; Matchweek {fixture.matchweek}
                </p>
                <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b-4 border-brand-navy pb-4 sm:gap-6">
                  <div className="flex items-center justify-end gap-3 text-right">
                    <span className="font-display text-base uppercase tracking-tight text-brand-navy sm:text-xl">
                      Colts U7 {accent === "yellows" ? "Yellows" : "Blues"}
                    </span>
                    <div className="relative h-10 w-10 shrink-0 sm:h-14 sm:w-14">
                      <Image
                        src={withBasePath("/images/badge.png")}
                        alt="Norton Lindsey Colts badge"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-black/50 sm:text-xs">
                      <span className="sm:hidden">
                        {formatMatchDateShort(fixture.date)}
                      </span>
                      <span className="hidden sm:inline">
                        {formatMatchDate(fixture.date)}
                      </span>
                    </p>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-black/40 sm:text-xs">
                      {fixture.venue}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {fixture.opponentBadge ? (
                      <div className="relative h-10 w-10 shrink-0 sm:h-14 sm:w-14">
                        <Image
                          src={withBasePath(fixture.opponentBadge)}
                          alt={`${fixture.opponent} badge`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="h-10 w-10 shrink-0 rounded-full border-2 border-brand-navy/20 sm:h-14 sm:w-14" />
                    )}
                    <span className="font-display text-base uppercase tracking-tight text-brand-navy sm:text-xl">
                      {fixture.opponent}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-brand-navy/50">
                  Upcoming Fixture
                </p>
              </article>
            );
          }

          const { report } = entry;
          const accent = teamAccentFrom(report.teamName);

          return (
            <article
              key={report.slug}
              id={report.slug}
              className="relative scroll-mt-24"
            >
              <span
                className={`absolute top-1.5 -left-[calc(2rem+10px)] h-5 w-5 border-2 border-brand-navy sm:-left-[calc(2.5rem+10px)] ${ACCENT_BG[accent]}`}
              />

              <div className="clip-card relative aspect-4/3 w-full overflow-hidden border-2 border-brand-navy sm:aspect-16/9">
                <Image
                  src={withBasePath(report.image)}
                  alt={`${report.teamName} vs ${report.opponent}`}
                  fill
                  className={`object-cover ${report.imagePosition ?? ""}`}
                />
              </div>

              <div className="mt-6">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
                  {report.competition} &middot; Matchweek {report.matchweek}
                </p>
                <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b-4 border-brand-navy pb-4 sm:gap-6">
                  <div className="flex items-center justify-end gap-3 text-right">
                    <span className="font-display text-base uppercase tracking-tight text-brand-navy sm:text-xl">
                      {report.teamName}
                    </span>
                    <div className="relative h-10 w-10 shrink-0 sm:h-14 sm:w-14">
                      <Image
                        src={withBasePath("/images/badge.png")}
                        alt="Norton Lindsey Colts badge"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-4">
                    <p className="font-display text-3xl leading-none text-brand-navy sm:text-5xl">
                      {report.scoreFor}
                    </p>
                    <div className="text-center">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-black/50 sm:text-xs">
                        <span className="sm:hidden">
                          {formatMatchDateShort(report.date)}
                        </span>
                        <span className="hidden sm:inline">
                          {formatMatchDate(report.date)}
                        </span>
                      </p>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-black/40 sm:text-xs">
                        Full Time &middot; {report.venue}
                      </p>
                    </div>
                    <p className="font-display text-3xl leading-none text-brand-navy sm:text-5xl">
                      {report.scoreAgainst}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {report.opponentBadge ? (
                      <div className="relative h-10 w-10 shrink-0 sm:h-14 sm:w-14">
                        <Image
                          src={withBasePath(report.opponentBadge)}
                          alt={`${report.opponent} badge`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="h-10 w-10 shrink-0 rounded-full border-2 border-brand-navy/20 sm:h-14 sm:w-14" />
                    )}
                    <span className="font-display text-base uppercase tracking-tight text-brand-navy sm:text-xl">
                      {report.opponent}
                    </span>
                  </div>
                </div>

                {report.scorers.length > 0 && (
                  <p className="mt-3 font-mono text-sm text-black/60">
                    <span className="font-semibold text-black/80">
                      Goals:{" "}
                    </span>
                    {report.scorers
                      .map(
                        (s) => `${s.name}${s.goals > 1 ? ` (${s.goals})` : ""}`,
                      )
                      .join(", ")}
                  </p>
                )}

                <div className="prose prose-neutral mt-4 max-w-none space-y-4 text-[15px] leading-relaxed text-black/80">
                  {report.body.map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="clip-card-sm border-2 border-brand-navy bg-brand-cream p-5">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
                      <span className="h-2 w-2 bg-brand-navy" />
                      Parents&rsquo; Player of the Match
                    </p>
                    <p className="mt-2 font-display text-xl uppercase tracking-tight text-brand-navy">
                      {report.parentsPOTM.name}
                    </p>
                    <p className="mt-2 text-sm text-black/70">
                      {report.parentsPOTM.note}
                    </p>
                  </div>
                  <div className="clip-card-sm border-2 border-brand-yellow bg-brand-cream p-5">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
                      <span className="h-2 w-2 bg-brand-yellow" />
                      Coaches&rsquo; Player of the Match
                    </p>
                    <p className="mt-2 font-display text-xl uppercase tracking-tight text-brand-navy">
                      {report.coachesPOTM.name}
                    </p>
                    <p className="mt-2 text-sm text-black/70">
                      {report.coachesPOTM.note}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
