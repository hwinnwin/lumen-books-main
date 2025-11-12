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

Kai woke to screaming.

They bolted upright, silver light already blazing from their palms—a reflex that would have seemed impossible two days ago. Outside their window, the night sky pulsed with unnatural darkness, the Shadow Veil pressing against the Citadel's wards like a living thing trying to break in.

"Kai!" Shade burst through the door, her twilight form flickering with urgency. "The Archon needs everyone in the war room. Now."

The war room was chaos. Maps spread across a massive circular table, showing the Shadow Veil's advancement in sickening detail. Half the Seven Realms were already gone, consumed by darkness.

"He's making his move," the Archon said as the Luminaries gathered. "The Umbral King himself has emerged from the Veil."

A projection shimmered to life above the table—a figure wreathed in shadow so absolute it seemed to devour the light around it. But it was his eyes that made Kai's blood run cold. Silver eyes. Just like theirs.

"That's impossible," Kai breathed.

"Is it?" The Archon's expression was grim. "The Umbral King wasn't always a creature of darkness. Three thousand years ago, he was the First Luminary. The most powerful lightbringer ever born. Until he learned the terrible truth."

"What truth?" Soren demanded.

"That light and darkness are not opposites. They are two sides of the same coin. And in trying to master both, he was consumed by shadow. The First Luminary became the Umbral King, and his power grew beyond anything we could imagine."

Kai stared at the projection, at those silver eyes. "And I'm supposed to stop him?"

"You're the only one who can," Nova said softly. "The Seventh Luminary is the reincarnation of the First's unfallen soul. You have his power without his corruption. You're what he could have been."

The projection spoke, and though it was just a recording, Kai felt the words in their bones:

"I know you've awakened, little Seventh. I can feel you, a distant echo of what I once was. Come to me. Face me. Or watch as I devour every speck of light in existence, starting with everyone you love."

As if to punctuate the threat, an explosion rocked the Citadel. Alarms blared.

"The wards are failing," Thane reported, his healing light already flickering to life. "We have hours, maybe less."

"Then we fight," Kai said, surprised by the steadiness in their voice. "What's the plan?"

The Archon looked at each Luminary in turn, her ancient eyes sad but determined. "We prepare for war."

Training that day was different. Deadly serious. The six Luminaries teaching Kai not tricks or techniques, but how to survive. How to fight as one. How to channel the connection between them into something greater than any individual power.

And slowly, impossibly, Kai began to understand.

The silver light wasn't just their power. It was the power to connect, to unite, to see the threads that bound all light together. When they touched that power, truly touched it, they could feel the other Luminaries like extensions of themselves. Could channel Soren's fire and Nova's starlight and Shade's twilight all at once.

"That's it!" Lyra shouted as Kai unleashed a blast that combined all seven aspects of light. "That's what makes you the Seventh! You're not just another Luminary—you're the key that makes us whole!"

As night fell and the Shadow Veil pressed harder against the wards, Kai stood on the highest tower of the Citadel, looking out at the wall of darkness.

Somewhere in that void, the Umbral King waited.

And Kai realized they weren't afraid anymore.

"I'm ready," they whispered to the wind. "Let's finish this."`
    },
    {
      number: 5,
      title: "Bonds of Starlight",
      content: `# Chapter 5: Bonds of Starlight

"You're thinking too much," Zara said, her aurora-colored hair shimmering as she circled Kai in the training arena. "The bond between Luminaries isn't intellectual. It's emotional. You have to feel us, not think about us."

They'd been at this for hours—trying to form the unified connection that would let them fight as one. Kai could touch the power briefly, but couldn't hold it.

"I don't know how," Kai admitted, frustration bleeding through their voice.

"Then let us show you." Lyra stepped forward, offering her hand. "Trust us. Open yourself to the bond."

One by one, the other Luminaries joined hands, forming a circle with Kai at the center. Their power flowed together, a river of light in every color imaginable.

"Close your eyes," the Archon instructed. "Feel the connection. Each Luminary represents an aspect of light, but also an aspect of the soul. To truly unite with them, you must know them. Understand them."

The world fell away. Kai felt themselves pulled into... memories? No. Essences.

Soren's fierce determination, born from watching his village burn and vowing never to feel helpless again. His fire wasn't just power—it was the refusal to surrender.

Lyra's playful wisdom, her ability to see problems from every angle, to bend and refract reality itself. Her light was adaptability, hope in the face of impossible odds.

Thane's gentle strength, forged through years of healing the wounded, bearing their pain as his own. His dawn light was renewal, the promise that no matter how dark the night, morning would come.

Nova's cosmic perspective, understanding that they were all just tiny sparks in an infinite universe—and that made each spark infinitely precious. Her starlight was wonder, the ability to see beauty even in darkness.

Shade's quiet courage, living between light and shadow, accepted by neither, belonging to both. Her eclipse was balance, the understanding that you couldn't appreciate light without knowing darkness.

And Zara's passionate heart, feeling everything intensely, turning emotion into pure energy. Her aurora was connection itself, the visible manifestation of bonds between souls.

