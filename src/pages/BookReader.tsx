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

The Luminous Citadel rose from the mountains like a crystal crown, its seven towers catching the dying sunlight and transforming it into cascading ribbons of rainbow fire. Kai had seen it in old paintings, heard stories from their grandmother, but nothing had prepared them for the reality.

"It's beautiful," they whispered.

Maya's grip on their arm tightened. "It's a fortress. And right now, it might be the only thing standing between the realms and total darkness."

They'd ridden hard through the night, Maya's light-horse carrying them both at impossible speeds. Behind them, the Shadow Veil continued its relentless advance, swallowing villages, forests, entire valleys in absolute darkness. No one who entered the Veil had ever returned.

The Citadel gates opened before they reached them, massive doors of enchanted silver sliding apart silently. A figure waited in the courtyard—tall, ageless, wrapped in robes that seemed to be woven from starlight itself.

"Kai of the Riverside Clan." The voice wasn't loud, but it resonated in Kai's bones. "We've been waiting seventeen years for you to awaken."

Kai stumbled as they dismounted. "I don't understand. I'm nobody. I just learned to make light this morning."

The figure's hood fell back, revealing a woman with eyes like galaxies. "You are far from nobody, child. You are the Seventh Luminary. The Last Light. The one the ancient prophecy spoke of when the realms were young."

"That's impossible," Kai breathed.

"Is it?" The woman—Kai realized this must be the Archon, leader of the Order—stepped closer. "Tell me, when your light first appeared, what color was it?"

Kai hesitated. "Silver. Like moonlight."

The Archon's expression shifted to something between hope and fear. "Not gold like your sister. Not white like your cousin. Silver. The color of the primordial light, the first light that existed before the sun and stars. The light that can touch both the living world and the realm of shadows."

Around the courtyard, other figures emerged from the towers. Six of them, each radiating power that made Kai's weak flicker seem like a candle next to bonfires.

"The Six Luminaries," Maya whispered with reverence. "I can't believe it. They're all here."

"We are all here," the Archon corrected, "because the Shadow Veil is not a natural disaster. It is the return of the Umbral King, the ancient darkness that the first Luminaries barely managed to seal away three thousand years ago. And according to the prophecy, only the Seventh Luminary can truly destroy him."

Kai felt the weight of every eye upon them. "But I can barely light my hands. How am I supposed to fight a king of darkness?"

One of the Luminaries stepped forward—a young man with flame-red hair and eyes that glowed like embers. "That's what we're here to teach you, rookie. Welcome to the hardest training of your life."

"Soren," the Archon said warningly.

The fire Luminary grinned. "What? It's true. The kid's got three days to learn what took us decades. No pressure though."

"Three days?" Kai's voice cracked. "Until what?"

The Archon's expression was grave. "Until the Shadow Veil reaches the Citadel. Until the Umbral King's forces are strong enough to breach our wards. Until the final battle begins."

She placed a hand on Kai's shoulder, and suddenly Kai felt it—the connection, like invisible threads linking them to each of the Luminaries, and through them, to something vast and ancient and powerful.

"You are not alone, Kai. You never were. The light has always been inside you, waiting. Now, it's time to let it out."

As if responding to her words, Kai's hands began to glow again. Silver light, brighter than before, flowing up their arms like liquid starlight.

And for the first time since this nightmare began, Kai felt something other than fear.

They felt ready.`
    },
    {
      number: 3,
      title: "Trials of Light",
      content: `# Chapter 3: Trials of Light

Dawn came too quickly. Kai had barely slept, their mind spinning with everything they'd learned. The prophecy. The Umbral King. Their supposed destiny to save the Seven Realms.

No pressure.

"Up, Seventh!" Soren's voice boomed through their chamber. "Training begins in ten minutes. Don't be late."

The training grounds were a circular arena at the heart of the Citadel, its floor marked with intricate patterns that seemed to shift and flow like living things. The six Luminaries waited, each representing a different aspect of light.

Soren—the Fire Luminary—flames and raw power.
Lyra—the Prism Luminary—manipulation and refraction.
Thane—the Dawn Luminary—healing and renewal.
Nova—the Starlight Luminary—cosmic force and gravity.
Shade—the Eclipse Luminary—the boundary between light and dark.
And Zara—the Aurora Luminary—emotion and energy made visible.

