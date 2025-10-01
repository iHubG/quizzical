import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Home as HomeIcon, Trophy, PlayCircle, User, LogOut, Settings } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b shadow-sm">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-blue-600 flex items-center gap-2">
        <PlayCircle className="h-6 w-6" />
        Quizzical
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4">
        <Button asChild variant="ghost" className="flex items-center gap-2">
          <Link to="/">
            <HomeIcon className="h-4 w-4" /> Home
          </Link>
        </Button>

        <Button asChild variant="ghost" className="flex items-center gap-2">
          <Link to="/quiz">
            <PlayCircle className="h-4 w-4" /> Take Quiz
          </Link>
        </Button>

        <Button asChild variant="ghost" className="flex items-center gap-2">
          <Link to="/leaderboard">
            <Trophy className="h-4 w-4 text-yellow-500" /> Leaderboard
          </Link>
        </Button>

        {/* Avatar/Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarFallback>IN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-2">
              <User className="h-4 w-4" /> Update Name
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              <Settings className="h-4 w-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-2 text-red-600">
              <LogOut className="h-4 w-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-b shadow-md flex flex-col items-start px-6 py-4 space-y-3 md:hidden z-50">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            <HomeIcon className="h-4 w-4" /> Home
          </Link>
          <Link
            to="/quiz"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            <PlayCircle className="h-4 w-4" /> Take Quiz
          </Link>
          <Link
            to="/leaderboard"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            <Trophy className="h-4 w-4 text-yellow-500" /> Leaderboard
          </Link>

          {/* Mobile Avatar/Profile */}
          <div className="mt-3 w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Avatar>
                    <AvatarFallback>IN</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Your Name</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-40">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2">
                  <User className="h-4 w-4" /> Update Name
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <Settings className="h-4 w-4" /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                  <LogOut className="h-4 w-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
