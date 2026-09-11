import Link from "next/link";
import type { MatchReport } from "@/content/matchReports";
import { teamAccentFrom, ACCENT_BG } from "@/lib/teamAccent";

export function MatchReportCard({ report }: { report: MatchReport }) {
  const accent = teamAccentFrom(report.teamName);

  return (
    <Link
      href={`/match-reports/${report.slug}`}
      className="group clip-card flex flex-col overflow-hidden border-2 border-brand-navy bg-white transition-colors hover:border-brand-yellow"
    >
      <div className={`h-2 w-full ${ACCENT_BG[accent]}`} />
      <div className="flex items-center justify-between bg-brand-navy px-5 py-4 text-white">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-white/60">
            {report.teamName}
          </p>
          <p className="text-base font-semibold uppercase tracking-wide">
            vs {report.opponent}
          </p>
        </div>
        <p className="font-display text-3xl leading-none text-brand-yellow">
          {report.scoreFor}&ndash;{report.scoreAgainst}
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-sm leading-relaxed text-black/70">
          {report.summary}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-brand-navy transition-transform group-hover:translate-x-0.5">
          Read full report
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