"The fundamentals first," the Archon announced. "Kai, show us your light."

Easier said than done. When Kai tried to summon the glow, nothing happened. They concentrated harder, remembering the warmth from yesterday, but their hands remained frustratingly normal.

"You're forcing it," Shade said quietly. Unlike the others, she seemed to exist in a state of permanent twilight, her form flickering between solid and shadow. "Light isn't about strength. It's about truth."

"I don't understand."

"You're trying to prove something. To us, to yourself. Stop trying. Just be."

Kai closed their eyes, letting out a breath they didn't know they'd been holding. They thought about yesterday morning, alone in their cottage, before everything changed. That moment of quiet acceptance, of just existing.

The warmth returned, gentle as a heartbeat.

When they opened their eyes, silver light poured from their hands, brighter and steadier than ever before.

"Good," the Archon said. "Now maintain it while you move."

The training was brutal. They ran laps around the arena, light blazing from their palms. Practiced forming shapes—spheres, shields, blades of pure radiance. Learned to sense the light in everything around them, the subtle glow that existed in all living things.

By midday, Kai was exhausted, drenched in sweat, their power flickering like a dying candle.

"Break," Thane called, moving to place healing hands on Kai's shoulders. Warmth flooded through them, easing the ache in their muscles. "You're doing well. Better than any of us expected."

"Doesn't feel like it," Kai gasped.

Nova laughed, her voice like distant chimes. "You've had your power for one day, and you're already keeping up with Luminaries who've trained for decades. I'd say that's pretty impressive."

"The prophecy chose well," Lyra added, her rainbow eyes twinkling. "You have the gift, Kai. You just need to trust it."

The afternoon brought combat training. Soren attacked with bolts of fire that Kai had to deflect or dodge. Lyra sent blinding beams that required splitting and redirecting. Each Luminary tested them in different ways, pushing them to their limits and beyond.

Kai failed. A lot. Got knocked down, blasted back, overwhelmed by power and skill they couldn't hope to match.

But each time, they got back up. Each time, their light burned a little brighter.

As the sun set on their first day of training, Kai stood in the center of the arena, surrounded by six pillars of elemental light, and for the first time, they didn't feel like a mistake.

They felt like a Luminary.

"Tomorrow," the Archon said, "we teach you to fight as one. Together, the Seven are greater than any force in the realms. Together, you might just stand a chance against the darkness."

Kai looked at their hands, still glowing silver in the twilight, and nodded.

"Let's do this."`
    },
    {
      number: 4,
      title: "The Umbral King",
      content: `# Chapter 4: The Umbral King

*Day two of training. The Shadow Veil draws closer...*

*[Continue the story here - perhaps introduce the villain, show Kai's growing powers, build the team dynamics]*`
    },
    {
      number: 5,
      title: "Bonds of Starlight",
      content: `# Chapter 5: Bonds of Starlight

*[Kai learns to connect with the other Luminaries, discovers the true nature of their power]*`
    },
    {
      number: 6,
      title: "Into the Veil",
      content: `# Chapter 6: Into the Veil

*[The first mission - entering the Shadow Veil to rescue survivors]*`
    },
    {
      number: 7,
      title: "Secrets of the Past",
      content: `# Chapter 7: Secrets of the Past

*[Revelations about Kai's family, the original Luminaries, and why the Seventh matters]*`
    },
    {
      number: 8,
      title: "The Breaking Point",
      content: `# Chapter 8: The Breaking Point

*[A devastating loss, Kai doubts everything, the Veil reaches the Citadel]*`
    },
    {
      number: 9,
      title: "Light in the Darkness",
      content: `# Chapter 9: Light in the Darkness

*[Kai finds their true power, learns what it means to be the Last Light]*`
    },
    {
      number: 10,
      title: "The Final Stand",
      content: `# Chapter 10: The Final Stand

*[The battle begins, all seven Luminaries united against the Umbral King's forces]*`
    },
    {
      number: 11,
      title: "Silver and Shadow",
      content: `# Chapter 11: Silver and Shadow

*[Kai confronts the Umbral King, discovers the shocking connection between them]*`
    },
    {
      number: 12,
      title: "The Last Light",
      content: `# Chapter 12: The Last Light

*[Epic conclusion - Kai makes the ultimate choice, the future of the Seven Realms hangs in the balance]*

*[End of Volume 1 - but the story continues...]*`
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
