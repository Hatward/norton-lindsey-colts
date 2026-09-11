export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 py-8 text-center sm:px-6">
        <p className="text-sm font-medium text-brand-navy">
          Norton Lindsey Colts
        </p>
        <p className="text-sm text-black/60">Coached by Darren and Jamie</p>
        <p className="text-xs text-black/40">
          &copy; {new Date().getFullYear()} Norton Lindsey Colts
        </p>
      </div>
    </footer>
  );
}
