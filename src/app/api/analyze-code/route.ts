import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { code, questionId } = await request.json();
    
    // Use the secret from environment variables (not exposed to client)
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `
      Review the following code solution for a coding interview question. 
      Provide constructive feedback on:
      1. Code correctness
      2. Efficiency and optimization
      3. Code readability and best practices
      4. Potential edge cases
      
      Question ID: ${questionId}
      Code:
      ${code}
      
      Respond in a friendly, helpful tone suitable for interview preparation.
      Keep your response concise but informative.
    `;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return NextResponse.json({ feedback: text });
  } catch (error) {
    console.error("Error analyzing code:", error);
    return NextResponse.json(
      { error: "Failed to analyze code" },
      { status: 500 }
    );
  }
}
