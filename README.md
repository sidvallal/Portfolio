# Siddharth Vallal — Portfolio

A dark-mode developer portfolio for generative AI and agentic systems work.
Built with React, Vite, Tailwind CSS, and Framer Motion — same stack as the
reference project this was modeled on.

## Tech stack

- **React 18** — functional components + hooks only
- **Vite 5** — dev server and build tooling
- **Tailwind CSS 3** — utility-first styling with custom design tokens
- **Framer Motion 11** — a single orchestrated hero entrance animation
- **React Icons** — GitHub / mail / external-link icons

## Getting started

```
npm install
npm run dev
```

Dev server runs at `http://localhost:5173`.

```
npm run build
npm run preview   # preview the production build locally
```

## Before you publish — fill these in

This ships with real content where I had it, and clearly marked
placeholders where I didn't:

- **`src/data/projects.js`** — your `DSA` repo is in as one project. The
  other two are placeholders — replace them with real generative AI /
  agentic AI projects (title, description, tech, GitHub + live links).
- **`src/data/education.js`** — placeholder degree/institution. Fill in
  your actual college, degree, and years.
- **`src/data/skills.js`** — a starting skill list based on your target
  role and the reference stack. Edit freely.
- **`src/data/profile.js`** — add your LinkedIn URL to `socialLinks`.
  GitHub and email are already set.
- **`public/resume.pdf`** — not included. Add your resume here if you
  want a resume link wired up later.

## Project structure

```
src/
  components/
    layout/     Navbar, Footer
    hero/       Hero section (the one animated entrance)
    about/      About section
    skills/     Skills section
    projects/   Project cards
    education/  Education section
    contact/    Contact section
  data/         All editable content lives here
  styles/
    globals.css Tailwind layers + design tokens (colors, type)
```

## Design notes

Palette and type are set in `tailwind.config.js`: a deep indigo-black
background (`ink`), a warm amber "signal" accent, a violet "ion" accent,
Fraunces for display headings, IBM Plex Sans for body copy, and IBM Plex
Mono for the terminal-style labels (`$ whoami`, `$ ls projects/`) that
tie the visual language to the subject matter — an engineer who works
with agents and command-line tools. Motion is intentionally limited to
one staggered entrance in the hero; everything else is static or answers
a hover/click.

## Deploying

Works out of the box on Vercel, Netlify, or any static host that
supports a Vite build:

```
npm run build
```

Deploy the `dist/` folder.