"Now you see," the Archon's voice echoed through the vision. "You are not seven warriors fighting separately. You are seven facets of the same light. And you, Kai, are the prism through which that light shines brightest."

Kai opened their eyes. The world had changed. They could see it now—the threads of light connecting everything and everyone. The Luminaries weren't just standing in a circle; they were part of a constellation, a perfect pattern of power.

And Kai was the center, the point through which all lines converged.

"I understand," they whispered.

Silver light erupted from them, not chaotic or wild, but controlled. Purposeful. It flowed to each Luminary, and their power flowed back, amplified, perfected. Fire and starlight and aurora and dawn and eclipse and prism, all united in silver.

When the light faded, the six Luminaries were staring at Kai with something like awe.

"That," Soren said, his usual cocky grin replaced with genuine respect, "was incredible."

"That's what it feels like when the Seven are truly one," the Archon said. "That is the power that can stand against the Umbral King. But Kai—" her expression grew serious, "—this bond goes both ways. You'll feel their pain as your own. If one of them falls, you'll bear that weight. Are you ready for that?"

Kai looked at each Luminary in turn. In just three days, they'd become more than allies. They'd become... family.

"Yes," Kai said. "Whatever comes, we face it together."

Outside, the wards shattered with a sound like breaking glass.

The war had begun.`
    },
    {
      number: 6,
      title: "Into the Veil",
      content: `# Chapter 6: Into the Veil

The Shadow Veil swallowed them whole.

One moment, the Seven Luminaries stood at the breach in the Citadel's wards, light blazing from their joined hands. The next, they stepped forward into absolute darkness—and the world disappeared.

"Stay connected!" Kai shouted, though they couldn't see their own hands, couldn't see anything. The silver thread linking them to the other Luminaries was the only thing that felt real.

"I've got your six, rookie," Soren's voice came through the bond, though Kai couldn't tell if he was whispering or shouting. Sound worked differently here, in this place between light and dark.

They were heading for a village—one of the last settlements that had been consumed by the Veil. Scouts reported survivors, people who'd somehow endured three days in absolute darkness without losing their minds or their lives. If the Seven could reach them, prove that the Veil could be penetrated and people could be saved, it would give hope to everyone else.

If they failed... well, failure wasn't an option.

Kai pushed power through the bond, and silver light bloomed around them, driving back the darkness. But it was like trying to illuminate the ocean. The shadows pressed in from all sides, hungry, alive.

"There!" Nova called out, her cosmic senses picking up life signs. "Two hundred meters ahead!"

They ran through the darkness, their combined light a moving beacon. Shadow creatures emerged from the Veil—things with too many limbs and no faces, made of pure darkness. The Luminaries fought as one, Kai channeling their power through the silver threads, amplifying each attack until the shadow beasts dissolved like smoke.

Then they saw it—a pocket of dim light, barely hanging on. The survivors had formed a circle, maybe thirty people, their combined fear and desperation creating just enough light to keep the Veil at bay. Barely.

"We've got you!" Thane called out, his dawn light washing over them like a wave of relief. The survivors looked up, faces gaunt with exhaustion and terror, and something like hope flickered in their eyes.

"Can you walk?" Lyra asked gently.

"We can run," an old woman said, her voice hoarse but determined. "Just get us out of this nightmare."

The journey back was harder. Protecting themselves was one thing; protecting thirty terrified civilians while shadow creatures attacked from all sides was another. Kai felt the strain through the bond—Soren's fire burning too hot, too fast; Nova's starlight flickering; even Shade, who should have felt at home in the darkness, struggling against the wrongness of this artificial shadow.

"Almost there," Kai gritted out, pushing more power through the connection, drawing from reserves they didn't know they had.

A shadow beast, larger than any they'd faced before, erupted from the ground ahead of them. Its roar was silence made into sound, and it lunged—

Straight for the civilians.

Kai didn't think. They threw themselves forward, silver light exploding in a protective dome around the survivors. The beast's claws raked across the barrier, and pain lanced through Kai's entire body.

"Kai!" multiple voices screamed through the bond.

"I've got this," Kai gasped, even though they absolutely did not have this. The beast was too strong, too massive, and the barrier was cracking—

Then the other six were there, adding their power to Kai's, the seven lights merging into something that made even the massive shadow beast recoil. Together, they unleashed a combined blast that didn't just destroy the creature—it tore a hole in the Veil itself.

Sunlight. Real, beautiful, impossible sunlight, streaming through the gap.

"Go, go, go!" Soren shouted, and the survivors ran, stumbling toward that precious light. The Luminaries followed, Kai barely staying on their feet as they tumbled through the breach and back into the real world.

The Citadel's defenders cheered as they emerged. Thirty lives saved. Proof that the Shadow Veil could be beaten.

But as Kai collapsed to their knees, exhausted beyond measure, they knew the truth.

That was just one village. There were thousands more in the Veil. Hundreds of thousands of people.

And they had maybe a day before the Umbral King's real army arrived.

"We can't save them all," Kai whispered to no one in particular.

Shade knelt beside them, her twilight eyes sad but unwavering. "No. But we can save some. And we can make the Umbral King pay for the ones we can't."

