"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { withBasePath } from "@/lib/basePath";
import { photos } from "@/content/gallery";

export function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null);

  const showPrev = useCallback(() => {
    setActive((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  }, []);

  const showNext = useCallback(() => {
    setActive((i) => (i === null ? null : (i + 1) % photos.length));
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, showPrev, showNext]);

  if (photos.length === 0) {
    return (
      <div className="clip-card flex flex-col items-center gap-2 border-2 border-brand-navy bg-brand-cream px-6 py-16 text-center">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
          <span className="h-2 w-2 bg-brand-yellow" />
          Coming Soon
        </p>
        <p className="font-display text-2xl uppercase tracking-tight text-brand-navy">
          Photos on the way
        </p>
        <p className="max-w-sm text-sm text-black/60">
          Matchday and touchline photos will be added here throughout the
          season.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(i)}
            className={`clip-card group relative overflow-hidden border-2 border-brand-navy bg-black/5 transition-colors hover:border-brand-yellow ${
              i === 0 ? "col-span-2 aspect-4/3" : "col-span-1 aspect-square"
            }`}
          >
            <Image
              src={withBasePath(photo.src)}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActive(null)}
            className="clip-card-sm absolute right-4 top-4 flex h-10 w-10 items-center justify-center border-2 border-white/40 bg-black/40 text-white hover:border-brand-yellow hover:text-brand-yellow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="clip-card-sm absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border-2 border-white/40 bg-black/40 text-white hover:border-brand-yellow hover:text-brand-yellow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="clip-card-sm absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border-2 border-white/40 bg-black/40 text-white hover:border-brand-yellow hover:text-brand-yellow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[80vh] max-w-full items-center justify-center"
          >
            <Image
              src={withBasePath(photos[active].src)}
              alt={photos[active].alt}
              width={photos[active].width}
              height={photos[active].height}
              className="h-auto max-h-[80vh] w-auto max-w-full border-2 border-brand-yellow object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
