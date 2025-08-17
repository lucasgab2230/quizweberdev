import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface QuestionDisplayProps {
  questionId: string;
}

export function QuestionDisplay({ questionId }: QuestionDisplayProps) {
  // In a real app, you would fetch the question data based on the ID
  // For now, we'll just show a placeholder
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Question {questionId}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Problem Statement</h3>
            <p className="text-muted-foreground">
              This is a placeholder for the actual problem statement. In a real implementation,
              this would be fetched from your question database based on the ID.
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
        </div>
      </CardContent>
    </Card>
  );
}
