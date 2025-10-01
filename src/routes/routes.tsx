import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/layout";
import Home from "@/pages/Home";
import Leaderboard from "@/pages/Leaderboard";
import Quiz from "@/pages/Quiz";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "leaderboard", element: <Leaderboard /> },
      { path: "quiz", element: <Quiz /> },
    ],
  },
  {
    path: "*", 
    element: <NotFound />,
  },
]);

export default router;