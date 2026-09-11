import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { matchReports } from "@/content/matchReports";
import { withBasePath } from "@/lib/basePath";
import { teamAccentFrom, ACCENT_BG } from "@/lib/teamAccent";

export function generateStaticParams() {
  return matchReports.map((report) => ({ slug: report.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = matchReports.find((r) => r.slug === slug);
  return {
    title: report
      ? `${report.teamName} vs ${report.opponent} — Norton Lindsey Colts`
      : "Match Report",
  };
}

export default async function MatchReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = matchReports.find((r) => r.slug === slug);
  if (!report) notFound();
  const accent = teamAccentFrom(report.teamName);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href="/match-reports"
        className="text-sm font-semibold uppercase tracking-wide text-brand-navy hover:underline"
      >
        &larr; All match reports
      </Link>

      <div className="clip-card mt-4 overflow-hidden border-2 border-brand-navy">
        <div className="relative aspect-16/9 w-full">
          <Image
            src={withBasePath(report.image)}
            alt={`${report.teamName} vs ${report.opponent}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-end gap-4 border-b-4 border-brand-navy pb-4">
        <p className="font-display text-5xl leading-none text-brand-navy">
          {report.scoreFor}&ndash;{report.scoreAgainst}
        </p>
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
            <span className={`h-2 w-2 ${ACCENT_BG[accent]}`} />
            {report.venue}
          </p>
          <h1 className="font-display text-2xl uppercase tracking-tight text-brand-navy sm:text-3xl">
            {report.teamName} vs {report.opponent}
          </h1>
        </div>
      </div>

      {report.scorers.length > 0 && (
        <p className="mt-4 font-mono text-sm text-black/60">
          <span className="font-semibold text-black/80">Goals: </span>
          {report.scorers
            .map((s) => `${s.name}${s.goals > 1 ? ` (${s.goals})` : ""}`)
            .join(", ")}
        </p>
      )}

      <div className="prose prose-neutral mt-8 max-w-none space-y-4 text-[15px] leading-relaxed text-black/80">
        {report.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
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
    </article>
  );
}
