"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { leetcodeQuestions } from "@/data/leetcode-questions";

export function LeetCodeQuestionSelector() {
  const t = useTranslations("leetcode");

  const getDifficultyVariant = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "secondary";
      case "medium": return "default";
      case "hard": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {leetcodeQuestions.map((question) => (
        <Card key={question.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">{question.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {question.description}
                </CardDescription>
              </div>
              <Badge variant={getDifficultyVariant(question.difficulty)}>
                {t(question.difficulty)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Link href={`/leetcode/${question.id}?title=${encodeURIComponent(question.title)}`}>
              <Button className="w-full">{t("buttons.practice_leetcode")}</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
