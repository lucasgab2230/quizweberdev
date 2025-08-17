"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SliderButtons } from "@/components/home/slider-buttons";
import { LeetCodeQuestionSelector } from "@/components/home/leetcode-question-selector";
import { LanguageSelector } from "@/components/header/language-selector";

export default function Home() {
  const t = useTranslations("home");
  const [activeTab, setActiveTab] = useState<"flashcards" | "leetcode">("flashcards");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold">{t("app_name")}</h1>
            <LanguageSelector />
          </div>
          <SliderButtons activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </header>

      <main className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">{t("welcome")}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>{t("flashcards_section")}</CardTitle>
              <CardDescription>{t("flashcards_description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/flashcards">
                <Button className="w-full">{t("buttons.start_flashcards")}</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("leetcode_section")}</CardTitle>
              <CardDescription>{t("leetcode_description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/leetcode">
                <Button className="w-full">{t("buttons.practice_leetcode")}</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">{t("leetcode_section")}</h2>
          <LeetCodeQuestionSelector />
        </div>
      </main>
    </div>
  );
}
