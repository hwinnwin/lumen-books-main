import { useState } from "react";
import { BookCard } from "./BookCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search } from "lucide-react";

const books = [
  {
    bookId: "the-midnight-library",
    title: "The Midnight Library",
    author: "Matt Haig",
    category: "Fiction",
    rating: 4.8,
    coverColor: "bg-gradient-to-br from-blue-500 to-purple-600",
  },
  {
    bookId: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help",
    rating: 4.9,
    coverColor: "bg-gradient-to-br from-orange-500 to-red-600",
  },
  {
    bookId: "project-hail-mary",
    title: "Project Hail Mary",
    author: "Andy Weir",
    category: "Sci-Fi",
    rating: 4.7,
    coverColor: "bg-gradient-to-br from-teal-500 to-cyan-600",
  },
  {
    bookId: "the-psychology-of-money",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    rating: 4.6,
    coverColor: "bg-gradient-to-br from-green-500 to-emerald-700",
  },
  {
    bookId: "educated",
    title: "Educated",
    author: "Tara Westover",
    category: "Memoir",
    rating: 4.8,
    coverColor: "bg-gradient-to-br from-amber-500 to-yellow-600",
  },
  {
    bookId: "dune",
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    rating: 4.9,
    coverColor: "bg-gradient-to-br from-amber-700 to-orange-900",
  },
  {
    bookId: "luminous-legends-vol-1",
    title: "Luminous Legends: Volume 1",
    author: "Aurora Chen",
    category: "Fantasy",
    rating: 4.9,
    coverColor: "bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500",
  },
];

export const FeaturedBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(books.map(book => book.category)))];

  const filteredBooks = books.filter((book) => {
    // Category filter
    if (selectedCategory && selectedCategory !== "All" && book.category !== selectedCategory) {
      return false;
    }
    
    // Search filter
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    
    return (
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.category.toLowerCase().includes(query)
    );
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "title":
        return a.title.localeCompare(b.title);
      case "newest":
        return books.indexOf(b) - books.indexOf(a);
      default:
        return 0;
    }
  });

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Featured Books
            </h2>
            <p className="text-muted-foreground">
              Handpicked recommendations for you
            </p>
          </div>
          
          <Button variant="ghost" className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80">
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Search and Sort Bar */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by title, author, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-card border-border focus-visible:ring-primary"
              />
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px] h-12 bg-card border-border">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border z-50">
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="rating">Highest Rating</SelectItem>
                <SelectItem value="title">Title (A-Z)</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category || (category === "All" && !selectedCategory) ? "default" : "outline"}
                className="cursor-pointer transition-all hover:scale-105"
                onClick={() => setSelectedCategory(category === "All" ? null : category)}
              >
                {category}
              </Badge>
            ))}
          </div>
          
          {(searchQuery || selectedCategory) && (
            <p className="text-sm text-muted-foreground mt-4">
              Found {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"}
            </p>
          )}
        </div>

        {/* Books Grid */}
        {sortedBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedBooks.map((book, index) => (
              <BookCard key={index} {...book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-2">No books found</p>
            <p className="text-sm text-muted-foreground">
              Try searching with different keywords
            </p>
          </div>
        )}

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Button variant="outline" className="w-full sm:w-auto">
            View All Books
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
