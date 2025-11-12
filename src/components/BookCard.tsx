import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface BookCardProps {
  title: string;
  author: string;
  category: string;
  rating: number;
  coverColor: string;
  bookId: string;
}

export const BookCard = ({ title, author, category, rating, coverColor, bookId }: BookCardProps) => {
  return (
    <Link to={`/book/${bookId}`}>
      <Card className="group overflow-hidden border-border/50 hover:shadow-book transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-0">
        {/* Book Cover */}
        <div 
          className={`h-64 ${coverColor} flex items-center justify-center relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30" />
          <BookOpen className="h-16 w-16 text-white/90" />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="secondary" size="sm">
              View Details
            </Button>
          </div>
        </div>

        {/* Book Info */}
        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg text-card-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{author}</p>
          </div>

          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium text-foreground">{rating}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    </Link>
  );
};
