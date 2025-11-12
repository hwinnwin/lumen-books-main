import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles, PenLine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-library.jpg";

export const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container px-4 py-20 md:py-32 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 w-fit">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Discover Your Next Great Read</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
              Your Digital
              <span className="block text-primary mt-2">Library Awaits</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Explore thousands of books, curate your personal collection, and immerse yourself in stories that inspire. Welcome to Lumen Books—where every page is a new adventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium"
                onClick={() => navigate("/create")}
              >
                <PenLine className="mr-2 h-5 w-5" />
                Write Your Story
              </Button>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium">
                <BookOpen className="mr-2 h-5 w-5" />
                Start Exploring
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Books Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5k+</div>
                <div className="text-sm text-muted-foreground">Active Readers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-book">
              <img
                src={heroImage}
                alt="Modern library interior with bookshelves"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-medium hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-card-foreground">Currently Reading</div>
                  <div className="text-xs text-muted-foreground">234 books this month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};
