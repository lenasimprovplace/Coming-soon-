# Lena's Improv Place — Coming Soon (Next.js + Tailwind)

A Next.js 14 (App Router) + Tailwind CSS version of the "coming soon" placeholder page.

## Setup

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx      — root layout, loads Google Fonts (Anton, Instrument Serif, Work Sans)
  page.tsx         — the coming-soon page itself
  globals.css      — Tailwind directives
public/
  logo.png         — Lena's Improv Place logo
tailwind.config.ts — brand colors (crimson, cream, olive, ink) and font mappings
```

## Notes

- Fonts are loaded via `next/font/google`, which self-hosts them at build time (faster, no external request at runtime, unlike the original static HTML version which loaded fonts live from Google Fonts).
- The logo is a real image file in `public/logo.png` instead of being embedded as base64, which keeps the page code cleaner and lets Next.js optimize it automatically via `next/image`.
- Brand colors are defined in `tailwind.config.ts` as `crimson`, `cream`, `olive`, and `ink` — use them as Tailwind utility classes (e.g. `bg-crimson`, `text-olive`).

## Build for production

```bash
npm run build
npm start
```

Deploys cleanly to Vercel, Netlify, or any Node hosting.
