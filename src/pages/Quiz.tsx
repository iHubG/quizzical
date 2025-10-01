import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Brain, Clock, Layers } from "lucide-react";

const Quiz = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [timer, setTimer] = useState<number>(60);

  const handleStartQuiz = () => {
    if (!category) {
      alert("Please select a category!");
      return;
    }

    navigate("/play", {
      state: { category, difficulty, timer },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <Card className="w-full max-w-md p-6 shadow-xl rounded-2xl border">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold">
            <Brain className="text-blue-600" size={28} />
            Set Up Your Quiz
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Category */}
          <div>
            <Label className="flex items-center gap-2 mb-2 text-base font-medium">
              <Brain size={18} className="text-blue-500" />
              Category
            </Label>
            <Select onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="-- Choose a topic --" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ReactJS">ReactJS</SelectItem>
                <SelectItem value="JavaScript">JavaScript</SelectItem>
                <SelectItem value="Web Development">Web Development</SelectItem>
                <SelectItem value="General Knowledge">General Knowledge</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Difficulty */}
          <div>
            <Label className="flex items-center gap-2 mb-2 text-base font-medium">
              <Layers size={18} className="text-green-500" />
              Difficulty
            </Label>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Timer */}
          <div>
            <Label className="flex items-center gap-2 mb-2 text-base font-medium">
              <Clock size={18} className="text-purple-500" />
              Timer (seconds)
            </Label>
            <Input
              type="number"
              min={30}
              step={30}
              value={timer}
              onChange={(e) => setTimer(Number(e.target.value))}
            />
          </div>

          {/* Button */}
          <Button onClick={handleStartQuiz} className="w-full text-lg gap-2">
            <Brain size={20} />
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;
