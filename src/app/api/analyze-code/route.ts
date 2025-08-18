import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Define proper types instead of using 'any'
interface AnalyzeCodeRequestBody {
  code: string;
  questionId: string;
}

interface GeminiError extends Error {
  message: string;
  status?: number;
}

export async function POST(request: Request) {
  try {
    // Check if the GEMINI_API_KEY is set
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured" },
        { status: 500 }
      );
    }

    const { code, questionId }: AnalyzeCodeRequestBody = await request.json();
    
    // Initialize the Google Generative AI client
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // Use Gemma 3 model (replace with your actual model ID from Google AI Studio)
    const model = genAI.getGenerativeModel({ 
      model: "models/gemma-3-2b-it" // Replace with your actual Gemma 3 model ID
    });
    
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
      Provide specific examples when suggesting improvements.
    `;
    
    // Generate content with specific configuration for Gemma
    const result = await model.generateContent({
      contents: [{
        role: "user",
        parts: [{ text: prompt }]
      }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });
    
    const response = result.response;
    const text = response.text();
    
    return NextResponse.json({ feedback: text });
  } catch (error: unknown) {
    console.error("Error analyzing code with Gemma 3:", error);
    
    // Provide more specific error messages
    let errorMessage = "Failed to analyze code with Gemma 3";
    
    if (error instanceof Error) {
      if (error.message?.includes("API_KEY")) {
        return NextResponse.json(
          { error: "Invalid API key for Gemini API" },
          { status: 401 }
        );
      }
      
      if (error.message?.includes("model")) {
        return NextResponse.json(
          { error: "Gemma 3 model not found or not accessible" },
          { status: 400 }
        );
      }
      
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

// Add GET method for health check
export async function GET() {
  return NextResponse.json({ status: "API route is working" });
}
