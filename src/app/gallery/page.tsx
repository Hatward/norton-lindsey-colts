import { PhotoGallery } from "@/components/PhotoGallery";

export const metadata = {
  title: "Gallery — Norton Lindsey Colts",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-brand-navy">Gallery</h1>
      <p className="mt-2 max-w-2xl text-black/60">
        Moments from matchdays. More photos added throughout the season.
      </p>
      <div className="mt-8">
        <PhotoGallery />
      </div>
    </div>
  );
}
