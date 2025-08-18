import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Bot } from "lucide-react";

interface AIFeedbackProps {
  feedback: string;
  isLoading: boolean;
}

export function AIFeedback({ feedback, isLoading }: AIFeedbackProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          AI Feedback
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ) : feedback ? (
          <div className="prose prose-sm max-w-none">
            {feedback.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">
            Run your code to get AI feedback on your solution
          </p>
        )}
      </CardContent>
    </Card>
  );
}
