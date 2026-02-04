
# SysAgen Lab Landing Page - Deployment Guide

This project is a high-conversion landing page built with React and Tailwind CSS using modern ESM Import Maps. It requires **no build step**, making it incredibly easy to deploy.

## 🚀 Option 1: Vercel (Highly Recommended)
Vercel is the gold standard for hosting React applications.
1. Create a GitHub repository and push your code there.
2. Log in to [Vercel](https://vercel.com).
3. Click "Add New" -> "Project".
4. Import your GitHub repository.
5. **Important:** Since this project uses direct ESM, set the **Framework Preset** to `Other` or `None`.
6. Click "Deploy". Vercel will give you a production URL instantly.

## 📦 Option 2: Netlify (Fastest)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the entire project folder into the browser.
3. Your site is live in 10 seconds.

## 🐙 Option 3: GitHub Pages
1. Push your code to a GitHub repository.
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment**, select `Deploy from a branch`.
4. Select the `main` branch and `/ (root)` folder.
5. Save. Your site will be live at `https://your-username.github.io/your-repo-name/`.

## 🛠 Features Included
- **Zero Build:** Uses Import Maps for native browser module loading.
- **Tailwind CSS:** CDN-based for instant styles without configuration.
- **SEO Optimized:** Full Open Graph support for social media sharing.
- **Responsive:** Mobile-first dark futuristic theme.
