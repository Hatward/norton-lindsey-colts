import { matchReports } from "@/content/matchReports";

export function goalsFor(shortName: string): number {
  return matchReports.reduce((total, report) => {
    const goals = report.scorers
      .filter((s) => s.name === shortName)
      .reduce((sum, s) => sum + s.goals, 0);
    return total + goals;
  }, 0);
}
