"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

interface FlashcardProps {
  question: string;
  answer: string;
  isFlipped: boolean;
  onFlip: () => void;
}

export function Flashcard({ question, answer, isFlipped, onFlip }: FlashcardProps) {
  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        onFlip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onFlip]);

  return (
    <div 
      className="flashcard-container w-full max-w-md h-64 cursor-pointer"
      onClick={onFlip}
      role="button"
      tabIndex={0}
      aria-label="Flashcard"
    >
      <motion.div
        className="flashcard w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Card 
          className="flashcard-front absolute w-full h-full flex flex-col justify-center items-center p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-xl font-semibold text-center mb-4">{question}</h3>
          <p className="text-sm text-muted-foreground">Click or press Space to flip</p>
        </Card>
        
        <Card 
          className="flashcard-back absolute w-full h-full flex flex-col justify-center items-center p-6"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <h3 className="text-xl font-semibold text-center mb-4 text-primary-foreground">{answer}</h3>
          <p className="text-sm text-primary-foreground/80">Click or press Space to flip back</p>
        </Card>
      </motion.div>
      
      <div className="mt-4 flex justify-center">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={(e) => {
            e.stopPropagation();
            onFlip();
          }}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Flip Card
        </Button>
      </div>
    </div>
  );
}
