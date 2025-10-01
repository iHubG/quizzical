import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

interface FilterBarProps {
  difficulty: string
  category: string
  onDifficultyChange: (value: string) => void
  onCategoryChange: (value: string) => void
}

const FilterBar: React.FC<FilterBarProps> = ({
  difficulty,
  category,
  onDifficultyChange,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-row md:flex-row gap-4 items-center justify-between">
      {/* Difficulty Filter */}
      <div className="w-full flex flex-row gap-2">
        <Label>Difficulty</Label>
        <Select value={difficulty} onValueChange={onDifficultyChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Category Filter */}
      <div className="w-full flex flex-row gap-2">
        <Label>Category</Label>
        <Select value={category} onValueChange={onCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="ReactJS">ReactJS</SelectItem>
            <SelectItem value="JavaScript">JavaScript</SelectItem>
            <SelectItem value="Web Development">Web Development</SelectItem>
            <SelectItem value="General Knowledge">General Knowledge</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default FilterBar
