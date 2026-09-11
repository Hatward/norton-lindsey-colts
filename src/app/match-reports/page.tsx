import Image from "next/image";
import { matchReports } from "@/content/matchReports";
import { withBasePath } from "@/lib/basePath";
import { teamAccentFrom, ACCENT_BG, ACCENT_SHIRT } from "@/lib/teamAccent";

export const metadata = {
  title: "Match Reports — Norton Lindsey Colts",
};

export default function MatchReportsPage() {
  const reports = [...matchReports].reverse();

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
        Round-ups from every game, straight from the touchline.
      </p>

      <div className="relative mt-12 space-y-16 border-l-4 border-brand-navy pl-8 sm:pl-10">
        {reports.map((report) => {
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
                  className="object-cover"
                />
              </div>

              <div className="mt-6">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
                  <span className={`h-2 w-2 ${ACCENT_BG[accent]}`} />
                  {report.venue}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-3 border-b-4 border-brand-navy pb-3">
                  <div className="relative h-12 w-16 shrink-0">
                    <Image
                      src={withBasePath(ACCENT_SHIRT[accent])}
                      alt={`${report.teamName} shirt`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="font-display text-4xl leading-none text-brand-navy">
                    {report.scoreFor}&ndash;{report.scoreAgainst}
                  </p>
                  <h2 className="font-display text-xl uppercase tracking-tight text-brand-navy sm:text-2xl">
                    {report.teamName} vs {report.opponent}
                  </h2>
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
