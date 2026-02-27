# Qotizs

A quote discovery app. Browse, search, like, and save quotes from a public API. Built with Next.js using a Soft Neo-Brutalist design.

![quote app interface](https://media.giphy.com/media/l0HlKrB02QY0f1mbm/giphy.gif)

[Live Demo](https://qotizs.vercel.app)

## Features

- Browse quotes by category or author
- Search by text, author, or tag
- Random quote generator
- Like and bookmark favorites (stored in localStorage)
- Responsive, mobile-first layout
- Share quotes

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Lucide React
- [API Ninjas Quotes API](https://api-ninjas.com/api/quotes)

## Getting Started

```bash
git clone https://github.com/4shil/Qotizs.git
cd Qotizs
npm install
```

Create `.env.local`:

```
NEXT_PUBLIC_API_NINJAS_KEY=your_api_key_here
```

Get a free API key at [api-ninjas.com](https://api-ninjas.com).

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
Qotizs/
├── app/
│   ├── layout.tsx
│   ├── page.tsx            # Main feed
│   └── saved/              # Saved quotes page
└── components/
    ├── Navbar.tsx
    ├── QuoteCard.tsx        # Individual quote with like/save actions
    └── StatsSection.tsx
```

## Deployment

Deployed on Vercel. Any static/SSR host works:

```bash
npm run build
npm start
```

## License

MIT
