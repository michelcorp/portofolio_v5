# Site Not Working - Troubleshooting Guide

## ✅ What I Just Fixed

1. **Redeployed your site** - The latest build has been pushed to the `gh-pages` branch
2. **Environment variables are included** - Supabase credentials are baked into the build
3. **Base path is configured** - Set to `/portofolio_v5/` for GitHub Pages

## 🔍 Common Issues & Solutions

### Issue 1: Site Shows Blank Page or 404

**Check:**
1. Visit: `https://michelcorp.github.io/portofolio_v5/` (note the trailing slash)
2. Wait 2-5 minutes after deployment for GitHub Pages to update
3. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

**Solution:**
- Clear browser cache
- Try incognito/private mode
- Check if GitHub Pages is enabled in Settings → Pages

### Issue 2: JavaScript Errors in Console

**Check:**
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for red error messages

**Common Errors:**
- `Failed to fetch` - Network/CORS issue
- `Supabase URL and Anon Key are required` - Environment variables not loaded
- `404 Not Found` - Asset paths incorrect

### Issue 3: Supabase Not Connecting

**Symptoms:**
- Profile not showing
- Can't receive emails
- Data not loading

**Check:**
1. Open Console (F12) → Look for Supabase errors
2. Check Network tab → See if API calls are failing
3. Verify Supabase project is active in dashboard

**Solution:**
- The environment variables ARE in the build
- If still not working, check Supabase dashboard:
  - Project status
  - RLS (Row Level Security) policies
  - API settings

### Issue 4: Assets Not Loading (404 errors)

**Check:**
- Open Network tab in DevTools
- Look for failed requests (red)

**Solution:**
- The base path `/portofolio_v5/` should be correct
- If assets show 404, the base path might need adjustment

## 🚀 Quick Fixes

### Option 1: Force Redeploy
```bash
npm run deploy
```
Wait 2-5 minutes, then check the site again.

### Option 2: Check GitHub Pages Settings
1. Go to: https://github.com/michelcorp/portofolio_v5/settings/pages
2. Verify:
   - Source: `gh-pages` branch
   - Folder: `/ (root)`
3. If changed, wait 2-5 minutes

### Option 3: Verify Build Locally
```bash
npm run build
npm run preview
```
Visit `http://localhost:4173/portofolio_v5/` to test locally.

## 📋 What to Tell Me

If the site still doesn't work, please tell me:

1. **What do you see?**
   - Blank page?
   - Error message?
   - Old version of site?

2. **Browser Console Errors:**
   - Open F12 → Console tab
   - Copy any red error messages

3. **Network Errors:**
   - Open F12 → Network tab
   - Look for failed requests (red)
   - What URLs are failing?

4. **GitHub Pages Status:**
   - Go to Settings → Pages
   - What does it show? (Published/Not published)

## 🔧 Current Configuration

- **Base Path:** `/portofolio_v5/`
- **Deployment Method:** gh-pages branch
- **Environment Variables:** Included in build
- **Site URL:** `https://michelcorp.github.io/portofolio_v5/`

## ⏱️ Wait Time

After deployment, GitHub Pages can take **2-5 minutes** to update. Be patient!

