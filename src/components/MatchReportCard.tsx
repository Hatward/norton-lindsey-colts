import Link from "next/link";
import type { MatchReport } from "@/content/matchReports";

export function MatchReportCard({ report }: { report: MatchReport }) {
  return (
    <Link
      href={`/match-reports/${report.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="flex items-center justify-between bg-brand-navy px-5 py-4 text-white">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-white/60">
            {report.teamName}
          </p>
          <p className="text-base font-semibold">vs {report.opponent}</p>
        </div>
        <div className="flex h-12 min-w-12 items-center justify-center rounded-full bg-brand-yellow px-3 text-lg font-bold text-brand-navy">
          {report.scoreFor}-{report.scoreAgainst}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-sm leading-relaxed text-black/70">
          {report.summary}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-navy transition-transform group-hover:translate-x-0.5">
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
