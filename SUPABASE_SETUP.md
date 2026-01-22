# Supabase Environment Variables Setup

## ✅ Current Status

Your site has been redeployed with Supabase credentials from your local `.env` file. The build process now includes your Supabase URL and API key.

## 🔧 If You Want to Use GitHub Actions (Optional)

If you want to use GitHub Actions for automated deployment instead of `npm run deploy`, you need to set up GitHub Secrets:

### Step 1: Add Secrets to GitHub

1. Go to your repository: https://github.com/michelcorp/portofolio_v5
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add these two secrets:

   **Secret 1:**
   - Name: `VITE_SUPABASE_URL`
   - Value: `https://xjjavzszqzkrtfsfxise.supabase.co`
   - Click **Add secret**

   **Secret 2:**
   - Name: `VITE_SUPABASE_ANON_KEY`
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqamF2enN6cXprcnRmc2Z4aXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwOTYwOTcsImV4cCI6MjA3OTY3MjA5N30.mTxU1l8a-zbVQdVw2MVO5xrQXhdvyQ5ExYtAhevgrQo`
   - Click **Add secret**

### Step 2: Switch to GitHub Actions Deployment

1. Go to **Settings** → **Pages**
2. Under **Source**, select: **GitHub Actions**
3. Now every push to `main` will automatically build and deploy with the correct environment variables

## 📝 Current Deployment Method

You're currently using **"Deploy from a branch"** method:
- When you run `npm run deploy`, it builds locally using your `.env` file
- The built files (with Supabase credentials baked in) are pushed to the `gh-pages` branch
- This method works fine and your Supabase connection should now be working!

## 🔍 Verify Supabase Connection

After deployment, check your browser console (F12) on your live site:
- If you see errors about missing Supabase URL/Key, the environment variables weren't included
- If you see no errors, Supabase should be connected

## ⚠️ Important Notes

1. **Supabase Anon Key is Public**: The anon key is safe to include in client-side code - it's designed to be public. However, Row Level Security (RLS) policies in Supabase protect your data.

2. **Email Functionality**: If emails aren't working, check:
   - Supabase email settings in your project dashboard
   - Email templates and SMTP configuration
   - Check Supabase logs for email sending errors

3. **Profile Not Showing**: If your profile isn't showing:
   - Check browser console for errors
   - Verify your Supabase tables have the correct data
   - Check RLS policies allow public read access

## 🚀 Next Steps

1. **Test your deployed site**: Visit `https://michelcorp.github.io/portofolio_v5/`
2. **Check browser console**: Open DevTools (F12) and look for any Supabase errors
3. **Verify data**: Make sure your Supabase tables have the correct data and RLS policies

If you're still having issues, check:
- Supabase project is active and running
- RLS policies are set correctly
- Your Supabase URL and key are correct