Kai looked up at the Shadow Veil, at the wall of darkness that had swallowed half the world.

"Yeah," they said, silver light kindling in their palms. "We can."`
    },
    {
      number: 7,
      title: "Secrets of the Past",
      content: `# Chapter 7: Secrets of the Past

Kai found their grandmother in the Citadel's Hall of Memory, a chamber lined with crystals that stored the recollections of every Luminary who'd ever lived.

"I knew you'd come looking for answers," she said without turning around. "You always were too curious for your own good."

"You knew," Kai said, anger threading through their voice. "You knew what I was. Why didn't you tell me?"

Their grandmother finally turned, and for the first time, Kai saw how old she looked. How tired. "Would you have believed me? A seventeen-year-old who couldn't light a candle being told they were destined to save the world?"

"I had a right to know!"

"You had a right to be a child," she snapped back. "For seventeen years, I watched you grow up happy. Unafraid. Unburdened by prophecy and destiny and the weight of dead worlds. I gave you that. I'd do it again."

The fight drained out of Kai. They slumped against one of the memory crystals. "Tell me about the First Luminary. About who I was."

"Who you were," their grandmother corrected gently, sitting beside them, "not who you are. The First Luminary—his name was Kaius, actually. That's where your name comes from."

Kai felt a chill. "Go on."

"Kaius was the most powerful lightbringer ever born. He could do things with luminescence that seemed like pure magic. He united the Seven Realms under the banner of the Luminous Order, brought peace that lasted centuries. But he was obsessed with understanding the nature of light itself. And that obsession led him into darkness."

She touched the crystal, and it lit up, showing a vision—a young man who looked eerily similar to Kai, silver light blazing from his hands. The vision shifted, showing Kaius studying shadow magic, experimenting with the boundaries between light and dark.

"He believed that true mastery required understanding both sides. And he was right—to a point. But the darkness is insidious. It doesn't just oppose light; it consumes it. Slowly, Kaius changed. His experiments grew more extreme. His followers grew concerned. And when they tried to stop him..."

The vision showed war. Kaius, transformed into something terrible, battling against six other Luminaries. The same six aspects that Kai's companions represented now.

"They couldn't kill him," Kai whispered.

"No. The First Luminary's power was too great. So they sealed him instead, using their combined strength to trap him in the Shadow Realm. But seals don't last forever. And now, three thousand years later, he's broken free."

"And I'm his... what? Reincarnation?"

"In a way. When Kaius fell to darkness, a piece of his soul—the part that still believed in light, that still wanted to help people—broke away. That fragment has been reborn again and again through the centuries, waiting for the moment when Kaius would return. You are that fragment, Kai. You're everything good he could have been, given form."

Kai's hands were shaking. "So I'm not even a real person. I'm just a piece of a villain's soul."

Their grandmother gripped Kai's shoulders, forcing them to meet her eyes. "You listen to me. You are the realest, most wonderful person I know. You have Kaius's power, yes. His potential. But you also have seventeen years of memories that are entirely your own. Seventeen years of choosing kindness over cruelty, connection over isolation, light over darkness. That's not destiny. That's you."

"But what if I'm not strong enough? What if the darkness gets me too?"

"Then you'll have something Kaius never had." She gestured toward the door, where the other six Luminaries stood waiting, having clearly been eavesdropping. "A family who won't let you fall."

Soren stepped forward first. "We've got your back, Seventh. Always."

"Through light and shadow," Lyra added, the traditional Luminary oath.

One by one, the others echoed it, until all six stood around Kai, their hands extended.

"You're not alone," Nova said softly. "You never have to be alone again."

Kai looked at their faces—these people who'd become family in the span of days. Then at their grandmother, who'd loved them enough to let them be normal for as long as possible.

"Okay," Kai said, taking their hands, feeling the bond snap into place stronger than ever. "Then let's make sure Kaius's story ends differently this time."

The memory crystal pulsed with light, and Kai could have sworn they heard a voice—ancient, sad, hopeful—whisper:

"Thank you."`
    },
    {
      number: 8,
      title: "The Breaking Point",
      content: `# Chapter 8: The Breaking Point

The attack came at dawn.

Not the slow, creeping advance of the Shadow Veil, but a deliberate assault. The Umbral King's army emerged from the darkness—thousands of shadow creatures, led by figures that had once been human. Lightbringers who'd been consumed by the Veil and twisted into something monstrous.

"Defensive positions!" the Archon commanded, her voice cutting through the chaos. "Luminaries, with me!"

The Seven took their place at the front lines, power blazing. For hours, they fought, an endless tide of darkness crashing against their light. Kai channeled power through the bond until their entire body felt like it was on fire, holding the connection between the Luminaries even as exhaustion threatened to drag them under.

They were winning. Barely, but winning.

Then Maya appeared.

Kai's sister stepped out of the Shadow Veil, and Kai's heart stopped. Her eyes were black as night, shadows coiling around her like living things, but her face—her face was still Maya's.

"Sister," she said, her voice wrong, layered with echoes. "The King wants to speak with you."

