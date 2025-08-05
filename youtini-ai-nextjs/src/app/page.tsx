"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/llamaindex", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ USER_QUESTION: input }),
      });
      const data = await res.json();
      setResponse(data.answer);
    } catch {
      setResponse("Error fetching response.");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Youtini Star Wars Historian</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Ask a Star Wars question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={8}
          cols={80}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {loading && <p>Loading...</p>}
      {response && (
        <div className="response">
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
