import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { BookOpen, PenLine, Trash2, Calendar, FileText, Sparkles, Loader2, BookOpenCheck } from "lucide-react";
import { type Book } from "@/types/book";
import { bookService } from "@/services/bookService";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export default function MyBooks() {
  const navigate = useNavigate();
  const { user, isConfigured } = useAuth();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBooks();
  }, [user]);

  const loadBooks = async () => {
    setLoading(true);
    try {
      const myBooks = await bookService.getMyBooks(user?.id);
      // Sort by most recently updated
      const sortedBooks = myBooks.sort((a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );
      setBooks(sortedBooks);
    } catch (error) {
      console.error('Error loading books:', error);
      toast.error('Failed to load books');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    try {
      const success = await bookService.deleteBook(id, user?.id);
      if (success) {
        toast.success(`"${title}" has been deleted`);
        loadBooks();
      } else {
        toast.error("Failed to delete book");
      }
    } catch (error) {
      console.error('Error deleting book:', error);
      toast.error("Failed to delete book");
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/create?edit=${id}`);
  };

  const handleRead = (id: string) => {
    navigate(`/read/${id}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gradient-hero">
        <div className="container px-4 py-12 md:px-6">
          {/* Header Section */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">My Books</h1>
                  <p className="text-muted-foreground">
                    {loading ? 'Loading...' : `${books.length} ${books.length === 1 ? 'book' : 'books'} in your library`}
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                onClick={() => navigate("/create")}
                className="bg-primary hover:bg-primary/90"
              >
                <PenLine className="mr-2 h-4 w-4" />
                Write New Book
              </Button>
            </div>

            {/* Cloud Status Banner */}
            {!isConfigured && (
              <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  Your books are saved locally in this browser. Sign in to sync across devices and share with the community.
                </p>
              </div>
            )}
          </div>

          {/* Books Grid */}
          <div className="max-w-6xl mx-auto">
            {loading ? (
              <Card className="border-border shadow-book">
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
                  <p className="text-muted-foreground">Loading your books...</p>
                </CardContent>
              </Card>
            ) : books.length === 0 ? (
              <Card className="border-border shadow-book">
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-4">
                    <BookOpen className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">No books yet</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-6">
                    Start your writing journey by creating your first book. Share your stories with the Lumen community!
                  </p>
                  <Button
                    size="lg"
                    onClick={() => navigate("/create")}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <PenLine className="mr-2 h-4 w-4" />
                    Create Your First Book
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {books.map((book) => (
                  <Card
                    key={book.id}
                    className="border-border shadow-book hover:shadow-medium transition-all overflow-hidden group"
                  >
                    {/* Cover Preview */}
                    <div
                      className="h-32 relative cursor-pointer"
                      style={{ backgroundColor: book.coverColor }}
                      onClick={() => handleRead(book.id)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="text-lg font-bold text-white line-clamp-2 drop-shadow-md">
                          {book.title}
                        </h3>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-white/90 text-foreground">
                          {book.category}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-base line-clamp-1">{book.author}</CardTitle>
                      <CardDescription className="line-clamp-2 min-h-[2.5rem]">
                        {book.description || "No description provided"}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Stats */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <FileText className="h-3.5 w-3.5" />
                          <span>{book.wordCount.toLocaleString()} words</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{formatDate(book.updatedAt)}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-2 border-t border-border">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => handleRead(book.id)}
                        >
                          <BookOpenCheck className="mr-1.5 h-3.5 w-3.5" />
                          Read
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => handleEdit(book.id)}
                        >
                          <PenLine className="mr-1.5 h-3.5 w-3.5" />
                          Edit
                        </Button>

                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete "{book.title}"?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your book
                                and remove all its content.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(book.id, book.title)}
                                className="bg-destructive hover:bg-destructive/90"
                              >
                                Delete Book
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Tips Section */}
          {books.length > 0 && !loading && (
            <div className="max-w-6xl mx-auto mt-8">
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-accent" />
                    Keep Writing!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You're doing great! Remember to save your work regularly and don't be afraid to experiment with different writing styles.
                    Your creativity makes every book unique and special.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
