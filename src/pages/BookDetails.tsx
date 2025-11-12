import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Star, Heart, Share2, ArrowLeft, Clock, BookMarked } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const booksData = {
  "the-midnight-library": {
    title: "The Midnight Library",
    author: "Matt Haig",
    category: "Fiction",
    rating: 4.8,
    coverColor: "bg-gradient-to-br from-blue-500 to-purple-600",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
    fullDescription: "Nora Seed finds herself faced with this decision. Faced with the possibility of changing her life for a new one, following a different career, undoing old breakups, realizing her dreams of becoming a glaciologist; she must search within herself as she travels through the Midnight Library to decide what is truly fulfilling in life, and what makes it worth living in the first place.",
    pages: 304,
    publishDate: "August 13, 2020",
    isbn: "978-0525559474",
    language: "English",
    reviews: [
      {
        id: 1,
        author: "Sarah Johnson",
        avatar: "SJ",
        rating: 5,
        date: "2 weeks ago",
        content: "This book changed my perspective on life. Haig's writing is both profound and accessible. The concept is brilliant and the execution is flawless."
      },
      {
        id: 2,
        author: "Michael Chen",
        avatar: "MC",
        rating: 4,
        date: "1 month ago",
        content: "A beautiful exploration of regret and possibility. Some parts felt a bit repetitive, but overall a very moving read that stays with you."
      },
      {
        id: 3,
        author: "Emma Davis",
        avatar: "ED",
        rating: 5,
        date: "2 months ago",
        content: "Couldn't put it down! Perfect blend of philosophy and storytelling. If you've ever wondered about the 'what ifs' in life, this book is for you."
      }
    ]
  },
  "atomic-habits": {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help",
    rating: 4.9,
    coverColor: "bg-gradient-to-br from-orange-500 to-red-600",
    description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    fullDescription: "If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights.",
    pages: 320,
    publishDate: "October 16, 2018",
    isbn: "978-0735211292",
    language: "English",
    reviews: [
      {
        id: 1,
        author: "David Thompson",
        avatar: "DT",
        rating: 5,
        date: "1 week ago",
        content: "Life-changing! The 1% improvement concept is revolutionary. I've implemented several strategies and seen real results."
      },
      {
        id: 2,
        author: "Lisa Park",
        avatar: "LP",
        rating: 5,
        date: "3 weeks ago",
        content: "Best self-help book I've ever read. Clear, actionable, and backed by science. A must-read for anyone looking to improve their life."
      }
    ]
  },
  "luminous-legends-vol-1": {
    title: "Luminous Legends: Volume 1",
    author: "Aurora Chen",
    category: "Fantasy",
    rating: 4.9,
    coverColor: "bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500",
    description: "In a world where light itself holds magic, young Kai discovers they possess the rare gift of luminescence manipulation. As ancient darkness threatens to consume the Seven Realms, Kai must master their powers and unite the legendary Luminary Order.",
    fullDescription: "An epic tale of courage, friendship, and the eternal battle between light and shadow. When the mysterious Shadow Veil begins spreading across the realms, extinguishing all sources of light and hope, Kai embarks on a breathtaking journey to awaken the dormant Luminaries. Along the way, they'll forge unexpected alliances, face their deepest fears, and discover that true light comes from within.",
    pages: 456,
    publishDate: "November 1, 2025",
    isbn: "978-1234567890",
    language: "English",
    reviews: [
      {
        id: 1,
        author: "Luna Martinez",
        avatar: "LM",
        rating: 5,
        date: "3 days ago",
        content: "Finally! This book is absolutely magical. The world-building is incredible and the characters are so well-developed. Can't wait for Volume 2!"
      },
      {
        id: 2,
        author: "River Thompson",
        avatar: "RT",
        rating: 5,
        date: "1 week ago",
        content: "My kids and I read this together - we were all hooked from page one. The magic system is so creative and the story moves at a perfect pace."
      },
      {
        id: 3,
        author: "Phoenix Lee",
        avatar: "PL",
        rating: 5,
        date: "2 weeks ago",
        content: "Aurora Chen has created something truly special. The themes of finding your inner light resonate on so many levels. A must-read!"
      },
      {
        id: 4,
        author: "Sage Williams",
        avatar: "SW",
        rating: 4,
        date: "3 weeks ago",
        content: "Beautifully written fantasy with stunning imagery. Some parts felt a bit slow but the climax was worth it. Highly recommended!"
      }
    ]
  }
};

export default function BookDetails() {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  
  const book = bookId ? booksData[bookId as keyof typeof booksData] : null;

  if (!book) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Book not found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8 md:py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6 -ml-2"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Books
        </Button>

        {/* Book Header */}
        <div className="grid md:grid-cols-[300px_1fr] gap-8 mb-12">
          {/* Book Cover */}
          <div className="space-y-4">
            <div className={`${book.coverColor} rounded-lg h-[450px] flex items-center justify-center shadow-book transition-transform hover:scale-105`}>
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30 rounded-lg" />
              <BookOpen className="h-24 w-24 text-white/90 relative z-10" />
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-2">
              <Button
                className="w-full"
                size="lg"
                onClick={() => navigate(`/read/${bookId}`)}
              >
                <BookMarked className="mr-2 h-5 w-5" />
                Start Reading
              </Button>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="w-full">
                  <Heart className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Book Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-3">
                {book.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                by {book.author}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span className="text-lg font-semibold text-foreground">{book.rating}</span>
                  <span>({book.reviews.length} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{book.pages} pages</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">About this book</h2>
              <p className="text-muted-foreground leading-relaxed">
                {book.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {book.fullDescription}
              </p>
            </div>

            <Separator />

            {/* Book Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Published</p>
                <p className="font-medium text-foreground">{book.publishDate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Language</p>
                <p className="font-medium text-foreground">{book.language}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Pages</p>
                <p className="font-medium text-foreground">{book.pages}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">ISBN</p>
                <p className="font-medium text-foreground">{book.isbn}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="max-w-4xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Reader Reviews</h2>
            <p className="text-muted-foreground">See what others are saying about this book</p>
          </div>

          <div className="space-y-6">
            {book.reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${review.author}`} />
                      <AvatarFallback>{review.avatar}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-foreground">{review.author}</p>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "fill-accent text-accent"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {review.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              Load More Reviews
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
