import Image from "next/image";
import Link from "next/link";
import { matchReports } from "@/content/matchReports";
import { MatchReportCard } from "@/components/MatchReportCard";

export default function Home() {
  const latest = [...matchReports].reverse().slice(0, 2);

  return (
    <div>
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,205,0,0.15),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(255,205,0,0.1),transparent_50%)]" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-24">
          <Image
            src="/images/badge.png"
            alt="Norton Lindsey Colts badge"
            width={120}
            height={120}
            priority
            className="h-24 w-24 drop-shadow-lg sm:h-32 sm:w-32"
          />
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Norton Lindsey Colts
          </h1>
          <p className="max-w-xl text-base text-white/80 sm:text-lg">
            Match reports, squad news, and photos from the pitch — home of
            Norton Lindsey Juniors&rsquo; Colts teams.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/match-reports"
              className="rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold text-brand-navy shadow transition-transform hover:scale-105"
            >
              Latest Match Reports
            </Link>
            <Link
              href="/squad"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Meet the Squad
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-brand-navy">
            Latest Match Reports
          </h2>
          <Link
            href="/match-reports"
            className="text-sm font-semibold text-brand-navy hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {latest.map((report) => (
            <MatchReportCard key={report.slug} report={report} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-5xl gap-4 px-4 py-14 sm:grid-cols-2 sm:px-6">
          <Link
            href="/squad"
            className="group flex flex-col justify-between rounded-2xl bg-brand-cream p-8 transition-shadow hover:shadow-lg"
          >
            <div>
              <h3 className="text-xl font-bold text-brand-navy">The Squad</h3>
              <p className="mt-2 text-sm text-black/60">
                Meet the players pulling on the yellow and navy this season.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-navy transition-transform group-hover:translate-x-0.5">
              View squad &rarr;
            </span>
          </Link>
          <Link
            href="/gallery"
            className="group flex flex-col justify-between rounded-2xl bg-brand-cream p-8 transition-shadow hover:shadow-lg"
          >
            <div>
              <h3 className="text-xl font-bold text-brand-navy">Gallery</h3>
              <p className="mt-2 text-sm text-black/60">
                Photos from matchdays and moments on the touchline.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-navy transition-transform group-hover:translate-x-0.5">
              View gallery &rarr;
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