"Maya, no," Kai breathed. "Fight it. You're stronger than this."

"I am stronger. Stronger than I ever was with light alone. He showed me the truth, Kai. Join us. Join me. Together we could—"

"We're not doing this," Soren growled, fire blazing to life in his hands.

Maya moved faster than should have been possible. Shadow tendrils lashed out, and Soren's fire guttered and died, swallowed by absolute darkness. Before anyone could react, Maya was in front of Thane, shadow-blade raised—

Kai screamed, silver light exploding outward. But they were too slow, too far away, too—

Shade threw herself between Maya and Thane. The shadow-blade pierced her chest, and Kai felt it through the bond like a knife to their own heart. Shade gasped, her twilight form flickering, fading.

"No!" Kai ran to her, catching her as she fell. "No, no, no, Thane, heal her!"

But Thane was staring at his hands, at his dawn light that had always healed any wound, and it was guttering, failing. "I can't. The shadow's too deep. It's—" His voice broke. "I'm sorry."

Shade looked up at Kai, her eclipse eyes already dimming. "Not your fault," she whispered. "Protect them. All of them. Promise me."

"I promise," Kai sobbed. "I promise, just stay, please—"

Her hand came up to touch Kai's face, one last gesture of comfort.

Then she was gone. The bond snapped, and Kai felt a part of their soul tear away with it.

Maya stared at what she'd done, something like horror flickering across her shadowed face. Then the darkness pulled her back, and she vanished into the Veil.

The battle was over. The shadow army retreated, their message delivered. The Citadel still stood.

But Shade was dead.

The other Luminaries gathered around her body, each of them feeling the same terrible absence where her presence used to be in the bond. Zara was crying silently, aurora light flickering and unstable. Nova's starlight had gone cold and distant. Soren's fists were clenched so tight his knuckles were white. Lyra and Thane just looked broken.

"This is my fault," Kai said, voice hollow. "She died protecting us because I wasn't fast enough. Because I hesitated."

"Kai—" Lyra started.

"No." Kai stood, backing away from them all. "I'm not the Seventh Luminary. I'm just a kid who's in way over their head. Shade believed in me, and now she's dead. How many more of you have to die before you realize I'm not what the prophecy promised?"

"That's the grief talking," Soren said, but his voice lacked its usual fire.

"Is it? Or is it the truth?" Kai looked at each of them, at these people who'd become family, and felt only the crushing weight of failure. "I can't do this. I can't watch all of you die for me."

They ran. Kai didn't know where they were going, just knew they had to get away from the Citadel, from the bond, from the expectations and the prophecy and the terrible knowledge that their sister was gone and their friend was dead and it was all falling apart.

They ended up at the edge of the Shadow Veil, staring into the darkness.

"Come to finish what your sister started?" a voice asked.

Kai turned. The Umbral King stood there, no longer a distant threat but real and present. Those silver eyes—so like Kai's own—regarded them with something almost like pity.

"I can feel your pain," he said. "The bond you share with the other Luminaries, it's beautiful. But it's also your weakness. Every loss they feel, you feel tenfold. How long before it destroys you?"

"Why are you doing this?" Kai demanded.

"Because light without shadow is blindness," he replied. "I learned that lesson three thousand years ago. I tried to bring balance to the realms, and they called me a monster. Sealed me away. Left me to suffer in darkness for millennia." He stepped closer. "You and I, we're the same. The same power. The same potential. Join me, and I'll show you how to end this war without more death."

"By surrendering to darkness?"

"By embracing what you truly are. Not light, not shadow, but both. The bridge between worlds." He offered his hand. "Your sister understood. She's happy now, freed from the burden of always choosing light. Let me free you too."

For one terrible moment, Kai wanted to take that hand. Wanted to let go of the pain, the responsibility, the crushing weight of being the Seventh Luminary.

Then they thought of Shade's last words. *Protect them.*

"No," Kai said, silver light kindling despite their exhaustion. "Shade died believing in me. I won't betray that."

The Umbral King's expression hardened. "Then you'll die believing in a lie."

He vanished back into the Veil, and Kai collapsed to their knees, alone in the darkness.`
    },
    {
      number: 9,
      title: "Light in the Darkness",
      content: `# Chapter 9: Light in the Darkness

Kai sat in the darkness for hours. Maybe days. Time felt meaningless when you'd failed everyone who believed in you.

"You know," a voice said—not out loud, but in their head, through the bond they'd been trying so hard to shut out, "for someone who's supposed to unite us, you're really bad at not running away."

"Leave me alone, Soren," Kai muttered.

"Can't. Bond, remember? Where you go, we feel. And right now, you feel like you're giving up."

"Shade's dead because of me."

"Shade's dead because she chose to protect someone she loved. Don't you dare diminish that sacrifice by wallowing in guilt."

Other voices joined through the bond. Nova's cosmic calm: "We all knew the risks. We chose this fight anyway."

Lyra's gentle wisdom: "Grief is natural. But it's not the same as fault."

Thane's steady presence: "I couldn't save her. If anyone failed, it was me."

