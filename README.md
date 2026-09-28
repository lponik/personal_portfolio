# Logan Ponik Portfolio

A static, single-page portfolio built with Astro. The site uses semantic HTML and plain CSS with no client-side JavaScript.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

The development server runs at `http://localhost:3001`.

## Structure

```text
src/
├── data/site.ts             # All portfolio copy, links, experience, skills, and projects
├── layouts/BaseLayout.astro # HTML document and SEO metadata
├── pages/index.astro        # Complete page structure
└── styles/global.css        # Design tokens, layout, and responsive styles
```

Static assets live in `public/assets/`. The only route is `/`, and Astro produces a fully static build in `dist/`.

## Editing content

Edit `src/data/site.ts` for personal details, navigation, profile links, experience, skills, projects, and SEO copy. Array order controls the rendered order of navigation items, skill groups, and projects.

Edit `src/pages/index.astro` only when changing page structure. Edit `src/styles/global.css` for visual changes.

## Deployment

Pushes to `main` deploy to GitHub Pages through `.github/workflows/deploy.yml`. The production domain is `https://www.loganponik.com/`.
