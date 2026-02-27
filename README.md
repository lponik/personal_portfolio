# Portfolio Site (Astro + React/Preact + Tailwind)

Personal portfolio built with Astro, React/Preact islands, Tailwind CSS, Framer Motion, GSAP, and Lucide icons.

## 1. Getting Started

### Requirements

- Node.js 18+ (recommended: latest LTS)
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build production

```bash
npm run build
npm run preview
```

## 2. Current Page Structure

The homepage is assembled in `src/pages/index.astro` in this order:

1. Header
2. Hero
3. About
4. Experience
5. Skills
6. Projects

Contact/footer components exist in the repo but are currently not rendered on the page.

## 3. Project Structure (What Each Folder Does)

```text
portfolio/
├── public/
│   └── assets/                # Static files (avatar, resume, project svgs)
├── src/
│   ├── components/
│   │   ├── react/             # Main UI sections (Header, Hero, About, etc.)
│   │   ├── preact/            # Preact islands (e.g., contact form)
│   │   └── ContactSection.astro
│   ├── data/                  # Editable content data
│   │   ├── profile.ts
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   └── projects.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── README.md
```

## 4. How to Edit in the Future

### A) Update personal info, links, nav labels

Edit `src/data/profile.ts`.

Use this file for:

- name and hero text (`name`, `heroDisplayName`, `greeting`, `titleLine`, `subtitleLine`)
- nav items (`navLinks`)
- social links (`heroSocialLinks`)
- resume path (`resumePath`)
- avatar path (`avatarPath`)

### B) Update experience entries

Edit `src/data/experience.ts`.

Each item has:

- `company`
- `role`
- `location`
- `period`
- `highlights` (bullet list)

### C) Update skills

Edit `src/data/skills.ts`.

Current groups:

- `languages`
- `frameworks`
- `infrastructureTools`

These are rendered through `skillGroups`.

### D) Update projects

Edit `src/data/projects.ts`.

Each project supports:

- `title`
- `slug`
- `description`
- `liveUrl`
- `techIcons` (metadata only right now)
- `isUnderDevelopment` (optional)

### E) Change layout/section UI

Edit files in `src/components/react/`:

- `Header.tsx`
- `Hero.tsx`
- `About.tsx`
- `Experience.tsx`
- `Skills.tsx`
- `Projects.tsx`

To add/remove section order, edit `src/pages/index.astro`.

### F) Change theme/colors

Edit `src/styles/global.css`:

- `--primary`
- `--accent`
- background gradients and shared custom classes

Tailwind color tokens are mapped in `tailwind.config.mjs`:

- `primary: var(--primary)`
- `accent: var(--accent)`

### G) Replace images/assets

Drop files in `public/assets/` and update paths in data files (usually `src/data/profile.ts` and `src/data/projects.ts`).

## 5. Notes on Integrations

- Astro config: `astro.config.mjs`
- Tailwind config: `tailwind.config.mjs`
- React components are loaded as islands via Astro directives (`client:load`, `client:visible`)

## 6. Deployment

After building, deploy the generated `dist/` folder to any static host:

- Vercel
- GitHub Pages
- Netlify