"No one failed," Zara cut in, her aurora emotions blazing through the connection. "The Umbral King took her from us. That's on him, not you."

"But I hesitated," Kai said. "When I saw Maya—"

"Of course you hesitated. She's your sister." This from the Archon herself, her ancient voice flowing through the bond. "Love isn't weakness, Kai. It's the strongest force in any realm. Shade knew that. It's why she gave her life."

Kai felt tears streaming down their face. "I don't know how to beat him. I'm not strong enough."

"You're right," a new voice said—soft, twilight-tinged, achingly familiar. "You're not strong enough. Not alone."

"Shade?" Kai gasped.

Her presence in the bond was faint, like starlight at dawn, but unmistakable. "I'm not really here. Just an echo, a memory held in the connections we forged. But that's enough to tell you what you need to hear."

"I miss you," Kai sobbed.

"I know. And that's okay. Missing people means they mattered. But you can't stop fighting because you're afraid to lose anyone else. The Umbral King wants you isolated, wants you to cut the bonds that make you strong. Don't give him that victory."

"How do I beat him?"

"By being what he never could be. He tried to master both light and shadow, to control them. But that's not your power, Kai. Your power is connection. Unity. You don't fight the darkness alone—you carry the light of everyone who believes in you. Everyone who loves you. Even the ones who are gone."

Kai felt something shift inside them, like a door opening. The bond, which they'd been trying to shut out, suddenly flooded them with warmth. Not just the five remaining Luminaries, but everyone at the Citadel. Every person they'd saved from the Veil. Their grandmother, their family, their entire village.

And beyond that—fainter but still there—the light of every person in the Seven Realms who still had hope. Millions of tiny flames, fighting to stay lit against the darkness.

"That's what the Seventh Luminary is," Shade's echo whispered. "Not the strongest warrior. The strongest connection. You're the thread that holds all the light together. And as long as that thread doesn't break, the darkness can never truly win."

Kai stood, silver light blazing brighter than it ever had. Not just their own power, but the power of everyone they were fighting for.

"I understand now," they said.

Through the bond, they felt the five Luminaries respond, their power flowing to meet Kai's, amplified by the connection until it was something transcendent. Not seven separate lights, but one unified radiance.

"Come back to us," Soren said. "We've got a war to win."

Kai smiled, feeling Shade's presence fade but not vanish. She would always be part of the bond, part of them.

"On my way," they said.

When Kai returned to the Citadel, the other Luminaries were waiting. They looked different somehow—not physically, but in the bond. Stronger. More united. Like Shade's sacrifice had forged them into something unbreakable.

"Ready for round two?" Lyra asked.

Kai looked at each of them, feeling the bond pulse with shared determination. "Not round two. The final round. We end this. Tonight."

The Archon nodded grimly. "The Umbral King's army is massing at the Veil's edge. They'll attack at midnight. If we're going to make our stand, it has to be now."

"Then let's show him what the Seven Luminaries can really do," Kai said. "For Shade. For everyone we've lost. For everyone we're going to save."

Their silver light flared, and the others responded, six colors joining into a perfect spectrum of power.

The final battle was about to begin.`
    },
    {
      number: 10,
      title: "The Final Stand",
      content: `# Chapter 10: The Final Stand

Midnight came with a roar of darkness.

The Umbral King's army didn't creep or advance—it crashed against the Citadel like a tsunami of shadow. Creatures beyond counting, twisted lightbringers, and at the center of it all, the King himself, wreathed in darkness so absolute it hurt to look at.

"LUMINARIES!" the Archon's voice rang out across the battlefield. "Show them what light can do!"

The six remaining Luminaries stood in a circle, hands joined, with Kai at the center. The bond blazed between them, stronger than ever. Not seven anymore, but six—and Shade's echo, woven into the connections like a thread of twilight holding them together.

"Together," Kai said.

"Together," the others echoed.

Power erupted from the Citadel—a pillar of unified light that split the darkness like dawn breaking over the world. Soren's fire, Nova's starlight, Lyra's prismatic radiance, Thane's healing dawn, Zara's emotional aurora, and Kai's silver unity, all merged into something that had never existed before.

The Seventh Light. Complete. Perfect. Unbreakable.

The shadow army hit it and recoiled, creatures dissolving in the radiance. But there were so many. For every dozen they destroyed, a hundred more emerged from the Veil.

"We can't hold this forever!" Zara shouted, her aurora flickering with strain.

"We don't have to hold forever," Kai replied, feeling the shape of the battle through their expanded senses. "Just long enough."

Through the bond, they showed the others what they'd realized. The Shadow Veil wasn't just an army or a spell—it was the Umbral King's power made manifest. To destroy the Veil, they had to destroy its source.

"You want us to fight him directly," Soren said, grinning despite the impossible odds. "I love it."

"It's suicide," Lyra pointed out.

"Only if we lose," Nova countered, her starlight blazing brighter. "And I don't plan on losing."

"For Shade," Thane said quietly.

"For Shade," they all echoed.

The Luminaries broke their defensive circle and charged, a comet of pure light tearing through the shadow army. The Umbral King saw them coming and laughed, the sound like breaking bones.

