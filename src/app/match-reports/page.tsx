import { matchReports } from "@/content/matchReports";
import { MatchReportCard } from "@/components/MatchReportCard";

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
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {reports.map((report) => (
          <MatchReportCard key={report.slug} report={report} />
        ))}
      </div>
    </div>
  );
}
