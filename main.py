from flask import Flask, request, jsonify
import requests
from bs4 import BeautifulSoup
from openai import OpenAI
from flask_cors import CORS  # Added for CORS
from dotenv import load_dotenv
import os 

#env variables
load_dotenv()
api_key = os.getenv("API_KEY")

app = Flask(__name__)
CORS(app)  # Enable CORS

client = OpenAI(api_key)  

WIKI_URL = "https://starwars.fandom.com/wiki/Timeline_of_galactic_history"
YOUTINI_URL = "https://youtini.com/timeline/canon"

def fetch_site_text(url):
    try:
        res = requests.get(url, timeout=10)
        soup = BeautifulSoup(res.text, 'html.parser')
        return ' '.join(soup.stripped_strings)[:4000]
    except Exception as e:
        return f"Error fetching {url}: {e}"

def ask_gpt(question, context):
    prompt = f"""
    You are a Star Wars lore historian and expert. Use the information below from official Star Wars sources to either answer the user's question or verify the lore accuracy of a passage.

    Context:
    {context}

    Input:
    {question}

    Answer:
    """
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a helpful and accurate Star Wars historian working for Youtini."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        max_tokens=500
    )
    return response.choices[0].message.content.strip()

@app.route('/', methods=['GET', 'POST'])
def index():
    answer = None
    if request.method == 'POST':
        data = request.get_json()  # Parse JSON payload
        if not data or 'question' not in data:
            return jsonify({"answer": "No question provided."}), 400
        question = data['question']
        wiki_text = fetch_site_text(WIKI_URL)
        youtini_text = fetch_site_text(YOUTINI_URL)
        context = wiki_text + "\n\n" + youtini_text
        answer = ask_gpt(question, context)
    return jsonify({ "answer": answer })

if __name__ == '__main__':
    app.run(debug=True)


