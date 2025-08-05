# Youtini Star Wars Historian - Next.js

This is the Next.js version of the Youtini Star Wars AI Historian frontend, converted from the original Vite React application.

## Features

- **AI-powered Star Wars lore historian** - Ask questions about Star Wars lore and get AI-generated responses
- **Modern Next.js 15** - Built with the latest Next.js framework
- **TypeScript** - Full type safety
- **Tailwind CSS** - Modern styling with utility classes
- **API Routes** - Built-in backend functionality with Next.js API routes
- **Responsive Design** - Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+ 
- Your backend server running on `http://localhost:5000/`

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # API route for chat functionality
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Main page component
```

## API Routes

The application includes a built-in API route at `/api/chat` that proxies requests to your backend server. This provides several benefits:

- **CORS handling** - No need to configure CORS on your backend
- **Error handling** - Centralized error handling
- **Security** - API routes run on the server side
- **Performance** - Better caching and optimization

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

## Backend Integration

The frontend communicates with your backend server through the `/api/chat` route. Make sure your backend server is running on `http://localhost:5000/` and accepts POST requests with the following format:

```json
{
  "question": "Your Star Wars question here"
}
```

And returns responses in this format:

```json
{
  "answer": "AI-generated response here"
}
```