"Brave," he called out. "But futile."

He raised his hands, and the darkness condensed, forming a barrier between them. But Kai reached through the bond, touching not just the Luminaries but everyone at the Citadel—every soldier, every refugee, every person who still had hope—and channeled their collective light forward.

The barrier shattered.

The Luminaries surrounded the Umbral King, six points of a blazing star with Kai as the center. Their combined power pressed in on him from all sides, light against shadow in a battle that shook the very foundations of reality.

For the first time since this war began, the Umbral King looked uncertain.

"You should have joined me," he snarled at Kai. "We could have reshaped the realms together."

"I don't want to reshape the realms," Kai shot back, silver light intensifying. "I want to save them. And that starts with saving you."

"Saving me?" The King's laugh was bitter. "I'm beyond saving, little Seventh. I chose darkness three thousand years ago."

"No," Kai said, and pushed harder through the bond, not with power but with understanding. "You were consumed by it. There's a difference. And somewhere in that shadow, the First Luminary still exists. The part of you that wanted to help people. That loved light. That's what I am—that's what I've always been. Your chance at redemption."

For just a moment, the shadows around the Umbral King flickered, and Kai saw silver eyes—truly silver, not shadowed—staring back at them with something like hope.

Then Maya stepped between them.

"Enough," Kai's sister said, shadows coiling around her. "The King has shown me the truth. Light is limitation. Darkness is freedom. And I won't let you take that away."

"Maya, please," Kai begged. "You're still in there. Fight it."

"I'm not fighting anything. For the first time in my life, I'm choosing." She raised her hand, shadow gathering into a blade. "And I choose to protect the King. Even from you, little sister."

The other Luminaries moved to defend Kai, but Maya was fast—impossibly fast. Her shadow-blade came down, aimed straight at Kai's heart.

And Kai didn't dodge.

Instead, they opened the bond. Not just to the Luminaries, but to Maya herself. Showed her every memory they shared. Every moment of sisterly love. Every time Maya had protected them, taught them, believed in them.

The blade stopped an inch from Kai's chest.

"I love you," Kai whispered. "And I know you love me too. That's stronger than any darkness. You taught me that."

Maya's hand trembled. The shadows around her flickered, fighting against something—against her will, against the love that was stronger than the Umbral King's corruption.

"I..." Maya's voice cracked. "I can't... the darkness is too strong..."

"Then let me help you carry it," Kai said, and grabbed their sister's hand.

Silver light flowed into Maya, and Kai felt the shadow fighting back, trying to consume them both. But they didn't fight it. They accepted it. Light and shadow, both parts of the whole. Just like Shade had shown them. Just like they were always meant to be.

The darkness didn't dissolve. It transformed.

Maya gasped as the corrupted shadow lifted, replaced by something new—twilight, like Shade's power. The balance between light and dark.

"You..." The Umbral King stared at them in shock. "You shouldn't be able to do that."

"I'm the Seventh Luminary," Kai said, feeling power unlike anything they'd ever imagined flowing through them. "I don't fight darkness. I show it how to be light again."

And they reached for the Umbral King himself.`
    },
    {
      number: 11,
      title: "Silver and Shadow",
      content: `# Chapter 11: Silver and Shadow

The Umbral King tried to pull away, but Kai held on. Not with physical strength—with the bond, extending it beyond the Luminaries, beyond even Maya, to the ancient darkness itself.

"Don't," the King snarled, shadows lashing out. "You don't know what you're doing. The darkness will consume you like it consumed me."

"Maybe," Kai said, silver light burning brighter. "Or maybe I'll show it how to be whole again."

They plunged into the Umbral King's mind—and gasped at what they found.

Not a monster. Not evil incarnate. Just... pain.

Three thousand years of isolation. Of being sealed in absolute darkness, alone with his regrets. Of watching the fragment of his soul—the piece that became Kai—live the lives he'd thrown away. Born and reborn, again and again, choosing light every time while he was trapped in shadow.

"You were so lonely," Kai whispered.

"Don't," the King said, but his voice had lost its power. "Don't pity me. I chose this path."

"You made a mistake," Kai corrected. "There's a difference. And you've been punishing yourself for three thousand years. Don't you think that's enough?"

They showed him what they'd learned. That light and shadow weren't enemies—they were partners. You couldn't have one without the other. Dawn needed dusk. Stars needed night. And the Seventh Luminary's power wasn't to destroy darkness, but to unite it with light.

"I can't be saved," the King said, but he sounded less certain. "I've done too much. Killed too many. The shadow has spread too far."

"Then help me fix it," Kai said. "You're the First Luminary. The strongest lightbringer ever born. That power didn't disappear when you fell to darkness—it's still there, buried under three thousand years of pain. Let it out."

"I don't remember how."

"Then I'll show you."

Kai opened themselves completely, sharing not just their own memories but the memories of every Luminary in the bond. Soren's fierce determination. Lyra's adaptive hope. Thane's healing compassion. Nova's cosmic perspective. Zara's passionate connections. And Shade's twilight balance, the understanding that darkness wasn't evil—it was just another part of existence.

