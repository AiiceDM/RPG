# AGENTS.md

## What this is
A single-page Portuguese-language RPG campaign reference site (a Guild Wars 2-inspired setting, "Tyria") for a tabletop group — covers geography, peoples/ancestries, deities, and house-rule mechanics.

## Stack
- Create React App (react-scripts 5) + React 19. No router: `App.js` swaps pages by comparing a single `paginaAtual` string held in `useState`.
- Styling is plain CSS — no CSS-in-JS, CSS modules, or Tailwind. All design tokens (colors, fonts, spacing, easing) and animations live in `src/App.css` under the "Gothic Dark" design system; `src/index.css` is just a minimal reset. Reuse existing `var(--token)` values and utility classes (`.pagina-conteudo`, `.botao-voltar`, `.caixa-info`, etc.) instead of inventing new ones.
- No deployment config exists in the repo (no vercel.json/netlify.toml/CI workflow) — how/where this is deployed is unknown, don't assume a target.

## Structure
- `src/components/` — every page is one flat `.jsx` file, no subfolders. `Cabecalho.jsx` holds the nav tree (`MENUS` array) and renders on every page.
- List/detail pairs share a pattern: `Povos.jsx`↔`PovosDetalhe.jsx`, `Divindades.jsx`↔`DivindadesDetalhe.jsx`, `Capitais.jsx`↔`CapitalDetalhe.jsx`, `TalentosHabilidades.jsx`↔`TalentosDetalhe.jsx`. Each detail component looks up a sub-component from a local `COMPONENTES` map keyed by an id string passed down from `App.js`.
- `public/` is static assets only (favicon, manifest) — no content there.

## Where the content lives
There is no separate content/data layer. Lore text (histórias, heranças, blockquotes, etc.) is written directly inline as JSX in the component files themselves — heaviest in `PovosDetalhe.jsx`, `TalentosDetalhe.jsx`, `DivindadesDetalhe.jsx`, `Geografia.jsx`. Copy edits mean editing those strings in place in `src/components/`; there is nowhere else to put them.

## Conventions
- Filenames/component names are PascalCase Portuguese nouns matching the in-app page name; variables and handlers are Portuguese too (`paginaAtual`, `setPaginaAtual`, `navegar`).
- Dropdown menus are pure CSS `:hover` (`.dropdown:hover .dropdown-conteudo` in App.css), not React state — keep new nav interactivity CSS-driven unless there's a real reason for JS state.
- Region-style summary text: 2-3 short, direct sentences (Kryta's blurb in `Geografia.jsx` is the length reference). Never use em/en dashes (—) in any project copy — use a period or comma instead.
- Commit messages are Portuguese, descriptive present tense (e.g. "Adiciona ícones das habilidades core do Animus").

## Rules for you
- Don't refactor files unrelated to the task at hand.
- Don't add dependencies (router, CSS framework, state manager) without asking — the site deliberately runs on plain React state + plain CSS.
- Prefer a targeted edit over rewriting a whole file, especially the largest ones (`TalentosDetalhe.jsx` is 2000+ lines).
- Commit before starting large changes.
