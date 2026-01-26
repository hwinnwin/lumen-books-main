import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  ArrowLeft,
  Loader2,
  BookOpen,
  Settings2,
  Minus,
  Plus,
  PenLine,
  Calendar,
  FileText,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { type Book } from "@/types/book";
import { bookService } from "@/services/bookService";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export default function ReadBook() {
  const navigate = useNavigate();
  const { bookId } = useParams<{ bookId: string }>();
  const { user } = useAuth();

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [fontSize, setFontSize] = useState(18);
  const [lineHeight, setLineHeight] = useState(1.8);

  useEffect(() => {
    if (bookId) {
      loadBook(bookId);
    }
  }, [bookId]);

  const loadBook = async (id: string) => {
    setLoading(true);
    try {
      const foundBook = await bookService.getBookById(id, user?.id);
      if (foundBook) {
        setBook(foundBook);
      } else {
        toast.error("Book not found");
        navigate("/my-books");
      }
    } catch (error) {
      console.error("Error loading book:", error);
      toast.error("Failed to load book");
      navigate("/my-books");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const adjustFontSize = (delta: number) => {
    setFontSize((prev) => Math.min(32, Math.max(12, prev + delta)));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Loading your book...</p>
          </div>
        </main>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Book not found</h2>
            <p className="text-muted-foreground mb-4">
              The book you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate("/my-books")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to My Books
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Sticky Reading Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4 md:px-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/my-books")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Back to Library</span>
          </Button>

          <div className="flex-1 text-center px-4">
            <h1 className="text-sm font-medium truncate">{book.title}</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(`/create?edit=${book.id}`)}
            >
              <PenLine className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">Edit</span>
            </Button>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings2 className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72" align="end">
                <div className="space-y-4">
                  <h4 className="font-medium text-sm">Reading Settings</h4>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Font Size
                      </span>
                      <span className="text-sm font-medium">{fontSize}px</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => adjustFontSize(-2)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <Slider
                        value={[fontSize]}
                        onValueChange={([v]) => setFontSize(v)}
                        min={12}
                        max={32}
                        step={1}
                        className="flex-1"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => adjustFontSize(2)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Line Height
                      </span>
                      <span className="text-sm font-medium">
                        {lineHeight.toFixed(1)}
                      </span>
                    </div>
                    <Slider
                      value={[lineHeight]}
                      onValueChange={([v]) => setLineHeight(v)}
                      min={1.2}
                      max={2.5}
                      step={0.1}
                    />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>

      {/* Book Content */}
      <main className="flex-1">
        <div className="container max-w-3xl px-4 py-8 md:py-12">
          {/* Book Header */}
          <Card
            className="mb-8 overflow-hidden"
            style={{ borderColor: book.coverColor }}
          >
            <div
              className="h-4"
              style={{ backgroundColor: book.coverColor }}
            />
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div
                  className="w-24 h-32 rounded-md shadow-book flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: book.coverColor }}
                >
                  <BookOpen className="h-10 w-10 text-white/80" />
                </div>

                <div className="flex-1">
                  <Badge variant="secondary" className="mb-2">
                    {book.category}
                  </Badge>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {book.title}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-3">
                    by {book.author}
                  </p>

                  {book.description && (
                    <p className="text-muted-foreground mb-4">
                      {book.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      <span>{book.wordCount.toLocaleString()} words</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Updated {formatDate(book.updatedAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Story Content */}
          <article
            className="prose prose-stone dark:prose-invert max-w-none"
            style={{
              fontSize: `${fontSize}px`,
              lineHeight: lineHeight,
            }}
          >
            <div className="font-serif whitespace-pre-wrap text-foreground">
              {book.content}
            </div>
          </article>

          {/* End of Book */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground mb-4">
              The End
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="outline"
                onClick={() => navigate(`/create?edit=${book.id}`)}
              >
                <PenLine className="mr-2 h-4 w-4" />
                Edit This Book
              </Button>
              <Button onClick={() => navigate("/my-books")}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Library
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
