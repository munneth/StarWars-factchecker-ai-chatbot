import { NextRequest, NextResponse } from "next/server";
import { VectorStoreIndex, Document } from "llamaindex";
import { GoogleGenerativeAI } from "@google/generative-ai";
import path from "path";
import fs from "fs";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { question } = body;

  // Initialize Gemini
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // load documents from current directory into an index
  const currentDir = path.join(process.cwd(), "data");
  const files = fs.readdirSync(currentDir);
  const documents = files
    .filter((f) => f.endsWith(".txt"))
    .map(
      (f) =>
        new Document({
          text: fs.readFileSync(path.join(currentDir, f), "utf-8"),
        })
    );

  const index = await VectorStoreIndex.fromDocuments(documents);

  // Create query engine
  const queryEngine = index.asQueryEngine();
  const response = await queryEngine.query(question);

  return NextResponse.json({ answer: response.toString() });
}
