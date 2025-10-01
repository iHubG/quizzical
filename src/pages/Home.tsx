import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaPlayCircle, FaTrophy } from "react-icons/fa"; // icons for buttons
import { MdQuiz } from "react-icons/md"; // quiz logo icon

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <Card className="w-full max-w-2xl text-center p-8 shadow-xl rounded-2xl border">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <MdQuiz className="text-blue-600 text-6xl" />
          </div>
          <CardTitle className="text-4xl font-extrabold tracking-tight">
            Welcome to Quizzical
          </CardTitle>
          <CardDescription className="text-lg mt-3 text-muted-foreground">
            Test your knowledge with AI-generated quizzes.  
            Choose a category, difficulty level, and timer — then compete on the global leaderboard!
          </CardDescription>
        </CardHeader>

        <CardContent className="flex justify-center gap-6 mt-8">
          <Button asChild size="lg" className="gap-2">
            <Link to="/quiz">
              <FaPlayCircle className="text-xl" />
              Start Quiz
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link to="/leaderboard">
              <FaTrophy className="text-xl text-yellow-500" />
              View Leaderboard
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
