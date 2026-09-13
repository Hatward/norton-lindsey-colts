import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Reveal } from "@/components/Reveal";
import { withBasePath } from "@/lib/basePath";

const HERO_IMAGES = [
  { src: "/images/home-hero.jpg", mobilePosition: "object-[58%_center]" },
  { src: "/images/home-hero2.jpg", mobilePosition: "object-[62%_center]" },
  { src: "/images/home-hero3.jpg", mobilePosition: "object-[66%_center]" },
];

const SHOWCASE = [
  {
    href: "/squad",
    kicker: "The Squad",
    title: "Meet the Teams",
    blurb: "Meet the players pulling on the yellow and navy this season.",
    image: "/images/gallery/gallery-042.jpg",
  },
  {
    href: "/match-reports",
    kicker: "This Season",
    title: "Match Reports & Fixtures",
    blurb: "Results, reports, and what's coming up next.",
    image: "/images/matchreports.jpeg",
  },
  {
    href: "/gallery",
    kicker: "Socials",
    title: "Work Hard Play Hard",
    blurb: "Photos from matchdays, presentations, and team socials.",
    image: "/images/socials.png",
  },
];

export default function Home() {
  return (
    <div>
      <section className="bg-obsidian relative flex min-h-[100svh] items-end overflow-hidden text-white">
        <HeroCarousel
          images={HERO_IMAGES}
          alt="Norton Lindsey Colts player striking the ball on matchday"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div
          aria-hidden
          className="grain-overlay absolute inset-0"
          style={{
            backgroundImage: `url(${withBasePath("/images/grain.jpg")})`,
          }}
        />
        <div
          aria-hidden
          className="glow-yellow absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full blur-3xl"
        />
        <div
          aria-hidden
          className="glow-blue absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-5xl px-4 pt-32 pb-6 sm:px-6 sm:pb-20">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-white/60 uppercase">
              Est. Grassroots &middot; U7s Playing U8s Football
            </p>
            <h1 className="font-display mt-4 text-[3.25rem] leading-[0.85] tracking-tight uppercase sm:text-[6rem] lg:text-[8rem]">
              Norton Lindsey
              <br />
              <span className="text-brand-yellow">Colts</span>
            </h1>
            <div className="mt-6 flex max-w-lg items-center gap-4">
              <span className="h-10 w-1 shrink-0 bg-brand-yellow" />
              <p className="font-display text-base leading-tight tracking-tight text-white uppercase sm:text-lg">
                <span className="text-brand-yellow">Hard work</span> beats
                talent
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-obsidian relative overflow-hidden pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <div className="grid gap-4 pt-8 sm:grid-cols-3 sm:pt-16">
              {SHOWCASE.map((tile) => {
                const content = (
                  <>
                    <Image
                      src={withBasePath(tile.image)}
                      alt=""
                      fill
                      className={`object-cover ${tile.href ? "transition-transform duration-500 group-hover:scale-105" : ""}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
                    <div className="relative">
                      <p className="font-mono text-xs tracking-[0.25em] text-brand-yellow uppercase">
                        {tile.kicker}
                      </p>
                      <h3
                        className={`font-display mt-1 text-2xl tracking-tight uppercase sm:text-3xl ${tile.href ? "text-white" : "text-brand-yellow"}`}
                      >
                        {tile.title}
                      </h3>
                      {tile.blurb && (
                        <p className="mt-2 max-w-xs text-sm text-white/70">
                          {tile.blurb}
                        </p>
                      )}
                      {tile.href && (
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold tracking-wide text-white uppercase transition-transform group-hover:translate-x-0.5">
                          Explore &rarr;
                        </span>
                      )}
                    </div>
                  </>
                );

                return tile.href ? (
                  <Link
                    key={tile.title}
                    href={tile.href}
                    className="group clip-card relative flex aspect-4/3 flex-col justify-end overflow-hidden border border-white/10 p-6 transition-colors hover:border-brand-yellow sm:aspect-square"
                  >
                    {content}
                  </Link>
                ) : (
                  <div
                    key={tile.title}
                    className="clip-card relative flex aspect-4/3 flex-col justify-end overflow-hidden border border-white/10 p-6 sm:aspect-square"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
