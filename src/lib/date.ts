export function formatMatchDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00`);
  return date
    .toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(",", "");
}
