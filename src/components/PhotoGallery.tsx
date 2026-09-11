"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  { src: "/images/match-1.jpg", alt: "Colts U7 Blues in action" },
  { src: "/images/match-2.jpg", alt: "Colts U7 Yellows in action" },
];

export function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(i)}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-black/5"
          >
            <Image
              src={photo.src}
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
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
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
          <div className="relative h-full max-h-[80vh] w-full max-w-3xl">
            <Image
              src={photos[active].src}
              alt={photos[active].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
