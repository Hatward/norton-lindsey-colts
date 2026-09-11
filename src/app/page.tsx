import Image from "next/image";
import Link from "next/link";
import { matchReports } from "@/content/matchReports";
import { MatchReportCard } from "@/components/MatchReportCard";
import { withBasePath } from "@/lib/basePath";

export default function Home() {
  const latest = [...matchReports]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 2);

  return (
    <div>
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <span
          aria-hidden
          className="font-display pointer-events-none absolute -top-10 -right-4 select-none text-[14rem] leading-none text-white/5 sm:text-[20rem]"
        >
          NLC
        </span>
        <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-6 px-4 py-16 sm:px-6 sm:py-24">
          <Image
            src={withBasePath("/images/badge.png")}
            alt="Norton Lindsey Colts badge"
            width={96}
            height={96}
            priority
            className="h-20 w-20 sm:h-24 sm:w-24"
          />
          <div>
            <h1 className="font-display text-5xl leading-[0.9] uppercase tracking-tight sm:text-7xl">
              Norton Lindsey
              <br />
              Colts
            </h1>
            <div className="mt-4 h-1.5 w-24 bg-brand-yellow" />
          </div>
          <p className="max-w-xl text-base text-white/80 sm:text-lg">
            Match reports, squad news, and photos from the pitch — home of
            Norton Lindsey Juniors&rsquo; Colts teams.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/match-reports"
              className="clip-card-sm border-2 border-brand-yellow bg-brand-yellow px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-navy hover:text-brand-yellow"
            >
              Latest Match Reports
            </Link>
            <Link
              href="/squad"
              className="clip-card-sm border-2 border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-brand-yellow hover:text-brand-yellow"
            >
              Meet the Squad
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="mb-6 flex items-end justify-between border-b-4 border-brand-navy pb-3">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
              <span className="h-2 w-2 bg-brand-yellow" />
              This Season
            </p>
            <h2 className="font-display text-3xl uppercase tracking-tight text-brand-navy">
              Latest Match Reports
            </h2>
          </div>
          <Link
            href="/match-reports"
            className="text-sm font-semibold uppercase tracking-wide text-brand-navy hover:underline"
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
            className="group clip-card relative flex flex-col justify-between overflow-hidden border-2 border-brand-navy bg-brand-cream p-8 transition-colors hover:border-brand-yellow"
          >
            <span
              aria-hidden
              className="font-display pointer-events-none absolute -right-2 -bottom-8 select-none text-[9rem] leading-none text-brand-navy/5"
            >
              11
            </span>
            <div className="relative">
              <h3 className="font-display text-2xl uppercase tracking-tight text-brand-navy">
                The Squad
              </h3>
              <p className="mt-2 text-sm text-black/60">
                Meet the players pulling on the yellow and navy this season.
              </p>
            </div>
            <span className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-brand-navy transition-transform group-hover:translate-x-0.5">
              View squad &rarr;
            </span>
          </Link>
          <Link
            href="/gallery"
            className="group clip-card relative flex flex-col justify-between overflow-hidden border-2 border-brand-navy bg-brand-cream p-8 transition-colors hover:border-brand-yellow"
          >
            <span
              aria-hidden
              className="font-display pointer-events-none absolute -right-2 -bottom-8 select-none text-[9rem] leading-none text-brand-navy/5"
            >
              &middot;&middot;
            </span>
            <div className="relative">
              <h3 className="font-display text-2xl uppercase tracking-tight text-brand-navy">
                Gallery
              </h3>
              <p className="mt-2 text-sm text-black/60">
                Photos from matchdays and moments on the touchline.
              </p>
            </div>
            <span className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-brand-navy transition-transform group-hover:translate-x-0.5">
              View gallery &rarr;
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
