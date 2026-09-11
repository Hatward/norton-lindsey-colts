export function Footer() {
  return (
    <footer className="border-t-4 border-brand-navy bg-brand-cream">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 py-10 text-center sm:px-6">
        <p className="font-display text-xl uppercase tracking-tight text-brand-navy">
          Norton Lindsey Colts
        </p>
        <p className="text-sm text-black/60">Coached by Darren and Jamie</p>
        <p className="font-mono text-xs uppercase tracking-wide text-black/40">
          &copy; {new Date().getFullYear()} Norton Lindsey Colts
        </p>
      </div>
    </footer>
  );
}
