'use client';

import { TrendingUp, Heart, Bookmark, Sparkles } from 'lucide-react';

interface StatsSectionProps {
  totalQuotes: number;
  likedCount: number;
  bookmarkedCount: number;
}

export default function StatsSection({ totalQuotes, likedCount, bookmarkedCount }: StatsSectionProps) {
  return (
    <section className="py-8 px-4 bg-gradient-to-r from-primary-light via-secondary-light to-accent-light border-y-3 border-[rgb(30,30,40)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Total Quotes */}
          <div className="card-soft-brutalism bg-white p-6 text-center">
            <div className="w-12 h-12 bg-accent-light border-2 border-[rgb(30,30,40)] rounded-lg flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6 text-accent-dark" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{totalQuotes}</div>
            <div className="text-sm font-medium text-foreground/60">Total Quotes</div>
          </div>

          {/* Liked */}
          <div className="card-soft-brutalism bg-white p-6 text-center">
            <div className="w-12 h-12 bg-primary-light border-2 border-[rgb(30,30,40)] rounded-lg flex items-center justify-center mx-auto mb-3">
              <Heart className="w-6 h-6 text-primary fill-current" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{likedCount}</div>
            <div className="text-sm font-medium text-foreground/60">Liked</div>
          </div>

          {/* Bookmarked */}
          <div className="card-soft-brutalism bg-white p-6 text-center">
            <div className="w-12 h-12 bg-secondary-light border-2 border-[rgb(30,30,40)] rounded-lg flex items-center justify-center mx-auto mb-3">
              <Bookmark className="w-6 h-6 text-secondary-dark fill-current" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{bookmarkedCount}</div>
            <div className="text-sm font-medium text-foreground/60">Bookmarked</div>
          </div>

          {/* Collection */}
          <div className="card-soft-brutalism bg-white p-6 text-center">
            <div className="w-12 h-12 bg-success border-2 border-[rgb(30,30,40)] rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-[rgb(50,150,50)]" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{likedCount + bookmarkedCount}</div>
            <div className="text-sm font-medium text-foreground/60">Your Collection</div>
          </div>
        </div>
      </div>
    </section>
  );
}
