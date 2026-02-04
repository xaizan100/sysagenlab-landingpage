
# SysAgen Lab Landing Page - Deployment Guide

This project is a high-conversion landing page built with React and Tailwind CSS.

## ⚠️ Troubleshooting: The "Black Screen" Issue
If you deployed to Netlify or GitHub Pages and see only a black screen:
1. **The Extension Issue**: Standard browsers cannot resolve `import App from './App'`. They need `import App from './App.tsx'`. I have updated the code to include these extensions.
2. **The TSX Limitation**: Most static hosts (like Netlify Drop) do not transpile TypeScript/JSX. They will serve your `.tsx` file as plain text, which the browser ignores.

### 🚀 Recommended Fix: Vercel or Netlify with Git
To make this work professionally, do not "drag and drop" the folder. Instead:
1. Push your code to a **GitHub Repository**.
2. Connect that repo to **Vercel** or **Netlify** via their "Import Project" dashboard.
3. They will automatically provide a build environment that handles the `.tsx` transformation.

## 🛠 Features Included
- **Zero Build (Local)**: Works instantly in development environments that support modern ESM.
- **Tailwind CSS**: CDN-based for instant styles.
- **SEO Optimized**: Full Open Graph support for social media sharing.
- **Responsive**: Mobile-first dark futuristic theme.
