

# Mbote Foundation — Fixes & Page Enhancements

## Fix 1 — Mobile Navbar
Update `Navbar.tsx`: solid `bg-[#0A0A0A]` overlay, `text-2xl py-4` links, `border-t border-border` on container, X button size 28, full-width CTA with `mt-10`.

## Fix 2 — Logo Size
- Navbar: `h-10 w-10 rounded-sm`
- Footer: `h-11 w-11 rounded-sm`, add `loading="lazy"`

## Fix 3 — Enhance All Inner Pages

Each page gets the Index.tsx treatment: cinematic hero with background image + gradient overlay, multiple sections alternating `bg-background` / `bg-card`, `useScrollAnimation` on every section, Unsplash images of African people and innovation, mono labels, stats, pull quotes.

### About.tsx (full rewrite)
- **Hero**: Nairobi aerial bg image, headline "We exist to build the infrastructure Africa's boldest founders never had.", two CTAs
- **The Problem**: 3 large numbered pain points in grid
- **The Team**: Founder card (reuse Index.tsx style with `/john-mbote.jpeg`)
- **Our Presence**: 6 location cards with flag emojis and city names
- **What Drives Us**: 3 value icon cards with expanded descriptions
- **Closing CTA**: "Join us in building the future" with two buttons

### Ventures.tsx (full rewrite)
- **Hero**: Space/earth bg image, headline "Backing the founders who will define the next century.", metrics row (12 Sectors · $0 → Raising · 100% Profits to Mission)
- **Investment Thesis**: 3 large thesis statements (expanded from Index VenturesDeep)
- **What We Look For**: 4 criteria cards
- **How to Pitch Us**: 3-step process with connecting line
- **12-Sector Grid**: Enhanced with hover gradient
- **Closing CTA**: Large italic "Are you building something bold?"

### Builders.tsx (full rewrite)
- **Hero**: Hackathon/community bg image, headline "The community building Africa's future."
- **Why Join**: 3 impact stats (100+ Engineers · 5 Countries · 1 Mission)
- **Programs**: 4 full-width alternating image/text layouts (Hackathons, Research Labs, Incubation, Fellowships) with "Learn More →"
- **Who Should Apply**: 3 persona cards (Engineer, Researcher, Entrepreneur) with bullet lists
- **Testimonial**: Styled blockquote (labeled as illustrative)
- **Closing CTA**: "Ready to build?"

### Contact.tsx (full rewrite)
- **Hero**: Tall section with bg image, headline "Let's build together."
- **What we're looking for**: 3 cards (Co-founders, Investors, Partners) with direct links
- **Contact cards**: Redesigned WhatsApp/Email/Location with larger icons, better spacing, hover effects
- **FAQ**: 4-5 items using shadcn Accordion
- **Closing**: "Still have questions?" with WhatsApp link

### Manifesto.tsx (enhance, preserve ALL copy)
- **Cinematic hero**: Dark overlay with first line as large display quote above the article
- **Reading progress bar**: Thin gold line at top using useEffect/useState scroll listener
- **Enhanced typography**: `text-[20px]`, `leading-[1.9]`, `space-y-10`
- **Pull quote**: Mid-article decorative block around "structural, not personal" paragraph with gold border and large quotation marks
- **Share section**: Copy-link button + WhatsApp share link after closing line
- **Related footer**: Links to About and Ventures

## Fix 4 — Global Consistency
- `src/index.css`: Add `scroll-behavior: smooth` to `html`
- Footer: Ensure all internal links use `<Link>`, add `loading="lazy"` to logo
- All pages: meaningful `alt` text on images, `loading="lazy"` on below-fold images

### Files Changed

| File | Action |
|------|--------|
| `src/index.css` | Add `scroll-behavior: smooth` |
| `src/components/Navbar.tsx` | Mobile menu fixes, logo size |
| `src/components/Footer.tsx` | Logo size, lazy loading |
| `src/pages/About.tsx` | Full rewrite |
| `src/pages/Ventures.tsx` | Full rewrite |
| `src/pages/Builders.tsx` | Full rewrite |
| `src/pages/Contact.tsx` | Full rewrite |
| `src/pages/Manifesto.tsx` | Visual enhancement (copy preserved) |

No new packages. No routing changes. No shadcn component modifications.

