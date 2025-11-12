import { Book, Search, User, Menu, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <Book className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Lumen Books
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Browse
          </a>
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Collections
          </a>
          <button 
            onClick={() => navigate("/create")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
          >
            <PenLine className="h-4 w-4" />
            Write Book
          </button>
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        {/* Search & User Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center relative">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search books..."
              className="pl-9 w-64 bg-muted/50 border-border/50"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container flex flex-col gap-4 p-4">
            <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Browse
            </a>
            <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Collections
            </a>
            <button 
              onClick={() => {
                navigate("/create");
                setIsMenuOpen(false);
              }}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2 text-left"
            >
              <PenLine className="h-4 w-4" />
              Write Book
            </button>
            <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