The Umbral King's shadowy form flickered. Cracks appeared in the darkness, and through them, silver light—the same color as Kai's—began to shine.

"I..." The King's voice changed, becoming younger, more human. "I remember. I remember wanting to help people. To bring light to the dark places. When did that become about controlling both?"

"When you tried to do it alone," Kai said gently. "Power isn't meant to be mastered in isolation. It's meant to be shared."

They felt the exact moment when the Umbral King made his choice. Not to surrender, but to accept. To let go of three thousand years of anger and pain and loneliness, and remember what it felt like to be part of something greater than himself.

The transformation was like watching a sunrise.

Darkness peeled away from the King's form, not destroyed but transformed into twilight. His shadowy robes became silver light. His black eyes became the same color as Kai's. And when he finally stood before them, he looked exactly like what he was—what he'd always been meant to be.

The First Luminary. Kaius. Reborn.

"I..." he gasped, staring at his hands as silver light poured from them. "I'd forgotten what this felt like. To be light. To be whole."

"You were never not whole," Kai said. "Just lost. But now you're found."

Kaius looked at Kai with tears streaming down his face. "You gave me a second chance. Why?"

"Because that's what family does. And you're part of me, just like I'm part of you. We were always meant to find each other."

The Shadow Veil, deprived of its source, began to dissolve. Not with violence, but gently, like morning fog burning away. The shadow creatures faded. The twisted lightbringers—including those who'd been corrupted like Maya—felt the darkness lift, transforming into twilight as they returned to themselves.

Across the battlefield, people began to cheer.

But Kai felt something else through the bond. A warning from Shade's echo, urgent and afraid.

The darkness wasn't disappearing. It was condensing. Concentrating. All the shadow that had made up the Veil, all the corruption, all the pain—it was gathering into a single point.

Into Kai.

"No," Kaius gasped, realizing what was happening. "No, you can't—"

But Kai understood. To transform the Umbral King, they'd taken his darkness into themselves. And now they had to do something with it.

They could reject it, cast it out—but then it would just find another host, start this cycle all over again in a few thousand years.

Or they could accept it. Make it part of themselves. Become what Kaius had tried to be: the balance between light and shadow.

"Kai, don't!" Soren shouted through the bond. "It'll kill you!"

"Or it'll make me whole," Kai replied.

They stopped fighting the darkness. Stopped trying to transform it. Instead, they welcomed it. Accepted it. Made it part of themselves, just like they'd made the bond with the Luminaries part of themselves.

Pain. Overwhelming, absolute pain. The darkness tried to consume them, to twist them like it had twisted Kaius.

But Kai wasn't alone.

Through the bond, the other Luminaries poured their light into Kai. Soren's fire, burning away the corruption. Lyra's prism, refracting the darkness into spectrum of shadow that could coexist with light. Thane's dawn, promising renewal. Nova's starlight, showing that even the darkest space held distant suns. Zara's aurora, turning darkness into beauty. And Maya's new twilight, the living proof that shadow and light could unite.

And beneath it all, Shade's echo, whispering: "You've got this. I believe in you."

The darkness didn't consume Kai.

It transformed them.

When the light finally faded, Kai stood at the center of the battlefield, changed. Their silver light now had threads of shadow woven through it, not corrupted but balanced. They could feel it—the power to touch both light and darkness, to see the connections between all things, to be the bridge between worlds.

The true Seventh Luminary. Finally complete.

"Impossible," Kaius breathed. "You did what I never could."

"No," Kai said, their voice resonant with both light and shadow. "We did it. Together. That's what you forgot—that power isn't about one person controlling everything. It's about everyone supporting each other."

The Shadow Veil was gone. The war was over.

And a new age was about to begin.`
    },
    {
      number: 12,
      title: "The Last Light",
      content: `# Chapter 12: The Last Light

Three weeks after the war ended, Kai stood in the Hall of Memory, staring at a new crystal that had just been added to the wall.

Shade's crystal. Her memories, her essence, preserved for future Luminaries to learn from.

"She would have loved this," Maya said, stepping up beside them. Her new twilight powers flickered gently, shadows and light in perfect balance. "Being immortalized. Finally getting the recognition she deserved."

"She would have made a joke about it," Kai countered, smiling despite the ache in their chest. "Something about how she always knew she'd shine brighter after death."

Maya laughed softly. "Yeah. She would have."

They stood in comfortable silence for a moment, two sisters who'd almost lost each other, grateful for the chance to be family again.

"I'm sorry," Maya said quietly. "For what I did under the Veil's influence. For almost—"

"You saved us," Kai interrupted. "In the end, you fought through the darkness and chose light. That's what matters."

"We both chose something better," Maya corrected. "Not just light. Not just shadow. But balance. Like Shade tried to teach us all along."

In the three weeks since the battle, the Seven Realms had begun to heal. The lands consumed by the Shadow Veil were recovering, life returning to places that had been dead. The people who'd been twisted by darkness were finding their way back to themselves, many of them—like Maya—discovering new twilight powers that combined light and shadow.

