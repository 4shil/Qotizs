# Get Your API Ninjas Key (Free)

## Quick Steps

### 1. Visit API Ninjas
Go to: https://api-ninjas.com/register

### 2. Sign Up (Free)
- Enter your email
- Create a password
- Verify your email

### 3. Get Your API Key
- Log in to your dashboard
- Copy your API key from the main dashboard page
- It will look like: `aBcDeFgHiJkLmNoPqRsTuVwXyZ123456789`

### 4. Add to Project

Edit `/home/ubuntu/clawd/quotes-app/.env.local`:

```bash
NEXT_PUBLIC_API_NINJAS_KEY=paste_your_actual_key_here
```

Replace `your_api_key_here` with the actual key you copied.

### 5. Restart Development Server

```bash
cd /home/ubuntu/clawd/quotes-app
# Stop current server (Ctrl+C)
npm run dev
```

### 6. Deploy to Vercel

Add the API key to Vercel environment variables:

1. Go to: https://vercel.com/4shils-projects/quotes-app/settings/environment-variables
2. Click **Add New**
3. Name: `NEXT_PUBLIC_API_NINJAS_KEY`
4. Value: Your actual API key
5. Select: **Production**, **Preview**, and **Development**
6. Click **Save**
7. Redeploy: `vercel --prod`

## Free Tier Limits

API Ninjas free tier includes:
- **50,000 API calls per month**
- More than enough for a quote app!
- No credit card required

## API Documentation

Full API docs: https://api-ninjas.com/api/quotes

### Available Categories
- age
- alone
- amazing
- anger
- architecture
- art
- attitude
- beauty
- best
- birthday
- business
- car
- change
- communication
- computers
- cool
- courage
- dad
- dating
- death
- design
- dreams
- education
- environmental
- equality
- experience
- failure
- faith
- family
- famous
- fear
- fitness
- food
- forgiveness
- freedom
- friendship
- funny
- future
- god
- good
- government
- graduation
- great
- happiness
- health
- history
- home
- hope
- humor
- imagination
- inspirational
- intelligence
- jealousy
- knowledge
- leadership
- learning
- legal
- life
- love
- marriage
- medical
- men
- mom
- money
- morning
- movies
- success

Use any of these in the app's category filter!
