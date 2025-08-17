"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CodeEditor } from "@/components/leetcode/code-editor";
import { AIFeedback } from "@/components/leetcode/ai-feedback";
import { QuestionDisplay } from "@/components/leetcode/question-display";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowLeft, Play, Check } from "lucide-react";
import { toast } from "sonner";

export default function LeetCodeQuestionPage({ params }: { params: { id: string } }) {
  const t = useTranslations("leetcode");
  const searchParams = useSearchParams();
  const [code, setCode] = useState("// Write your solution here\n");
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const questionTitle = searchParams.get("title") || `Question ${params.id}`;

  const runCode = async () => {
    setIsLoading(true);
    setFeedback(t("loading_feedback"));
    
    try {
      // Call your backend API route instead of Gemini directly
      const response = await fetch("/api/analyze-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, questionId: params.id }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to analyze code");
      }
      
      setFeedback(data.feedback);
      setIsLoading(false);
    } catch (error: unknown) {
      console.error("Error analyzing code:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      setFeedback(`Error: ${errorMessage}`);
      setIsLoading(false);
      toast.error("Analysis failed", {
        description: errorMessage || "Please check your code and try again",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/leetcode">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t("buttons.back_to_home")}
            </Button>
          </Link>
          <h1 className="text-lg font-semibold">{questionTitle}</h1>
          <div></div> {/* Spacer for alignment */}
        </div>
      </header>

      <main className="container py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <QuestionDisplay questionId={params.id} />
          
          <div className="flex gap-2">
            <Button onClick={runCode} disabled={isLoading} className="gap-2">
              <Play className="h-4 w-4" />
              {t("run_code")}
            </Button>
            <Button variant="outline" className="gap-2">
              <Check className="h-4 w-4" />
              {t("submit_code")}
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <CodeEditor code={code} setCode={setCode} />
          <AIFeedback feedback={feedback} isLoading={isLoading} />
        </div>
      </main>
    </div>
  );
}
