'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Bookmark, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import QuoteCard from '@/components/QuoteCard';

interface Quote {
  quote: string;
  author: string;
  category: string;
}

export default function SavedPage() {
  const router = useRouter();
  const [likedQuotes, setLikedQuotes] = useState<Set<string>>(new Set());
  const [bookmarkedQuotes, setBookmarkedQuotes] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<'liked' | 'bookmarked'>('bookmarked');
  const [mounted, setMounted] = useState(false);

  // Load saved quotes on mount
  useEffect(() => {
    setMounted(true);
    const savedLikes = localStorage.getItem('likedQuotes');
    const savedBookmarks = localStorage.getItem('bookmarkedQuotes');
    
    if (savedLikes) {
      try {
        setLikedQuotes(new Set(JSON.parse(savedLikes)));
      } catch (e) {
        console.error('Error parsing liked quotes:', e);
      }
    }
    if (savedBookmarks) {
      try {
        setBookmarkedQuotes(new Set(JSON.parse(savedBookmarks)));
      } catch (e) {
        console.error('Error parsing bookmarked quotes:', e);
      }
    }
  }, []);

  const handleLikeToggle = (quoteText: string) => {
    const newLikes = new Set(likedQuotes);
    if (newLikes.has(quoteText)) {
      newLikes.delete(quoteText);
    } else {
      newLikes.add(quoteText);
    }
    setLikedQuotes(newLikes);
    localStorage.setItem('likedQuotes', JSON.stringify([...newLikes]));
  };

  const handleBookmarkToggle = (quoteText: string) => {
    const newBookmarks = new Set(bookmarkedQuotes);
    if (newBookmarks.has(quoteText)) {
      newBookmarks.delete(quoteText);
    } else {
      newBookmarks.add(quoteText);
    }
    setBookmarkedQuotes(newBookmarks);
    localStorage.setItem('bookmarkedQuotes', JSON.stringify([...newBookmarks]));
  };

  const handleClearAll = () => {
    const confirmClear = window.confirm(
      `Are you sure you want to clear all ${activeTab} quotes? This cannot be undone.`
    );
    
    if (!confirmClear) return;
    
    if (activeTab === 'liked') {
      setLikedQuotes(new Set());
      localStorage.setItem('likedQuotes', JSON.stringify([]));
    } else {
      setBookmarkedQuotes(new Set());
      localStorage.setItem('bookmarkedQuotes', JSON.stringify([]));
    }
  };

  const quotesToShow = activeTab === 'liked' ? Array.from(likedQuotes) : Array.from(bookmarkedQuotes);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b-3 border-[rgb(30,30,40)] py-6 px-4 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="btn-outline inline-flex items-center gap-2 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Your Collection</h1>
          <p className="text-foreground/60 font-medium">Your favorite quotes in one place</p>
        </div>
      </header>

      {/* Tabs */}
      <section className="bg-white border-b-3 border-[rgb(30,30,40)] py-4 px-4 sticky top-[140px] md:top-[156px] z-30">
        <div className="max-w-6xl mx-auto flex gap-3 flex-wrap">
          <button
            onClick={() => setActiveTab('bookmarked')}
            className={`badge-soft-brutalism ${
              activeTab === 'bookmarked' 
                ? 'bg-secondary text-foreground' 
                : 'bg-white hover:bg-gray-50'
            }`}
          >
            <Bookmark className="w-4 h-4 inline mr-2" />
            Bookmarked ({bookmarkedQuotes.size})
          </button>
          <button
            onClick={() => setActiveTab('liked')}
            className={`badge-soft-brutalism ${
              activeTab === 'liked' 
                ? 'bg-primary text-white' 
                : 'bg-white hover:bg-gray-50'
            }`}
          >
            <Heart className="w-4 h-4 inline mr-2" />
            Liked ({likedQuotes.size})
          </button>
          
          {quotesToShow.length > 0 && (
            <button
              onClick={handleClearAll}
              className="badge-soft-brutalism bg-white hover:bg-red-50 ml-auto text-red-600 border-red-500"
            >
              <Trash2 className="w-4 h-4 inline mr-2" />
              Clear All
            </button>
          )}
        </div>
      </section>

      {/* Quotes Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {quotesToShow.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quotesToShow.map((quoteText, index) => {
                const quote: Quote = {
                  quote: quoteText,
                  author: 'Unknown',
                  category: 'saved'
                };
                
                return (
                  <QuoteCard
                    key={`${quoteText.slice(0, 20)}-${index}`}
                    quote={quote}
                    isLiked={likedQuotes.has(quoteText)}
                    isBookmarked={bookmarkedQuotes.has(quoteText)}
                    onLikeToggle={handleLikeToggle}
                    onBookmarkToggle={handleBookmarkToggle}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="card-soft-brutalism inline-block p-12 bg-secondary-light">
                <div className="w-20 h-20 bg-white border-3 border-[rgb(30,30,40)] rounded-full flex items-center justify-center mx-auto mb-6">
                  {activeTab === 'liked' ? (
                    <Heart className="w-10 h-10 text-primary" />
                  ) : (
                    <Bookmark className="w-10 h-10 text-foreground" />
                  )}
                </div>
                <p className="text-2xl font-bold mb-4">
                  No {activeTab} quotes yet
                </p>
                <p className="text-foreground/70 mb-6">
                  Start exploring and {activeTab === 'liked' ? 'like' : 'bookmark'} your favorite quotes!
                </p>
                <Link
                  href="/"
                  className="btn-primary inline-block"
                >
                  Discover Quotes
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
