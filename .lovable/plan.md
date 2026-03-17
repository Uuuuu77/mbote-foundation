

# Three Fixes: Mobile Sidebar, Manifesto Rewrite, UI Polish

## Fix 1 — Mobile Navbar Slide-in Sidebar (`src/components/Navbar.tsx`)

Replace the current full-screen overlay with a right-side slide-in drawer:
- Fixed 280px panel sliding from the right via `translateX` with 300ms ease-in-out transition
- Separate backdrop div (`bg-black/60`) behind the panel, clickable to close
- Panel: solid `bg-[#0A0A0A]`, `border-l border-border`
- Nav links: `text-xl font-medium`, `py-5 border-b border-border`
- Logo + X button at top of sidebar
- "Build With Us →" CTA at bottom
- `useEffect` to toggle `document.body.style.overflow` on open/close
- Always render the sidebar DOM (for CSS transition), toggle via `translate-x-full` / `translate-x-0`

## Fix 2 — Manifesto Content Rewrite (`src/pages/Manifesto.tsx`)

Keep all structure, progress bar, hero layout, pull quote styling, share/related sections. Replace text only:
- Hero quote → "There is no version of this story where I stop building."
- H1 → "Why I'm Building Mbote Foundation"
- Subtitle → "A letter to anyone who has ever tried to build something and refused to wait."
- 6 new paragraphs (first keeps `drop-cap` class)
- Pull quote text → "The problem was never a lack of talent or ambition. The problem was a missing layer — and I decided to build it."
- Final gold line → "Africa's moment is not coming. It is already here. The only question is whether we build the infrastructure to support it. I have decided to build it. If this letter found you — it was not by accident."

## Fix 3 — UI/UX Polish

### `src/index.css`
- Add `line-height: 1.75` to body in `@layer base`
- Add `letter-spacing: -0.01em` to `h1, h2, h3` block
- Add `.btn-primary-hover` and `.card-hover` utility classes
- Add `.section-label` utility class

### `src/components/Navbar.tsx`
- Background: `bg-[rgba(8,8,8,0.92)]`, `backdrop-blur-2xl`
- Add `shadow-[0_1px_0_rgba(255,255,255,0.04)]`

### `src/components/Footer.tsx`
- Remove duplicate social icons from bottom bar (lines 66-70)

### `src/pages/Index.tsx`
- Add `btn-primary-hover` class to hero CTA buttons
- Pre-launch badge: text → "Pre-launch · Nairobi, Kenya · 2025", dot → `bg-primary`, remove `animate-pulse`

## Files Changed

| File | Changes |
|------|---------|
| `src/components/Navbar.tsx` | Slide-in sidebar + navbar bg polish |
| `src/pages/Manifesto.tsx` | Text content replacement only |
| `src/index.css` | Typography, utility classes |
| `src/components/Footer.tsx` | Remove duplicate social icons |
| `src/pages/Index.tsx` | Hero button classes + badge text |

