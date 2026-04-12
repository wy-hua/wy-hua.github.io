# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Type-check (tsc -b) then bundle for production
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

## Architecture

This is a static React + TypeScript + Vite SPA for a Chinese-speaking church (East Hills West Chinese Church) in Buffalo, NY.

**Routing:** Uses React state (`page` useState in `App.tsx`) for navigation — not react-router-dom (installed but unused). Page transitions manually call `window.scrollTo(0, 0)`.

**Internationalization:** Custom i18n with 3 languages (zh-TW, zh-CN, en). All translations live in `src/i18n/translations.ts`. The `Lang` type and per-component `t` lookup pattern are consistent throughout.

**Theming:** Dark/light mode via CSS custom properties in `src/index.css`. System preference is detected on load; user override stored in localStorage. Component styles live in `src/App.css`.

**Data:** All content is static TypeScript — sermons in `src/data/sermons.ts`, library catalog in `src/data/library.ts`. The sermon file has intentional comments guiding non-developers on how to add entries.

**Types:** Shared types (`Page`, `Lang`, `Sermon`) are defined in `src/types.ts`.

**Component props** all use inline interfaces. Components receive `lang` (and sometimes `setPage`/`nav`) from `App.tsx`. Translations are NOT passed as props — each component imports `T` from `src/i18n/translations.ts` and derives `const t = T[lang]` locally. The `nav` array in `T[lang].nav` is indexed in the same order as the `pages` array in `Nav.tsx`.

# Gstack

 says to use the /browse skill from gstack for all web browsing, never use mcp__claude-in-chrome__* tools, and lists the available skills: /office-hours, /plan-ceo-review, /plan-eng-review, /plan-design-review, /design-consultation, /design-shotgun, /design-html, /review, /ship, /land-and-deploy, /canary, /benchmark, /browse, /connect-chrome, /qa, /qa-only, /design-review, /setup-browser-cookies, /setup-deploy, /retro, /investigate, /document-release, /codex, /cso, /autoplan, /careful, /freeze, /guard, /unfreeze, /gstack-upgrade, /learn. Then ask the user if they also want to add gstack to the current project so teammates get it.

