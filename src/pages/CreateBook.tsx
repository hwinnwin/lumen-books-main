import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, Save, Eye, ArrowLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { bookService } from "@/services/bookService";
import { useAuth } from "@/contexts/AuthContext";

export default function CreateBook() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editId = searchParams.get("edit");
  const isEditing = !!editId;
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    content: "",
    coverColor: "#f59e0b",
  });

  useEffect(() => {
    if (editId) {
      loadBook(editId);
    }
  }, [editId]);

  const loadBook = async (id: string) => {
    setLoading(true);
    try {
      const book = await bookService.getBookById(id, user?.id);
      if (book) {
        setFormData({
          title: book.title,
          author: book.author,
          category: book.category,
          description: book.description,
          content: book.content,
          coverColor: book.coverColor,
        });
      } else {
        toast.error("Book not found");
        navigate("/my-books");
      }
    } catch (error) {
      console.error('Error loading book:', error);
      toast.error("Failed to load book");
      navigate("/my-books");
    } finally {
      setLoading(false);
    }
  };

  const categories = ["Fiction", "Sci-Fi", "Fantasy", "Mystery", "Romance", "Adventure", "Historical", "Non-Fiction"];
  const coverColors = [
    { name: "Amber", value: "#f59e0b" },
    { name: "Rose", value: "#f43f5e" },
    { name: "Purple", value: "#a855f7" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Emerald", value: "#10b981" },
    { name: "Indigo", value: "#6366f1" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.author || !formData.category || !formData.content) {
      toast.error("Please fill in all required fields");
      return;
    }

    setSaving(true);
    try {
      if (isEditing && editId) {
        const updated = await bookService.updateBook(editId, formData, user?.id);
        if (updated) {
          toast.success("Your book has been updated!", {
            description: `"${formData.title}" has been saved.`,
          });
          navigate("/my-books");
        } else {
          toast.error("Failed to update book");
        }
      } else {
        await bookService.createBook(formData, user?.id);
        toast.success("Your book has been created!", {
          description: `"${formData.title}" is now in your library.`,
        });
        navigate("/my-books");
      }
    } catch (error) {
      console.error('Error saving book:', error);
      toast.error("Failed to save book");
    } finally {
      setSaving(false);
    }
  };

  const handlePreview = () => {
    if (!formData.title) {
      toast.error("Please add a title first");
      return;
    }
    toast.info("Preview feature coming soon!");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gradient-hero flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Loading book...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gradient-hero">
        <div className="container px-4 py-12 md:px-6">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/my-books")}
              className="mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to My Books
            </Button>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  {isEditing ? "Edit Your Story" : "Write Your Story"}
                </h1>
                <p className="text-muted-foreground">
                  {isEditing
                    ? "Make changes to your book and save when you're done"
                    : "Create and share your own book with the Lumen community"
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <Card className="border-border shadow-book">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Book Details
                </CardTitle>
                <CardDescription>
                  Fill in the details about your book. Let your creativity shine!
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Title & Author */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="title">Book Title *</Label>
                    <Input
                      id="title"
                      placeholder="Enter your book title..."
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="author">Author Name *</Label>
                    <Input
                      id="author"
                      placeholder="Your name"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Category & Cover Color */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverColor">Cover Color</Label>
                    <div className="flex gap-2 flex-wrap">
                      {coverColors.map((color) => (
                        <button
                          key={color.value}
                          type="button"
                          className={`h-10 w-10 rounded-md border-2 transition-all hover:scale-110 ${
                            formData.coverColor === color.value
                              ? "border-foreground ring-2 ring-ring ring-offset-2"
                              : "border-border"
                          }`}
                          style={{ backgroundColor: color.value }}
                          onClick={() => setFormData({ ...formData, coverColor: color.value })}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Short Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Write a brief description of your book (optional)..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="resize-none"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <Label htmlFor="content">Your Story *</Label>
                  <Textarea
                    id="content"
                    placeholder="Start writing your story here... Let your imagination run wild!"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={15}
                    className="font-serif text-base leading-relaxed"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    {formData.content.split(/\s+/).filter(Boolean).length} words
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    disabled={saving}
                  >
                    {saving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        {isEditing ? "Save Changes" : "Publish Book"}
                      </>
                    )}
                  </Button>

                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    onClick={handlePreview}
                    className="flex-1"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>

                  <Button
                    type="button"
                    size="lg"
                    variant="ghost"
                    onClick={() => navigate("/my-books")}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>

          {/* Tips Section */}
          <div className="max-w-4xl mx-auto mt-8">
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                  Writing Tips for Young Authors
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Start with an exciting opening to grab readers' attention</li>
                  <li>Create interesting characters that readers will care about</li>
                  <li>Use descriptive words to paint pictures in readers' minds</li>
                  <li>Don't worry about being perfect - just let your creativity flow!</li>
                  <li>Read your story out loud to see how it sounds</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
