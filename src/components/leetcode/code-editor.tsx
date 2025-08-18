"use client";

import { Textarea } from "@/components/ui/textarea";

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
}

export function CodeEditor({ code, setCode }: CodeEditorProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-muted px-4 py-2 border-b flex items-center justify-between">
        <span className="text-sm font-medium">Code Editor</span>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <Textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="font-mono text-sm min-h-[300px] border-0 rounded-none focus-visible:ring-0 code-editor"
        placeholder="Write your solution here..."
      />
    </div>
  );
}
