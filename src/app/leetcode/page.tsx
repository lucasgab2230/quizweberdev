"use client";

import { LeetCodeQuestionSelector } from "@/components/home/leetcode-question-selector";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LeetCodeListPage() {
  const t = useTranslations("leetcode");

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
          <h1 className="text-3xl font-bold">{t("title")}</h1>
          <p className="text-muted-foreground">{t("select_question")}</p>
        </div>

        <LeetCodeQuestionSelector />
      </main>
    </div>
  );
}
