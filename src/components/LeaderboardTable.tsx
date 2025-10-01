interface LeaderboardEntry {
  id: number;
  name: string;
  score: number;
  difficulty: string;
}

interface LeaderboardTableProps {
  data: LeaderboardEntry[];
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-md shadow-md overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 text-left">Rank</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Score</th>
            <th className="p-3 text-left">Difficulty</th>
          </tr>
        </thead>
        <tbody className="text-sm lg:text-base">
          {data.length > 0 ? (
            data.map((entry, index) => (
              <tr
                key={entry.id}
                className={`${index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}`}
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3 font-medium">{entry.name}</td>
                <td className="p-3">{entry.score}</td>
                <td className="p-3 capitalize">{entry.difficulty}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center p-4 text-gray-500">
                No players yet. Be the first to take a quiz!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
