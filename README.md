# QuoteVerse 🌟

> A complete, professional quote generator application with soft Neo Brutalism design

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://quotes-gfv75ey3w-4shils-projects.vercel.app)
[![GitHub](https://img.shields.io/badge/github-repo-blue?style=for-the-badge&logo=github)](https://github.com/4shil/quotes-app)
[![Vercel](https://img.shields.io/badge/deployed-vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/4shils-projects/quotes-app)

![QuoteVerse Preview](https://via.placeholder.com/1200x600/FF6B6B/FFFFFF?text=QuoteVerse+%7C+Discover+Wisdom)

## ✨ Features

### 🎯 Core Functionality

- **10+ Categories** - Inspirational, Life, Happiness, Love, Success, Motivation, Wisdom, Humor, Friendship, Family
- **Real-Time Search** - Find quotes by text or author instantly
- **Smart Sorting** - Sort by Recent, Popular, or Random
- **Random Generator** - Get instant inspiration with random quotes

### 💾 User Features

- **Like Quotes** - Heart icon with persistent storage
- **Bookmark Favorites** - Save quotes for later
- **Copy to Clipboard** - One-click copy with visual feedback
- **Social Sharing** - Share on Twitter, Facebook, LinkedIn
- **Your Collection** - Dedicated page for saved quotes
- **Separate Tabs** - View Liked and Bookmarked quotes separately

### 📊 Stats Dashboard

- Total quotes viewed
- Liked quotes counter
- Bookmarked quotes counter
- Combined collection size
- Live stats in navigation bar

### 🎨 Design

- **Soft Neo Brutalism** aesthetic
- **Soft Color Palette** - Coral, yellow, sky blue
- **Rounded Corners** with 3px borders
- **Refined Shadows** - 4-6px offset for depth
- **Smooth Animations** throughout
- **Fully Responsive** - Mobile-first design
- **Clean Typography** - Inter font from Google

## 🚀 Live Demo

**Production Site:** [https://quotes-gfv75ey3w-4shils-projects.vercel.app](https://quotes-gfv75ey3w-4shils-projects.vercel.app)

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type safety and better DX |
| **TailwindCSS** | Utility-first styling |
| **Lucide React** | Beautiful icon library |
| **API Ninjas** | Quote data source |
| **localStorage** | Persistent user data |
| **Vercel** | Deployment platform |

## 📦 Installation

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git

### Quick Start

```bash
# Clone the repository
git clone https://github.com/4shil/quotes-app.git
cd quotes-app

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your API key (optional - demo mode works without it)
# Edit .env.local and add:
# NEXT_PUBLIC_API_NINJAS_KEY=your_api_key_here

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Get API Key (Optional)

1. Visit [API Ninjas](https://api-ninjas.com)
2. Sign up for a free account
3. Copy your API key from the dashboard
4. Add it to `.env.local`

**Note:** The app works without an API key using built-in demo quotes.

## 📁 Project Structure

```
quotes-app/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage with quotes grid
│   ├── saved/
│   │   └── page.tsx            # Saved collection page
│   └── globals.css             # Global styles & design system
├── components/
│   ├── Navbar.tsx              # Navigation with live stats
│   ├── QuoteCard.tsx           # Interactive quote card
│   └── StatsSection.tsx        # Dashboard metrics
├── public/                     # Static assets
├── .env.local                  # Environment variables (not in git)
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## 🎯 Available Scripts

```bash
npm run dev       # Start development server (localhost:3000)
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint checks
```

## 🌈 Design System

### Color Palette

```css
Background:   #FAFAFC (rgb(250, 250, 252))
Foreground:   #14141E (rgb(20, 20, 30))
Primary:      #FF6B6B (rgb(255, 107, 107)) - Coral
Secondary:    #FFE66D (rgb(255, 230, 109)) - Yellow
Accent:       #87CEEB (rgb(135, 206, 250)) - Sky Blue
Success:      #90EE90 (rgb(144, 238, 144)) - Light Green
```

### Typography

- **Font Family:** Inter (Google Fonts)
- **Headings:** Bold, tight tracking
- **Body:** Medium weight, relaxed line height

### Spacing & Borders

- **Border Width:** 3px solid
- **Border Radius:** 12px (0.75rem)
- **Shadow Offset:** 4-6px for depth
- **Card Padding:** 24px (1.5rem)

## 📱 Features Breakdown

### Homepage (`/`)

- Hero section with gradient background
- Stats dashboard (4 metrics)
- Search bar with real-time filtering
- Sort options (Recent, Popular, Random)
- Category filter buttons (10 categories)
- Responsive quote grid
- Loading skeletons for better UX

### Quote Cards

- Color-coded category badge
- Quote text with proper typography
- Author attribution
- Like button (heart icon)
- Bookmark button
- Copy to clipboard
- Share menu (social platforms)
- Smooth hover animations

### Saved Collection Page (`/saved`)

- Navigation back to home
- Tabs for Bookmarked/Liked quotes
- Quote counts in tab labels
- Clear all functionality
- Empty state with call-to-action
- Same interactive quote cards

### Navigation Bar

- Logo with gradient icon
- Home and My Collection links
- Live counters (likes/bookmarks)
- Responsive mobile menu
- Sticky positioning

## 🔧 Configuration

### Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_API_NINJAS_KEY=your_api_key_here
```

### Tailwind Classes

Custom utility classes are defined in `globals.css`:

- `.card-soft-brutalism` - Rounded cards with borders and shadows
- `.btn-primary` - Primary action button
- `.btn-outline` - Outline style button
- `.badge-soft-brutalism` - Rounded badge/pill
- `.input-soft-brutalism` - Styled input fields

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Development Process

Built in **7 structured commits**:

1. Enhanced homepage with local storage
2. Working share functionality
3. Live stats in navbar
4. Stats dashboard component
5. Saved collection page
6. Navigation system
7. Complete documentation

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🙏 Acknowledgments

- **Design Inspiration:** Neo Brutalism movement
- **Quote Data:** [API Ninjas](https://api-ninjas.com)
- **Icons:** [Lucide Icons](https://lucide.dev)
- **Fonts:** [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Deployment:** [Vercel](https://vercel.com)

## 📞 Contact & Links

- **GitHub Repository:** [github.com/4shil/quotes-app](https://github.com/4shil/quotes-app)
- **Live Demo:** [quotes-gfv75ey3w-4shils-projects.vercel.app](https://quotes-gfv75ey3w-4shils-projects.vercel.app)
- **Developer:** [@4shil](https://github.com/4shil)

---

<div align="center">

**Built with ❤️ by @4shil**

[⬆ Back to Top](#quoteverse-)

</div>
