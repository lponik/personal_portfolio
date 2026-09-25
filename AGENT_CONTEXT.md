# Agent Context

This file is the practical onboarding guide for agents changing this repository. It describes the code as scanned on **2026-09-25** at commit `9bb863f` (`main`, synchronized with `origin/main`). Prefer the implementation and configuration files over older prose if they disagree.

## Project at a glance

- Personal portfolio for Logan Ponik.
- Static, single-page Astro site; there is no server, API, database, authentication, or environment-variable setup.
- Production URL: `https://www.loganponik.com/`.
- Stack: Astro 5, React 19 islands, one dormant Preact island, Tailwind CSS 3, Framer Motion, GSAP, Lucide, and a canvas starfield.
- Package manager: npm (`package-lock.json` is committed).
- CI uses Node 20. Use Node 20 locally when possible.
- Deployment: GitHub Pages via `.github/workflows/deploy.yml` on pushes to `main` or manual dispatch.
- Current validation: `npm run build` succeeds. There are no test, lint, format, or type-check scripts in `package.json`.

## Repository map

```text
.
├── .github/workflows/deploy.yml  # GitHub Pages build/deploy workflow
├── public/                       # Files copied to the built site unchanged
│   ├── assets/                   # Headshot, resume, and legacy SVG artwork
│   └── robots.txt                # Points crawlers to the custom-domain sitemap
├── src/
│   ├── components/
│   │   ├── react/                # Rendered page sections and dormant React UI
│   │   ├── preact/               # Dormant contact form
│   │   ├── ui/starfield.tsx      # Full-screen animated canvas background
│   │   └── ContactSection.astro  # Dormant wrapper for the Preact form
│   ├── data/                     # Main source of editable portfolio content
│   ├── layouts/BaseLayout.astro  # HTML shell, metadata, fonts, icon CSS, starfield
│   ├── lib/utils.ts              # clsx + tailwind-merge helper
│   ├── pages/index.astro         # Only route and production section composition
│   └── styles/global.css         # Tailwind directives, tokens, and shared CSS
├── astro.config.mjs              # Integrations, custom domain, static build config
├── tailwind.config.mjs           # Theme extensions and content scan paths
├── components.json               # shadcn-compatible aliases/configuration
├── CNAME                         # `www.loganponik.com`
└── package.json                  # Commands and dependencies
```

Generated/local-only directories (`node_modules/`, `dist/`, and `.astro/`) are ignored. Do not edit them as source.

## What is actually rendered

`src/pages/index.astro` is the only route and the authoritative composition point. Its current page order is:

1. `Header` — eagerly hydrated with `client:load`
2. `Hero` — eagerly hydrated with `client:load`
3. `About` — hydrated when visible
4. `Experience` — hydrated when visible
5. `Skills` — hydrated when visible
6. `Projects` — hydrated when visible

`BaseLayout.astro` wraps that page and eagerly hydrates `StarfieldBackground`. The page is emitted as `/index.html`; the sitemap integration emits `sitemap-index.xml`.

The main runtime flow is:

```text
src/data/*.ts
    -> React section components
    -> src/pages/index.astro
    -> BaseLayout.astro (SEO/head + global background)
    -> Astro static output in dist/
```

These files exist but are **not currently imported by the production page**:

- `src/components/ContactSection.astro`
- `src/components/preact/ContactForm.tsx`
- `src/components/react/ContactOrbit.tsx`
- `src/components/react/CustomCursor.tsx`
- `src/components/react/Footer.tsx`

The contact form only performs client-side validation and clears valid input; it does not send or persist a message. Mounting it without adding a delivery mechanism would create a non-functional contact experience.

## Content sources and common changes

Keep content in `src/data/` rather than hard-coding it into components when a matching data model exists.

### Identity, navigation, and links

Edit `src/data/profile.ts` for:

- Display name, hero copy, about copy, and footer/contact copy.
- Header section links.
- Resume and headshot paths.
- GitHub, LinkedIn, email, phone, and Devpost links.

Every `navLinks[].id` must match a rendered section `id`. `Header.tsx` uses those IDs for anchors and its scroll-based active state.

The current resume has spaces and parentheses in its filename. Its `profile.resumePath` intentionally URL-encodes the space:

```text
public/assets/Lponik_Resume_2026.docx (10).pdf
/assets/Lponik_Resume_2026.docx%20(10).pdf
```

If the asset is renamed, update `profile.resumePath` in the same change and verify the built link.

### Experience

Edit `src/data/experience.ts`. Entries are rendered in array order and contain `company`, `role`, `location`, `period`, and `highlights`.

### Skills

Edit `src/data/skills.ts`. `skillGroups` controls the displayed group order. Skills render as text; the older `getSkillIcon` map is not used by the current skills section.

### Projects

Edit `src/data/projects.ts`. Entries are rendered in array order by an automatically moving, infinite carousel. `Projects.tsx` duplicates the array internally to make the loop seamless.

Project technology keys are resolved in `src/components/react/iconMaps.tsx`. Add or reuse a mapping there when introducing a new `techIcons` value. Known keys use either Devicon CSS classes or a Lucide component; unknown keys fall back to a two-character text badge.

`isUnderDevelopment` is supported by the card component, although no current project sets it. Project cards do not use image assets.

### SEO and metadata

