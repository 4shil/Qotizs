# QuoteVerse - Feature Fixes TODO

## Analysis of Issues

After analyzing the app, here are the identified issues and fixes needed:

### Issues Found:
1. **Share functionality** - Dropdown menu might not position correctly on mobile
2. **Saved page navigation** - Missing router import in saved page
3. **Color classes** - Some Tailwind classes not defined (accent-dark, secondary-dark)
4. **API error handling** - Could be improved with retry logic
5. **Mobile responsiveness** - Share menu overlay on small screens

## 5-Step Fix Plan

### Step 1: Fix Custom Color Classes
**Issue:** Using undefined Tailwind color classes (accent-dark, secondary-dark)
**Fix:** Define proper color utilities in globals.css
**Files:** `app/globals.css`

### Step 2: Fix Share Menu Positioning
**Issue:** Share dropdown might overflow on mobile devices
**Fix:** Add proper z-index and positioning with mobile-safe styles
**Files:** `components/QuoteCard.tsx`

### Step 3: Fix Saved Page Router
**Issue:** Missing router functionality and proper navigation
**Fix:** Add useRouter import and fix navigation
**Files:** `app/saved/page.tsx`

### Step 4: Add API Retry Logic
**Issue:** Single API failures cause complete failure
**Fix:** Add retry mechanism with exponential backoff
**Files:** `app/page.tsx`

### Step 5: Improve Mobile UX
**Issue:** Buttons too small on mobile, cards not optimized
**Fix:** Better touch targets, improved spacing, loading states
**Files:** `app/globals.css`, `components/QuoteCard.tsx`

## Implementation Order

Each step will be committed individually:
1. `fix: add missing custom color classes to tailwind config`
2. `fix: improve share menu positioning and mobile support`
3. `fix: add router navigation to saved page`
4. `fix: add API retry logic with exponential backoff`
5. `fix: optimize mobile UX with better touch targets`

## Expected Results

After all fixes:
- ✅ All colors display correctly
- ✅ Share menu works on all screen sizes
- ✅ Navigation works properly
- ✅ API calls more reliable
- ✅ Better mobile experience
