export interface LeaderboardEntry {
  id: number
  name: string
  score: number
  difficulty: "easy" | "medium" | "hard"
  category: string
}
