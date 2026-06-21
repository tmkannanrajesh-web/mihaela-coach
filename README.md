# Mihaela Perelighin — Career Coaching Website

A modern, responsive single-page site built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Lucide React** icons.

## 📁 Structure

```
mihaela-coach/
├── app/
│   ├── layout.tsx       ← Root layout, Inter font, metadata
│   ├── page.tsx          ← Assembles all sections
│   └── globals.css       ← Tailwind directives
├── components/
│   ├── Navbar.tsx         ← Sticky nav, mobile menu, "Book Free Call" CTA
│   ├── Hero.tsx           ← Headline + photo + stat callout
│   ├── About.tsx          ← About Me, photo + stats grid
│   ├── Services.tsx       ← 6 service cards + Discovery Call banner
│   ├── Packages.tsx       ← 3 pricing cards, "Most Popular" highlighted
│   ├── Testimonials.tsx   ← 3 testimonial cards
│   ├── Contact.tsx        ← Contact form + direct details
│   └── Footer.tsx         ← Footer + Legal Disclaimer modal
├── public/images/
│   ├── mihaela-logo.jpg
│   └── mihaela-perelighin.jpg
├── tailwind.config.js     ← Navy / Sage / Charcoal palette
├── package.json
└── vercel.json
```

This is a **single page** — "About", "Services", "Packages" etc. are anchor-linked
sections (`#about`, `#services`...) that the navbar smooth-scrolls to, not
separate routes. This matches your spec ("single-page website... smooth
scrolling navigation").

## 🎨 Design system

- **Navy** (`navy-900` / `navy-950`) — primary, headings, dark sections
- **Sage** (`sage-500` / `sage-600`) — accent, buttons, highlights
- **White** — backgrounds
- **Charcoal** — body text
- **Font**: Inter (via `next/font/google`)

All defined in `tailwind.config.js` under `theme.extend.colors`.

## 🚀 Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## 🌐 Deploy: GitHub → Vercel

```bash
git init
git add .
git commit -m "Initial commit — Mihaela Perelighin career coaching site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mihaela-coach.git
git push -u origin main
```

Then on [vercel.com](https://vercel.com): **Add New Project** → import the repo →
Framework auto-detects as **Next.js** → **Deploy**.

Every future `git push` to `main` auto-redeploys.

## ✏️ Editing content

- **Service descriptions/outcomes**: `components/Services.tsx` → `SERVICES` array
- **Package pricing/features**: `components/Packages.tsx` → `PACKAGES` array
- **Testimonials**: `components/Testimonials.tsx` → `TESTIMONIALS` array
- **Contact details**: `components/Contact.tsx` → `CONTACT_DETAILS` array, and `components/Footer.tsx`
- **Legal disclaimer text**: `components/Footer.tsx` (inside the modal markup)

## 📬 Contact form note

The form currently opens the visitor's email client with a pre-filled
message (`mailto:`) since no backend/email service is wired up. To send
form submissions server-side instead, connect a service like Resend,
Formspree, or a custom API route in `app/api/contact/route.ts`.
