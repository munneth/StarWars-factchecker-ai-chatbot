# Youtini Star Wars AI Historian

A Star Wars lore Q&A application that uses **Flask** (Python) for the backend and **React + Vite + TypeScript** for the frontend. This project demonstrates how to fetch data from external sources (Wookieepedia, Youtini), process it, and use the OpenAI API (GPT-4 or GPT-3.5) to answer Star Wars lore questions.

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Project Structure](#project-structure)
8. [Environment Variables](#environment-variables)
9. [Python Dependencies](#python-dependencies)
10. [Troubleshooting](#troubleshooting)
11. [License](#license)

## Overview
The **Youtini Star Wars AI Historian** allows users to:
- Ask questions about Star Wars lore
- Retrieve context from external Star Wars timelines (Wookieepedia, Youtini)
- Use GPT-4 (or GPT-3.5) to generate well-informed answers

This repository includes:
- **Backend** (Python + Flask): Handles requests, scrapes external sites, and calls OpenAI's API
- **Frontend** (React + Vite + TypeScript): Web interface for questions and responses

## Features
- **GPT-4 Integration**: Powered by OpenAI for high-quality responses
- **Web Scraping**: Gathers context using `requests` and `BeautifulSoup`
- **Flask API**: RESTful API that processes questions
- **CORS Support**: Configured via `Flask-Cors` for frontend communication
- **Secure Configuration**: `.env` file for sensitive data

## Tech Stack
| Backend | Frontend |
|---------|----------|
| Python  | React    |
| Flask   | TypeScript|
| Requests| Vite     |
| BeautifulSoup | Tailwind (optional) |
| OpenAI API | Axios |

## Prerequisites
- Python 3.9+
- Node.js 16+
- Git
- OpenAI API key

## Installation
```bash
# Clone repository
git clone https://github.com/YourUsername/youtini-ai-historian.git
cd youtini-ai-historian

# Install Python dependencies
pip install -r requirements.txt

# Install frontend dependencies
cd youtini-ai-frontend
npm install
 
## Usage

### Backend Setup
```bash
# Create and activate virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # Linux/Mac
.\venv\Scripts\activate   # Windows

# Install dependencies
pip install -r requirements.txt

# Run Flask server
python main.py

# Navigate to frontend directory
cd youtini-ai-frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Reccomended File Structure
youtini-star-wars-historian/
├── backend/
│   ├── __init__.py
│   ├── main.py
│   ├── scraper.py
│   ├── gpt_integration.py
│   └── requirements.txt
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── QuestionForm.tsx
│   │   │   └── AnswerDisplay.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── types.ts
│   ├── package.json
│   └── vite.config.ts
├── .env
├── .gitignore
└── README.md


# create your environment variables 

## Required
OPENAI_API_KEY=sk-your-key-here
OPENAI_MODEL=gpt-4  # or gpt-3.5-turbo

## Optional
FLASK_ENV=development
FRONTEND_URL=http://localhost:5173
MAX_TOKENS=1000

# Dependencies

## Backend
Flask==2.2.3
Flask-Cors==3.0.10
openai==0.27.0
python-dotenv==0.21.1
beautifulsoup4==4.11.1
requests==2.28.2
lxml==4.9.2

## Frontend
  "dependencies": 
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "axios": "^1.3.4",
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "typescript": "^4.9.5",
    "vite": "^4.1.0"

# License

MIT License

Copyright (c) 2023 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
  
