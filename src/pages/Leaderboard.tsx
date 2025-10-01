import { useState } from "react";
import FilterBar from "@/components/FilterBar";
import LeaderboardTable from "@/components/LeaderboardTable";
import { type LeaderboardEntry } from "@/types";
import { FaTrophy } from "react-icons/fa";

const Leaderboard = () => {
  const [difficulty, setDifficulty] = useState("all");
  const [category, setCategory] = useState("all");

  // Dummy data for now
  const players: LeaderboardEntry[] = [
    {
      id: 1,
      name: "Alice",
      score: 90,
      difficulty: "easy",
      category: "ReactJS",
    },
    {
      id: 2,
      name: "Bob",
      score: 75,
      difficulty: "medium",
      category: "JavaScript",
    },
    {
      id: 3,
      name: "Charlie",
      score: 60,
      difficulty: "hard",
      category: "Web Development",
    },
    {
      id: 4,
      name: "Diana",
      score: 85,
      difficulty: "medium",
      category: "ReactJS",
    },
  ];

  // Sort high → low score
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  // Apply filters
  const filteredPlayers = sortedPlayers.filter((p) => {
    const difficultyMatch = difficulty === "all" || p.difficulty === difficulty;
    const categoryMatch = category === "all" || p.category === category;
    return difficultyMatch && categoryMatch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <div className="flex flex-col lg:flex-row justify-between gap-3">
        <h1 className="text-3xl font-bold text-center flex items-center gap-2">
          <FaTrophy className="text-amber-300" /> Leaderboard
        </h1>

        <FilterBar
          difficulty={difficulty}
          category={category}
          onDifficultyChange={setDifficulty}
          onCategoryChange={setCategory}
        />
      </div>

      <LeaderboardTable data={filteredPlayers} />
    </div>
  );
};

export default Leaderboard;
