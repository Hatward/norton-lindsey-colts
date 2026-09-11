import { PhotoGallery } from "@/components/PhotoGallery";

export const metadata = {
  title: "Gallery — Norton Lindsey Colts",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/60">
        <span className="h-2 w-2 bg-brand-yellow" />
        Season 2026/27
      </p>
      <h1 className="font-display text-4xl uppercase tracking-tight text-brand-navy">
        Gallery
      </h1>
      <p className="mt-2 max-w-2xl text-black/60">
        Moments from matchdays. More photos added throughout the season.
      </p>
      <div className="mt-8">
        <PhotoGallery />
      </div>
    </div>
  );
}
