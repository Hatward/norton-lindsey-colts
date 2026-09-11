# Norton Lindsey Colts

Team website for Norton Lindsey Colts — match reports, squad, and photos.

Built with Next.js (App Router, static export) and Tailwind CSS, deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

- `src/content/matchReports.ts` — one entry per match report.
- `src/content/squad.ts` — the player roster.
- `public/images/` — badge, hero, and match photos.

Edit these and push to `main` — the site rebuilds and redeploys automatically via GitHub Actions.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds a static export (`next build` with `output: "export"`) and publishes it to GitHub Pages.
