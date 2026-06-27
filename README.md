# 🚢 Diva Mutiara Logistik - Company Profile

A modern, high-performance company profile website for **PT Diva Mutiara Logistik**, a logistics and container haulage company based in Indonesia. This landing page is built to provide a stunning first impression, optimized for speed, SEO, and flawless mobile responsiveness.

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![FramerMotion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

## ✨ Features

- **Next.js (App Router)**: Utilizing modern React features for lightning-fast static generation (SSG).
- **Smooth Animations**: Integrated with `framer-motion` using `<LazyMotion>` for hardware-accelerated, stutter-free animations without bloating the initial JavaScript bundle.
- **Responsive Design**: Carefully crafted with Tailwind CSS to ensure a pixel-perfect experience across all devices (Mobile to Desktop).
- **Performance Optimized**: Images are highly compressed using WebP format, achieving high scores on PageSpeed Insights and fast Largest Contentful Paint (LCP).
- **SEO Ready**: Semantic HTML, proper meta tags, and structured data for maximum search engine visibility.
- **Automated Deployment**: Integrated CI/CD pipeline using GitHub Actions to automatically build and sync static files via FTP to cPanel.

## 🚀 Quick Start

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/companyprofiledml.git
   cd companyprofiledml
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Build for Production

This project is configured for static export (`output: 'export'` in `next.config.ts`).

```bash
npm run build
```
The optimized static files will be generated in the `out/` directory, ready to be deployed to any static hosting provider (Vercel, Netlify, cPanel, etc.).

## 🛡️ Security & Performance
- Hidden server origin via Cloudflare Proxy to prevent direct DDoS attacks.
- Enforced HTTP security headers.

---
*Designed & Developed for PT Diva Mutiara Logistik.*
