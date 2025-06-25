# 📝 BlogIT - A Simple Blog App

A minimal blog application built using **Next.js + React** with local storage for persistence. Create, view, search, and delete blog posts with a clean and modern blue-gold themed UI.

---

## 🚀 Features

- ✅ **Home Page**
  - Lists all blog posts (from localStorage or mock data)
  - Search functionality to filter posts by title
  - Card layout with title, short description, and "Read More" link

- ✅ **Blog Details Page**
  - View full content of a selected post
  - Dynamic route using `/blog/[id]`
  - Styled with a responsive, elegant UI

- ✅ **Create Post Page**
  - Form with Title, Description, and Content inputs
  - Stores data in localStorage (no backend)
  - Redirects to homepage after submission

- ✅ **Feedback Form**
  - Simple form for collecting user feedback
  - Headings instead of placeholders
  - Redirects to home after submit

- ✅ **Navigation**
  - Header with links to Home, Create Post, Feedback
  - Consistent design using blue and golden palette

- ✅ **Delete Functionality**
  - Posts can be deleted
  - Auto-updates UI and localStorage

- ✅ **Responsive Design**
  - Mobile-friendly layout
  - Grid adjusts automatically for screen sizes

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (optional)
- Local Storage
- CSS (via `global.css` and modules) and Bootstrap

---

## 📦 Installation

```bash
git clone https://github.com/your-username/blogit.git
cd blogit
npm install
npm run dev


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
