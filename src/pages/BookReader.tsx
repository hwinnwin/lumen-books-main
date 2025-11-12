import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

// This will be expanded with actual chapter content
const bookChapters = {
  "luminous-legends-vol-1": [
    {
      number: 1,
      title: "The Awakening",
      content: `# Chapter 1: The Awakening

The first rays of dawn painted the sky in hues of amber and rose, but Kai barely noticed. They sat cross-legged on the weathered stone floor of their family's modest cottage, eyes closed, hands cupped before them like they were holding something precious and invisible.

"Focus, Kai," their grandmother's gentle voice echoed in their memory. "The light isn't something you force. It's something you become."

For three years, Kai had tried. Every morning before the village stirred to life, they would sit in this same spot, attempting to summon even the faintest glimmer of luminescence. The gift that ran in their family's blood. The magic that could bend light itself.

Nothing.

Their older sister Maya could create orbs of brilliant white light before she was ten. Their cousin Jin had illuminated the entire village square during the Harvest Festival at twelve. But Kai, now seventeen, had never produced so much as a spark.

"Maybe I'm just broken," Kai whispered to the empty room.

As if in response, something shifted. Not in the room, but within. A warmth bloomed in their chest, spreading through their veins like liquid starlight. Kai's eyes snapped open.

Their hands—their hands were glowing.

Not brightly. Just a soft, silvery shimmer, like moonlight on water. But it was there. Real. Undeniable.

Kai gasped, and the light flickered. "No, no, no—stay," they pleaded, trying to remember every breathing exercise, every meditation technique grandmother had taught them.

The light steadied. Grew slightly brighter.

Then the front door burst open.

"Kai!" Maya's voice was sharp with panic. "The Shadow Veil—it's crossed the river!"

The light in Kai's hands vanished as they jumped to their feet. "What? That's impossible. The wards—"

"The wards failed." Maya's face was pale, her own hands already glowing with defensive magic. "The whole eastern forest is going dark. And Kai... Grandmother sent me to find you. She says it's time."

"Time for what?"

Maya's expression was grave. "To stop hiding what you are."

Kai looked down at their now-normal hands, remembering the silver glow. "I don't understand."

"You will." Maya grabbed their wrist, pulling them toward the door. "The Order of Luminaries is gathering. And apparently, they've been waiting for you."

As they stepped outside, Kai saw it—a wall of absolute darkness creeping across the horizon like a living thing, swallowing the sunrise. Swallowing everything.

And deep in their chest, where that warmth had kindled, something stirred. Something ancient. Something that whispered:

*This is what you were born for.*`
    },
    {
      number: 2,
      title: "The Order's Call",
      content: `# Chapter 2: The Order's Call

*Add your chapter 2 content here...*

The journey to the Luminous Citadel took three days, but for Kai, it felt like three heartbeats and three lifetimes all at once...

*Continue writing your story!*`
    },
    {
      number: 3,
      title: "Shadows Rising",
      content: `# Chapter 3: Shadows Rising

*Add your chapter 3 content here...*

*This is where your story continues to unfold!*`
    }
  ]
};

export default function BookReader() {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const [currentChapter, setCurrentChapter] = useState(0);

  const chapters = bookId ? bookChapters[bookId as keyof typeof bookChapters] : null;

  if (!chapters) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Book not available for reading</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  const chapter = chapters[currentChapter];
  const progress = ((currentChapter + 1) / chapters.length) * 100;

  const goToNextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPreviousChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Reader Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(`/book/${bookId}`)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="mr-2 h-4 w-4" />
                  Chapters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Table of Contents
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-2">
                  {chapters.map((chap, index) => (
                    <Button
                      key={index}
                      variant={currentChapter === index ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => {
                        setCurrentChapter(index);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <span className="mr-2 font-semibold">Ch. {chap.number}</span>
                      {chap.title}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">
              Chapter {chapter.number} of {chapters.length}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <Progress value={progress} className="h-1 rounded-none" />
      </header>

      {/* Reader Content */}
      <main className="container max-w-3xl px-4 py-8 md:py-12">
        <Card className="mb-8">
          <CardContent className="p-6 md:p-12">
            {/* Chapter Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <div className="mb-8 text-center border-b pb-6">
                <div className="text-sm font-semibold text-muted-foreground mb-2">
                  CHAPTER {chapter.number}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-0">
                  {chapter.title}
                </h1>
              </div>

              <div className="whitespace-pre-wrap leading-relaxed text-foreground/90 text-lg">
                {chapter.content.split('\n').map((line, i) => {
                  if (line.startsWith('# ')) {
                    return null; // Skip the markdown header as we display it above
                  }
                  if (line.trim() === '') {
                    return <div key={i} className="h-4" />;
                  }
                  if (line.startsWith('*') && line.endsWith('*')) {
                    return <p key={i} className="italic text-muted-foreground">{line.slice(1, -1)}</p>;
                  }
                  return <p key={i} className="mb-4">{line}</p>;
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chapter Navigation */}
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            onClick={goToPreviousChapter}
            disabled={currentChapter === 0}
            className="flex-1 md:flex-none"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          <span className="text-sm text-muted-foreground">
            {currentChapter + 1} / {chapters.length}
          </span>

          <Button
            variant="outline"
            onClick={goToNextChapter}
            disabled={currentChapter === chapters.length - 1}
            className="flex-1 md:flex-none"
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
}
