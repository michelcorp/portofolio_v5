# Deployment Guide - GitHub

This guide covers multiple ways to deploy your portfolio using GitHub.

## 🚀 Deployment Options

### ⚡ Quick Start: Deploy Using Dist Folder (Simplest Method)

This is the easiest way - just build locally and deploy the `dist` folder:

#### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

#### Step 2: Deploy

I've already added a deploy script to your `package.json`. Just run:

```bash
npm run deploy
```

This will:
1. Build your project (creates/updates `dist` folder)
2. Deploy the `dist` folder contents to the `gh-pages` branch
3. Your site will be live automatically!

#### Step 3: Enable GitHub Pages

1. Go to your repository → **Settings** → **Pages**
2. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
3. Click **Save**

Your site will be available at: `https://yourusername.github.io/Portofolio_V5/`

**Note:** Every time you make changes, just run `npm run deploy` again!

---

### Option 1: GitHub Pages (Free, Automated via GitHub Actions)

GitHub Pages provides free hosting directly from your GitHub repository.

#### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: `GitHub Actions` (recommended) or `Deploy from a branch`
   - If using branch deployment: Select branch `gh-pages` and folder `/ (root)`

#### Step 2: Configure Base Path (if needed)

If your repository name is not your username (e.g., `username.github.io`), you need to set a base path:

1. Open `vite.config.js`
2. Uncomment and update the base path:
   ```javascript
   base: process.env.NODE_ENV === 'production' ? '/Portofolio_V5/' : '/',
   ```
   Replace `Portofolio_V5` with your actual repository name.

#### Step 3: Set Environment Variables (if needed)

If your build requires environment variables (like Supabase keys):

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add your secrets:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Update `.github/workflows/deploy.yml` to use these secrets:
   ```yaml
   env:
     VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
     VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
   ```

#### Step 4: Push to GitHub

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

The GitHub Action will automatically build and deploy your site. Your site will be available at:
- `https://yourusername.github.io/Portofolio_V5/` (if using subdirectory)
- `https://yourusername.github.io/` (if repository is `username.github.io`)

---

### Option 2: Vercel (Recommended for React Apps)

Vercel offers excellent performance and automatic deployments from GitHub.

#### Step 1: Connect Repository to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings

#### Step 2: Configure Build Settings

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### Step 3: Add Environment Variables

1. In Vercel project settings, go to **Environment Variables**
2. Add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

#### Step 4: Deploy

Click **Deploy**. Vercel will automatically deploy on every push to your main branch.

Your site will be available at: `https://your-project-name.vercel.app`

---

### Option 3: Netlify

Netlify is another excellent option for React deployments.

#### Step 1: Connect Repository to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click **Add new site** → **Import an existing project**
3. Select your GitHub repository

#### Step 2: Configure Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `dist`

#### Step 3: Add Environment Variables

1. Go to **Site settings** → **Environment variables**
2. Add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

#### Step 4: Deploy

Click **Deploy site**. Netlify will automatically deploy on every push.

Your site will be available at: `https://your-project-name.netlify.app`

---

## 📝 Important Notes

1. **Environment Variables**: Never commit `.env` files. Use GitHub Secrets, Vercel/Netlify environment variables instead.

2. **Base Path**: If deploying to a subdirectory on GitHub Pages, make sure to update the `base` path in `vite.config.js`.

3. **Router Configuration**: If using React Router, ensure your router is configured for the base path:
   ```jsx
   <BrowserRouter basename={import.meta.env.BASE_URL}>
   ```

4. **Custom Domain**: All platforms support custom domains. Check their respective documentation for setup.

---

## 🐛 Troubleshooting

### GitHub Pages 404 Errors

- Check that the base path in `vite.config.js` matches your repository name
- Ensure the GitHub Action workflow completed successfully
- Check the Actions tab for any build errors

### Environment Variables Not Working

- Ensure variables are prefixed with `VITE_` for Vite to access them
- Restart the build after adding new environment variables
- Check that secrets are correctly set in GitHub/Vercel/Netlify

### Build Failures

- Check Node.js version compatibility
- Ensure all dependencies are installed correctly
- Review build logs in the Actions/Deployments tab

---

## 🎉 Success!

Once deployed, your portfolio will be live and accessible to the world!

For questions or issues, check the platform-specific documentation:
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)