A new generation of Luminaries was emerging. Not just lightbringers, but shadow-walkers, twilight-keepers, balance-seekers. All of them part of the bond that Kai maintained, the web of connection that stretched across the realms.

"The Archon wants to see you," Maya said. "Something about the rebuilt Citadel and your role going forward."

Kai sighed. "I was afraid of that."

They found the Archon in the reconstructed council chamber, along with the five remaining Luminaries and—surprisingly—Kaius.

The First Luminary had stayed at the Citadel after his transformation, helping to rebuild what he'd destroyed, trying to atone for three thousand years of darkness. He and Kai had spent hours talking, sharing memories, learning what it meant to be two halves of the same soul living in different bodies.

It was weird. But also kind of wonderful.

"Kai," the Archon said, gesturing to an empty chair at the head of the table. "Please, sit."

"Why do I feel like I'm about to get voluntold to do something I don't want to do?" Kai asked, but they sat anyway.

Soren grinned. "Because you are. Tradition."

"The Citadel has been rebuilt," the Archon began. "The Luminary Order is reforming, stronger than ever. We have new recruits, new powers, new understanding of what it means to balance light and shadow. And all of it—all of it—exists because of you."

"Not just me," Kai protested. "All of us. The bond—"

"The bond exists because you created it," Lyra said gently. "You're the center, Kai. The thread that holds everything together. We've always known that. Now everyone else does too."

"Which is why," the Archon continued, "we're asking you to lead the new Order. To be the First of the new Seven. Or should I say, the Seventh who becomes the First."

Kai blinked. "You want me to be... what, the new Archon? I'm seventeen!"

"I was sixteen when I took this role," the Archon said with a slight smile. "Age is irrelevant when you've already saved the world."

"I can't do this alone," Kai said, feeling panic rising.

"You won't have to," Thane said, his dawn light warm and reassuring. "We'll be here. All of us. Just like we've always been."

"Through light and shadow," Nova added.

"Together," Zara finished.

Kai looked around the table at these people who'd become family. Soren with his fierce loyalty. Lyra with her endless hope. Thane with his compassionate strength. Nova with her cosmic wisdom. Zara with her passionate heart. Maya with her newfound balance. And Kaius, the ancient past and future redemption all at once.

And through the bond, beyond this room, Kai felt thousands of others. Every Luminary, every twilight-keeper, every person in the Seven Realms who'd found hope in the darkness because Kai had shown them it was possible.

Shade's echo pulsed through the connection, faint but clear: "You've got this."

"Okay," Kai said, silver and shadow light kindling around them. "But we're doing this together. No more lone heroes trying to save the world. No more isolation. The new Luminary Order is built on connection, on unity, on the understanding that we're stronger together than apart."

"Agreed," the Archon said, and there was something like relief in her ancient eyes. Like she'd been waiting three thousand years to hear someone say those words.

One by one, the Luminaries stood, placing their hands on the table. Light bloomed from each of them—fire and prism and dawn and starlight and aurora and twilight and redemptive silver. The bond flared, connecting them all in a pattern of power that lit up the entire Citadel.

"Then let this be the founding principle of the new Order," the Archon proclaimed. "That light and shadow, together, create something greater than either alone. That connection is strength. That love is power. And that no one, ever again, has to face the darkness alone."

"Sounds good to me," Kai said, grinning despite the massive responsibility they'd just accepted. "When do we start?"

"How about now?" Soren suggested. "I hear there's a whole realm to the east that could use some Luminaries to help with the rebuilding."

"And rumors of a shadow-cult in the southern mountains," Lyra added. "Someone needs to show them that darkness doesn't have to mean corruption."

"I guess saving the world is a never-ending job," Kai said.

"The best jobs are," Nova replied, her starlight twinkling with amusement.

Kai stood, feeling the weight of leadership settling on their shoulders—but also the strength of the bond, the support of family, the knowledge that they would never have to carry this burden alone.

"Alright then," they said. "Luminaries, let's get to work."

---

That night, after the meetings and planning and coordination, Kai found themselves back in the Hall of Memory, standing before Shade's crystal one more time.

"We did it," they whispered. "We saved the realms. Created something new. Something better. I hope... I hope you're proud."

The crystal pulsed with soft twilight, and for just a moment, Kai could have sworn they saw her—Shade, whole and smiling, her eclipse eyes bright with joy.

Then the vision faded, leaving only the crystal and Kai's reflection in its surface.

But that was enough.

Because Kai wasn't alone. Through the bond, they could feel everyone—the Luminaries, the twilight-keepers, the millions of people across the Seven Realms who carried light in their hearts. All of them connected, all of them part of something greater.

The Seventh Luminary. The Last Light. The bridge between worlds.

And the beginning of a new age.

Outside the window, dawn was breaking over the Luminous Citadel, painting the sky in shades of silver and gold. Kai watched the sunrise and smiled, feeling shadow and light dancing in perfect balance within them.

The war was over. But the real adventure—the work of healing and building and uniting the realms—was just beginning.

And Kai couldn't wait to see what came next.

*End of Volume 1*

*The story continues in Luminous Legends: Volume 2 - The Twilight Realms...*`
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
