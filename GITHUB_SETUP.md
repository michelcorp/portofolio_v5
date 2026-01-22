# Quick Setup Guide - Push to Your GitHub

## Step 1: Create Repository on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon (top right) → **New repository**
3. Repository name: `Portofolio_V5`
4. Description: (optional) "My Portfolio Website"
5. Choose: **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have files)
7. Click **Create repository**

## Step 2: Push Your Code

After creating the repository, run these commands:

```bash
git push -u origin main
```

If you get authentication errors, you may need to:
- Use a Personal Access Token instead of password
- Or set up SSH keys

## Alternative: Use GitHub CLI (if installed)

If you have GitHub CLI installed:
```bash
gh repo create Portofolio_V5 --public --source=. --remote=origin --push
```

This will create the repo and push in one command!


