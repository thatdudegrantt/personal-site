# Personal Site — Astro + Cloudflare Pages

Migrated from Next.js/Vercel to Astro/Cloudflare Pages bc of vercel's political beliefs.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Deploying to Cloudflare Pages

### First time setup

1. Push this repo to GitHub (keep it public or private — your choice)
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/) → Create application → Pages → Connect to Git
3. Select your repo
4. Use these build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click Save & Deploy — done!

Every push to `main` automatically redeploys.

### Enabling the Cloudflare adapter (optional)

Only needed if you add server-side routes (API endpoints, SSR pages).
For a static portfolio site you don't need it.

If you do want it later, in `astro.config.mjs`:
```js
import cloudflare from '@astrojs/cloudflare';
// ...
output: 'server',
adapter: cloudflare(),
```

## Adding GitHub links to project cards

In `src/pages/projects.astro`, find the project and uncomment/add the `github` field:

```js
{
  title: "My Project",
  // ...
  github: "https://github.com/thatdudegrantt/my-project",
}
```

- **Public repos**: visitors can browse your code ✅
- **Private repos**: card still links out, but visitors see a 404 — use sparingly

## File structure

```
src/
├── layouts/
│   └── Layout.astro        ← Navbar + theme toggle (replaces next-themes)
├── pages/
│   ├── index.astro         ← Homepage
│   ├── projects.astro      ← Projects grid ← ADD GITHUB LINKS HERE
│   ├── resume.astro        ← (migrate from src/app/resume/page.js)
│   └── contact.astro       ← (migrate from src/app/contact/page.js)
├── components/
│   ├── HomeContent.jsx     ← Framer Motion home sections
│   └── ProjectCard.jsx     ← Truncated descriptions + clickable card
└── styles/
    └── globals.css
```

## Still need to migrate

- `src/app/resume/page.js` → `src/pages/resume.astro`
- `src/app/contact/page.js` → `src/pages/contact.astro`
- `src/components/Navbar.js` → already replaced by Layout.astro's built-in navbar
- `src/components/ThemeProvideWrapper.js` → replaced by Layout.astro's inline script

Send those files when ready!
