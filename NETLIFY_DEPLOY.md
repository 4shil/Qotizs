# Deploy QuoteVerse to Netlify

## Quick Deployment (Recommended)

### Option 1: Deploy via Netlify Web Dashboard (Easiest)

1. **Go to Netlify:**
   - Visit: https://app.netlify.com/
   - Sign up or login (GitHub login is easiest)

2. **Import Project:**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your `quotes-app` repository

3. **Configure Build:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

4. **Done!**
   - Your site will be live at: `https://[random-name].netlify.app`
   - You can change the name in Site Settings

### Option 2: Deploy via CLI (From Your Machine)

If you want to deploy from command line:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Navigate to project
cd /home/ubuntu/clawd/quotes-app

# Deploy
netlify deploy --prod
```

Follow the prompts:
- Create a new site? Yes
- Site name: quotesash (or whatever you want)
- Build command: npm run build
- Publish directory: .next

## Configuration

The project already includes `netlify.toml` with proper Next.js configuration.

### Environment Variables (Optional)

If you want to add the API Ninjas key on Netlify:

1. Go to: Site Settings → Environment Variables
2. Add: `NEXT_PUBLIC_API_NINJAS_KEY` = your API key
3. Redeploy

## Why Netlify?

- ✅ No authentication issues
- ✅ Free tier is generous
- ✅ Fast global CDN
- ✅ Automatic HTTPS
- ✅ Easy to use
- ✅ Great Next.js support

## After Deployment

Once deployed, update the GitHub repository with your new URL:

```bash
# Update repo website link
gh repo edit --homepage "https://your-site.netlify.app"
```

And update README.md with the new live demo URL.
