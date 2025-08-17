"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { type LeetCodeQuestion } from "@/types/leetcode-question";

interface QuestionDisplayProps {
  questionId: string;
}

export function QuestionDisplay({ questionId }: QuestionDisplayProps) {
  const [question, setQuestion] = useState<LeetCodeQuestion | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Make API call to fetch question data
        const response = await fetch(`/api/leetcode/questions/${questionId}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch question: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        setQuestion(data);
      } catch (err) {
        console.error("Error fetching question:", err);
        setError(err instanceof Error ? err.message : "Failed to load question");
        setQuestion(null);
      } finally {
        setLoading(false);
      }
    };

    if (questionId) {
      fetchQuestion();
    }
  }, [questionId]);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-1/3" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Skeleton className="h-4 w-1/4 mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4 mt-1" />
            </div>
            
            <div>
              <Skeleton className="h-4 w-1/4 mb-2" />
              <Skeleton className="h-20 w-full" />
            </div>
            
            <div>
              <Skeleton className="h-4 w-1/4 mb-2" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Error Loading Question</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-destructive">
            {error}
          </p>
          <p className="text-muted-foreground mt-2">
            Please try again later or contact support if the problem persists.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!question) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Question Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            The question with ID "{questionId}" could not be found.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{question.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Problem Statement</h3>
            <p className="text-muted-foreground">
              {question.description}
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Example</h3>
            <pre className="bg-muted p-4 rounded-md text-sm">
              {`Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`}
            </pre>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Constraints</h3>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>2 <= nums.length <= 10^4</li>
              <li>-10^9 <= nums[i] <= 10^9</li>
              <li>-10^9 <= target <= 10^9</li>
              <li>Only one valid answer exists</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Difficulty</h3>
            <div className="inline-block px-3 py-1 text-sm rounded-full bg-secondary">
              {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