- Page-specific title, description, keywords, canonical URL, and JSON-LD live in `src/pages/index.astro`.
- Shared Open Graph/Twitter/meta output lives in `src/layouts/BaseLayout.astro`.
- `astro.config.mjs`, the `siteUrl` in `index.astro`, `CNAME`, and `public/robots.txt` must stay aligned when the domain changes.
- The layout's fallback image still references `/assets/pfp.jpeg`, which no longer exists. The current page is safe because it explicitly passes the headshot URL as `ogImage`; any new page relying on the fallback should fix or override it.

## UI and implementation conventions

- Use Astro for page/layout composition and framework islands only where browser behavior is needed.
- React applies to `src/components/react/**` and `src/components/ui/**`; Preact applies to `src/components/preact/**`. These boundaries are configured explicitly in `astro.config.mjs`.
- The `@/*` alias points to `src/*`.
- Use `client:load` only for above-the-fold or immediately interactive UI. Existing below-the-fold sections use `client:visible`.
- Framer Motion handles reveal, menu, hover, and carousel animation. GSAP is dynamically imported by `Hero.tsx` solely for the rotating orbital trails.
- Lucide supplies UI/social icons. Project technology logos mostly come from the externally loaded Devicon stylesheet in `BaseLayout.astro`.
- Global design tokens are CSS variables in `src/styles/global.css`; Tailwind maps `primary` and `accent` to those variables.
- Current visual language: near-black space background, animated white starfield, blue gradient accents, rounded dark cards, subtle borders, Poppins body text, and Ubuntu headings.
- `.section-shell` caps content at `1100px` with `1rem` side gutters. The sticky header is `7rem` high, and sections use `scroll-mt-28` to match anchor scrolling.
- Preserve semantic elements, `aria-label`s on icon-only controls, and visible focus behavior when changing interactive UI.

## Assets and external runtime dependencies

Currently referenced local assets:

- `public/assets/lponik-headshot.jpg`
- `public/assets/Lponik_Resume_2026.docx (10).pdf`

The SVGs under `public/assets/logos/`, `public/assets/projects/`, plus `avatar.svg` and `contact-figure.svg`, are legacy/unreferenced in the current render. Confirm intended reuse before building new behavior around them.

The browser loads Google Fonts and Devicon CSS from external CDNs in `BaseLayout.astro`. The page still renders if they fail, but typography and project technology icons can degrade.

## Deployment truth

The current production configuration is custom-domain, root-path deployment:

- `astro.config.mjs`: `site: "https://www.loganponik.com"`, `base: "/"`
- `CNAME`: `www.loganponik.com`
- `public/robots.txt`: custom-domain sitemap URL
- Git remote: `https://github.com/lponik/personal_portfolio.git`
- Workflow: npm cache -> `npm ci` -> `npm run build` -> upload `dist/` -> deploy Pages

The deployment section in `README.md` still describes the old `lponik.github.io/personal_portfolio/` base path. Do not copy that old configuration back into Astro unless the hosting strategy is intentionally changed. Also note that the root-level `CNAME` is not copied by Astro into `dist/`; the custom domain therefore needs to remain configured in GitHub Pages settings unless `CNAME` is moved or copied into `public/` as part of a deliberate deployment change.

## Validation checklist

For normal content or UI work:

```bash
npm ci            # clean install; npm install is fine for intentional dependency updates
npm run dev       # local development server
npm run build     # required production validation
npm run preview   # optional review of the static build
```

There is currently no automated test suite. After a visual change, manually check at least:

- Desktop and mobile header/menu behavior.
- Anchor scrolling and active navigation state.
- Hero orbit sizing (the largest ring is `430px`, so narrow screens deserve attention).
- Project carousel continuity, technology tooltips, and external links.
- Resume download and headshot/metadata image paths.
- Browser console for hydration errors.

The latest build completed successfully with only an informational warning that the local Browserslist dataset is out of date.

## Known gaps and cleanup opportunities

These are observations, not instructions to change scope opportunistically:

- `README.md` contains stale custom-domain/deployment information and says project tech icons are metadata-only, but the current cards render them.
- The contact, footer, orbit, and custom cursor implementations are dormant.
- The Preact integration exists only for the dormant contact form.
- Several legacy SVG project/logo assets are unused.
- `class-variance-authority` is installed but not referenced in `src/`.
- `getSkillIcon` and much of its icon map are currently unused.
- No reduced-motion behavior is implemented for the canvas, orbital motion, reveal animations, or carousel.
- No test/lint/format/type-check command is defined.

## Working rules for future agents

1. Run `git status --short --branch` before editing and preserve unrelated user changes.
2. Read `src/pages/index.astro` before assuming a component is live.
3. Make content-only updates in `src/data/` whenever possible.
4. Keep domain metadata, sitemap/robots, and deployment configuration consistent.
5. Do not commit generated `dist/`, `.astro/`, `node_modules/`, or `.DS_Store` content.
6. Avoid adding client-side hydration to static content without a concrete interaction need.
7. Run `npm run build` before handoff and report any manual checks that remain.
8. Update this file when architecture, routes, data ownership, deployment, or validation commands materially change.

## Recent direction

Recent commits have focused on portfolio content rather than a broad architecture rewrite:

- Updated and renamed the 2026 resume.
- Added the `researchpp` project and adjusted project/technology metadata.
- Updated internship experience copy.
- Replaced the older profile image.
- Earlier work added the starfield, expanded SEO metadata, project icon rendering, and the custom-domain configuration.

At the time of this scan, `main` matched `origin/main` and the worktree was clean before this documentation file was added.
