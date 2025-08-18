"use client";

import { Flashcard } from "@/components/flashcards/flashcard";
import { useFlashcards } from "@/hooks/use-flashcards";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FlashcardsPage() {
  const t = useTranslations("flashcards");
  const { 
    currentCardIndex, 
    currentCard, 
    isFlipped, 
    flipCard, 
    nextCard, 
    prevCard 
  } = useFlashcards();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t("buttons.back_to_home")}
            </Button>
          </Link>
        </div>
      </header>

      <main className="container py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{t("title")}</h1>
          <p className="text-muted-foreground">
            {t("card_of", { 
              current: currentCardIndex + 1, 
              total: 50 
            })}
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Flashcard 
            question={currentCard.question}
            answer={currentCard.answer}
            isFlipped={isFlipped}
            onFlip={flipCard}
          />
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Button 
            onClick={prevCard} 
            disabled={currentCardIndex === 0}
            variant="outline"
          >
            {t("previous_card")}
          </Button>
          <Button 
            onClick={nextCard} 
            disabled={currentCardIndex === 49}
          >
            {t("next_card")}
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>{t("controls.instructions")}</p>
          <p>{t("controls.flip")}</p>
          <p>{t("controls.previous")}</p>
          <p>{t("controls.next")}</p>
        </div>
      </main>
    </div>
  );
}
