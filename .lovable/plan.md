

# Mbote Foundation: Obsidian & Gold Redesign

## Overview
Complete visual and structural overhaul of the Mbote Foundation website. Shifting from a green/gold/off-white light theme to a dark-only "Obsidian & Gold" identity inspired by African heritage and frontier-tech aesthetics. Adding a new Manifesto page and restructuring the homepage with 9 distinct sections.

## Scope of Changes

### 1. Design System (CSS + Tailwind Config)
- **`src/index.css`**: Replace all CSS variables with Obsidian & Gold palette (dark-only, remove `.dark` block). Add JetBrains Mono to Google Fonts import. Add ticker animation keyframes and dot-grid background utility.
- **`tailwind.config.ts`**: Add `mono: ['JetBrains Mono', ...]` to font families.
- **`src/App.css`**: Strip to just `#root { max-width: 100%; margin: 0; padding: 0; text-align: left; }` to remove the 1280px constraint.

### 2. Favicon + index.html
- Copy logo to public directory for favicon use.
- Add `<link rel="icon">` and `<link rel="apple-touch-icon">` pointing to `/mbote-logo.png`.

### 3. Navbar (`src/components/Navbar.tsx`)
- Dark translucent background (`rgba(10,10,10,0.85)`) with `backdrop-blur-xl`.
- Updated nav links: About, Our Structure, Ventures, Builders, Manifesto, Contact.
- Add "PRE-LAUNCH" badge (mono, tiny, border pill) on desktop.
- Gold CTA button: "Build With Us →".
- Mobile: full-screen dark overlay menu.
- Logo: `h-9 w-9 object-contain`, no brightness filter.

### 4. Footer (`src/components/Footer.tsx`)
- `bg-[#080808]` with `border-t border-[#1E1E1E]`.
- 4 columns: Organization, Programs, Locations, Connect.
- Pre-launch tagline in JetBrains Mono.
- Social icons: `#555` default, `#C9A227` on hover.
- Bottom bar with copyright, italic vision line, socials.

### 5. Homepage (`src/pages/Index.tsx`) — Full Rewrite (9 Sections)
1. **Hero**: NASA stars background (Unsplash), gradient overlay fading to `#0A0A0A`. Gold italic "built from Africa." headline. Eyebrow in mono. Pulsing pre-launch status badge.
2. **Scrolling Ticker**: Infinite horizontal scroll of focus areas in gold mono text.
3. **Founder's Story**: Two-column — founder card with photo placeholder + quote on left, story timeline on right (4 milestones).
4. **Structure Explainer**: Inline SVG diagram showing Foundation → Mission Programs and Foundation ↔ Ventures relationship. Two-column detail cards below.
5. **Focus Areas**: 8 cards with Unsplash images, gold dot accent, hover effects.
6. **Vision Timeline**: Dot-grid background, 4 milestone cards (2025-2040) with "NOW" badge.
7. **Mbote Ventures Deep Section**: Deep green-black bg, Earth-from-space image, 3 thesis statements, gold CTA.
8. **Builders Community**: 4 program cards with images (Hackathons, Research Labs, Startup Incubation, Fellowships).
9. **Honest Pitch**: 3-column layout (What exists / What we need / What you get), followed by a large founder quote block.

### 6. New Page: Manifesto (`src/pages/Manifesto.tsx`)
- Route: `/manifesto` added to `App.tsx`.
- Long-form editorial page, pure typography, `max-w-[680px]`.
- Drop cap first letter in gold.
- 6 paragraphs in John's first-person voice covering: the admission, the failure, the realization, the blueprint, the honest ask, the close.
- Final gold line: "If this letter found you — it was meant to."
- CTA linking to `/contact`.

### 7. Existing Pages — Theme Update
- **About** (`src/pages/About.tsx`): Replace light backgrounds with `#0A0A0A` / `#111111`, update text colors, card borders.
- **Ventures** (`src/pages/Ventures.tsx`): Same dark treatment, gold accents on icons.
- **Builders** (`src/pages/Builders.tsx`): Dark cards, gold CTAs.
- **Contact** (`src/pages/Contact.tsx`): Dark cards, gold/ghost buttons.
- **App.tsx**: Add `/manifesto` route.

### 8. File Summary

| File | Action |
|------|--------|
| `src/index.css` | Rewrite CSS variables, add fonts, add ticker keyframes |
| `src/App.css` | Simplify to remove layout constraints |
| `tailwind.config.ts` | Add mono font family |
| `index.html` | Add favicon links |
| `src/components/Navbar.tsx` | Full redesign |
| `src/components/Footer.tsx` | Full redesign |
| `src/pages/Index.tsx` | Full rewrite (9 sections) |
| `src/pages/Manifesto.tsx` | New file |
| `src/pages/About.tsx` | Theme update |
| `src/pages/Ventures.tsx` | Theme update |
| `src/pages/Builders.tsx` | Theme update |
| `src/pages/Contact.tsx` | Theme update |
| `src/App.tsx` | Add manifesto route |

