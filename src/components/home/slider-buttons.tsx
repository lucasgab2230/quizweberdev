"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface SliderButtonsProps {
  activeTab: "flashcards" | "leetcode";
  setActiveTab: (tab: "flashcards" | "leetcode") => void;
}

export function SliderButtons({ activeTab, setActiveTab }: SliderButtonsProps) {
  const t = useTranslations("common");

  return (
    <div className="flex items-center bg-muted rounded-full p-1">
      <Button
        variant={activeTab === "flashcards" ? "default" : "ghost"}
        size="sm"
        className="relative rounded-full px-4"
        onClick={() => setActiveTab("flashcards")}
      >
        {activeTab === "flashcards" && (
          <motion.div
            layoutId="slider"
            className="absolute inset-0 bg-primary rounded-full"
            initial={false}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">{t("flashcards")}</span>
      </Button>
      <Button
        variant={activeTab === "leetcode" ? "default" : "ghost"}
        size="sm"
        className="relative rounded-full px-4"
        onClick={() => setActiveTab("leetcode")}
      >
        {activeTab === "leetcode" && (
          <motion.div
            layoutId="slider"
            className="absolute inset-0 bg-primary rounded-full"
            initial={false}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">{t("leetcode")}</span>
      </Button>
    </div>
  );
}
