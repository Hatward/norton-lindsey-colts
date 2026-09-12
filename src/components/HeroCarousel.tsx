"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { withBasePath } from "@/lib/basePath";

export function HeroCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <>
      {images.map((src, i) => (
        <Image
          key={src}
          src={withBasePath(src)}
          alt={i === 0 ? alt : ""}
          fill
          priority={i === 0}
          onLoad={() =>
            setLoaded((prev) =>
              prev.has(i) ? prev : new Set(prev).add(i),
            )
          }
          className={`object-cover object-center transition-opacity duration-1000 ${
            i === index && loaded.has(i) ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}
