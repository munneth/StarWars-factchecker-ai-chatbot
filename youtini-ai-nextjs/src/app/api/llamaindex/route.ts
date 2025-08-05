import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Hardcoded URLs that will always be included
const HARDCODED_URLS = [
  "https://starwars.fandom.com/wiki/Star_Wars",
  "https://starwars.fandom.com/wiki/Luke_Skywalker",
  "https://starwars.fandom.com/wiki/Darth_Vader",
  "https://starwars.fandom.com/wiki/Anakin_Skywalker",
  "https://starwars.fandom.com/wiki/Princess_Leia",
  "https://starwars.fandom.com/wiki/Han_Solo",
  "https://www.starwars.com/databank",
  "https://starwars.fandom.com/wiki/Timeline_of_galactic_history",
  "https://youtini.com/",
  // Add more URLs here
];

// Your prompt template
const PROMPT_TEMPLATE = `You are a Star Wars expert historian. Search through the provided websites and find relevant information to answer questions accurately and comprehensively.

Sources to search:
- Online Star Wars resources and websites

User Question: {USER_QUESTION}

Please search through the available websites and provide a detailed answer based on the information you find.`;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { USER_QUESTION } = body;

  // Initialize Gemini
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Create the full prompt with user question
  const fullPrompt = `You are a Star Wars expert historian with extensive knowledge of Star Wars lore, characters, events, and canon. Answer questions about Star Wars comprehensively and accurately.

User Question: {USER_QUESTION}

Please provide a detailed answer based on your Star Wars knowledge.`;

  // Generate response with Gemini
  const result = await model.generateContent(
    fullPrompt.replace("{USER_QUESTION}", USER_QUESTION)
  );
  const response = await result.response;
  const text = response.text();

  return NextResponse.json({ answer: text });
}
