# عدسة (3ada)

**عدسة** is an Arabic-language photography blog built as a single-page application. It presents articles, categories, and team information in a dark, RTL-first interface. The app is a **frontend-only** project powered by **React**, **Vite**, **React Router**, and **Tailwind CSS**, with blog content served from a local JSON data file.

**Repository:** [github.com/Abdelrahmanahmeed/3adsaProject](https://github.com/Abdelrahmanahmeed/3adsaProject)

---

## Overview

عدسة (tagline: *عالم التصوير الفوتوغرافي*) is a photography-focused blog that helps users discover tutorials, tips, and articles across topics such as lighting, portraits, landscapes, techniques, and gear.

This is an **educational / portfolio frontend project** — there is no backend server, database, or user authentication. All article data lives in `src/Data/Posts.json`, and the UI is fully client-rendered.

---

## Features

### Home

- Hero section with site branding and calls to action
- Site statistics derived from local post and category data
- Featured articles section (top 3 featured posts)
- Category cards linking to filtered blog views
- Recent articles grid
- Newsletter signup form with client-side success feedback (SweetAlert2)

### Blog

- Full article listing with search by title and excerpt
- Category filtering via URL query parameters (`/blog?category=...`)
- Grid and list view toggle
- Client-side pagination (6 articles per page)
- Empty state with filter reset

### Article Details

- Dynamic routes by article slug (`/blog/:slug`)
- Hero image, metadata, and author information
- Markdown-style content rendering (`##` headings parsed into sections)
- Auto-generated table of contents with in-page anchor links
- Tags, share buttons (UI), and author card
- Related articles section
- Graceful handling when an article is not found

### About

- Mission statement and value highlights
- Team member grid (28 members with local images)
- Contact call-to-action (`mailto:hello@adasah.com`)

### Navigation & Layout

- Shared layout with fixed navbar and footer
- Active route highlighting
- Mobile-responsive navigation menu
- Custom 404 page with quick links to main sections

### UI / UX

- Right-to-left (RTL) layout for Arabic content
- Dark theme with orange accent styling
- Responsive layouts using Tailwind breakpoints (`sm`, `md`, `lg`)
- Hover transitions, gradients, and subtle animations
- Sticky blog filter bar and sticky article sidebar on large screens

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Build tool | Vite 7 |
| Routing | React Router DOM 7 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Icons | React Icons |
| Notifications | SweetAlert2 |
| Linting | ESLint 9 (flat config) |
| Language | JavaScript (JSX) |

---

## Project Structure

```text
3ada/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── imgaes/          # Logo and team member images
│   │   └── Logo.png
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── TeamMembersCards.jsx
│   ├── Data/
│   │   └── Posts.json       # Posts, categories, and site metadata
│   ├── Pages/
│   │   ├── AboutUs.jsx
│   │   ├── BlogDetails.jsx
│   │   ├── Blogs.jsx
│   │   ├── Home.jsx
│   │   └── PageNotFound.jsx
│   ├── App.jsx              # Routes and main layout
│   ├── main.jsx             # App entry point
│   └── index.css            # Tailwind import
├── index.html
├── vercel.json              # SPA rewrite rules for deployment
├── vite.config.js
├── eslint.config.js
└── package.json
```

| Directory | Purpose |
|-----------|---------|
| `src/Pages/` | Route-level page components |
| `src/components/` | Reusable UI (navbar, footer, team cards) |
| `src/Data/` | Static JSON content for posts and site info |
| `src/assets/` | Local images (logo, team photos) |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Abdelrahmanahmeed/3adsaProject.git
cd 3adsaProject
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

No environment variables are required. The application runs entirely on static data and does not use `.env` configuration.

### 4. Run the development server

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Development | `npm run dev` | Start Vite dev server with hot module replacement |
| Build | `npm run build` | Create a production build in `dist/` |
| Preview | `npm run preview` | Serve the production build locally |
| Lint | `npm run lint` | Run ESLint across the project |

---

## Data Sources

The app does not call a REST API or backend service. Content is loaded from:

| Source | Usage |
|--------|-------|
| `src/Data/Posts.json` | 28 blog posts, 5 categories, and site metadata |
| [Unsplash](https://unsplash.com) | Remote images for article covers and author avatars |
| `src/assets/imgaes/` | Local team member and logo images |

Post fields include `slug`, `title`, `excerpt`, `content`, `category`, `author`, `image`, `date`, `readTime`, `featured`, and `tags`.

---

## Architecture / Technical Notes

- **SPA routing** — `BrowserRouter` wraps the app; nested routes use a shared `MainLayout` (navbar + outlet + footer).
- **Static data layer** — Pages import `Posts.json` directly; filtering, search, and pagination are handled in component state.
- **URL-driven filters** — Blog category selection syncs with `useSearchParams` for shareable filtered URLs.
- **Content rendering** — `BlogDetails` parses plain-text content lines starting with `## ` into headings and builds a table of contents from them.
- **Component state** — Local `useState` manages UI state (search, pagination, view mode, mobile menu, newsletter input); no global state library is used.
- **RTL layout** — `dir="rtl"` is set at the app root for Arabic reading direction.

---

## Responsive Design

Layouts adapt across screen sizes using Tailwind responsive utilities:

- **Mobile** — Single-column grids, collapsible navigation menu, stacked forms and CTAs
- **Tablet (`md`)** — Multi-column grids, horizontal filter bars, list-view article layouts
- **Desktop (`lg`)** — Wider article grids, sticky sidebar on blog detail pages, expanded navigation

---

## Accessibility

Practices visible in the codebase include:

- Semantic elements (`main`, `article`, `nav`, `footer`, `section`)
- `alt` text on images
- `aria-label` attributes on footer social links
- `required` attribute on the home page newsletter email input
- Visible focus styles on form inputs (`focus:border-orange-500`)

---

## Screenshots

<!-- Add screenshots here when available -->

_Screenshots can be added to showcase the home page, blog listing, and article detail views._

---

## Deployment

The project includes a `vercel.json` configuration for client-side routing (all non-file routes rewrite to `index.html`), which is suitable for hosting on [Vercel](https://vercel.com) or similar static hosting platforms.

A live deployment URL is not defined in the repository.

---

## Project Status

This appears to be a **completed educational / portfolio frontend project** with a full set of pages and static content. Newsletter and footer subscription forms provide UI feedback only and do not persist data to a server.
