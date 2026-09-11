export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefixes a public/ asset path with basePath so it resolves correctly
 * when the site is served from a GitHub Pages project subpath. */
export function withBasePath(path: string) {
  return `${BASE_PATH}${path}`;
}
