import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { matchReports } from "@/content/matchReports";
import { withBasePath } from "@/lib/basePath";

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

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href="/match-reports"
        className="text-sm font-semibold text-brand-navy hover:underline"
      >
        &larr; All match reports
      </Link>

      <div className="mt-4 overflow-hidden rounded-2xl">
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

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-brand-yellow px-4 py-1.5 text-lg font-bold text-brand-navy">
          {report.scoreFor}-{report.scoreAgainst}
        </span>
        <span className="text-sm font-medium text-black/50">
          {report.venue}
        </span>
      </div>

      <h1 className="mt-3 text-2xl font-bold text-brand-navy sm:text-3xl">
        {report.teamName} vs {report.opponent}
      </h1>

      {report.scorers.length > 0 && (
        <p className="mt-2 text-sm text-black/60">
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
        <div className="rounded-2xl bg-brand-cream p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-navy/60">
            Parents&rsquo; Player of the Match
          </p>
          <p className="mt-1 text-lg font-bold text-brand-navy">
            {report.parentsPOTM.name}
          </p>
          <p className="mt-2 text-sm text-black/70">
            {report.parentsPOTM.note}
          </p>
        </div>
        <div className="rounded-2xl bg-brand-cream p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-navy/60">
            Coaches&rsquo; Player of the Match
          </p>
          <p className="mt-1 text-lg font-bold text-brand-navy">
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
