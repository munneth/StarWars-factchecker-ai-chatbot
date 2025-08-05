# Youtini Star Wars Historian - Next.js

This is the Next.js version of the Youtini Star Wars AI Historian frontend, converted from the original Vite React application. Now includes **LlamaIndex integration** for document-based question answering.

## Features

- **AI-powered Star Wars lore historian** - Ask questions about Star Wars lore and get AI-generated responses
- **LlamaIndex Integration** - Document-based question answering using your own data
- **Modern Next.js 15** - Built with the latest Next.js framework
- **TypeScript** - Full type safety
- **Tailwind CSS** - Modern styling with utility classes
- **API Routes** - Built-in backend functionality with Next.js API routes
- **Responsive Design** - Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+
- Your backend server running on `http://localhost:5000/` (optional - now using LlamaIndex)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Add your documents to the `data/` folder:

   - Supported formats: `.txt`, `.md`
   - Place any Star Wars lore documents, articles, or text files here
   - Example: `data/star-wars-lore.txt`

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── chat/
│   │   │   └── route.ts          # Legacy API route (proxies to backend)
│   │   └── llamaindex/
│   │       └── route.ts          # LlamaIndex API route (document-based QA)
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Main page component
data/                              # Your documents go here
├── sample.txt                    # Sample Star Wars document
└── [your-documents].txt          # Add your own documents
```

## LlamaIndex Integration

The application now includes **LlamaIndex** for document-based question answering:

### How It Works

1. **Document Loading**: Documents from the `data/` folder are automatically loaded and indexed
2. **Vector Search**: Questions are matched against your documents using semantic search
3. **AI Responses**: LlamaIndex generates answers based on your document content

### Adding Documents

1. Place your text files in the `data/` folder
2. Supported formats: `.txt`, `.md`
3. Documents are automatically loaded when the server starts
4. You can add documents while the server is running (they'll be loaded on the next request)

### API Endpoint

- **POST** `/api/llamaindex`
- **Body**: `{ "question": "Your question here" }`
- **Response**: `{ "answer": "AI-generated response" }`

## API Routes

The application includes two API routes:

### 1. `/api/llamaindex` (Recommended)

- Uses LlamaIndex for document-based question answering
- No external backend required
- Processes documents from the `data/` folder

### 2. `/api/chat` (Legacy)

- Proxies requests to your backend server
- Requires backend server running on `http://localhost:5000/`

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Migration from Vite

This project was converted from a Vite React application. Key changes:

1. **Framework**: Vite → Next.js 15
2. **Routing**: React Router → Next.js App Router
3. **API Calls**: Direct backend calls → Next.js API routes
4. **Styling**: Custom CSS → Tailwind CSS + custom styles
5. **Build System**: Vite → Next.js build system
6. **AI Integration**: External backend → LlamaIndex + API routes

## Environment Variables

Add your API keys to `.env.local`:

```env
# For OpenAI (if using OpenAI with LlamaIndex)
OPENAI_API_KEY=your_openai_api_key_here

# For Gemini (if using Google's Gemini)
GEMINI_API_KEY=your_gemini_api_key_here
```

**Note**: Currently using default LlamaIndex LLM. To configure for specific LLMs like Gemini, you'll need to update the LlamaIndex configuration in the API route.

## Backend Integration

### Option 1: LlamaIndex (Recommended)

- No external backend required
- Document-based question answering
- Add your documents to the `data/` folder

### Option 2: External Backend

- Keep your existing backend server on `http://localhost:5000/`
- Use the `/api/chat` endpoint
- Accepts POST requests with: `{ "question": "Your question" }`
- Returns: `{ "answer": "Response" }`
