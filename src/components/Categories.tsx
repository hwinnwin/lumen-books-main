import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Brain, Heart, Rocket, Briefcase, Sparkles } from "lucide-react";

const categories = [
  {
    name: "Fiction",
    icon: BookOpen,
    count: "2,340 books",
    color: "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20",
    iconColor: "text-blue-600",
  },
  {
    name: "Self-Help",
    icon: Brain,
    count: "1,890 books",
    color: "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/20",
    iconColor: "text-purple-600",
  },
  {
    name: "Romance",
    icon: Heart,
    count: "1,560 books",
    color: "bg-pink-500/10 hover:bg-pink-500/20 border-pink-500/20",
    iconColor: "text-pink-600",
  },
  {
    name: "Science Fiction",
    icon: Rocket,
    count: "980 books",
    color: "bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/20",
    iconColor: "text-cyan-600",
  },
  {
    name: "Business",
    icon: Briefcase,
    count: "1,240 books",
    color: "bg-green-500/10 hover:bg-green-500/20 border-green-500/20",
    iconColor: "text-green-600",
  },
  {
    name: "Fantasy",
    icon: Sparkles,
    count: "1,670 books",
    color: "bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/20",
    iconColor: "text-amber-600",
  },
];

export const Categories = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive collection organized by genre
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className={`${category.color} border cursor-pointer transition-all duration-300 hover:shadow-soft hover:-translate-y-1`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`h-12 w-12 rounded-xl bg-background flex items-center justify-center shadow-soft`}>
                      <Icon className={`h-6 w-6 ${category.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-card-foreground">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.count}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
