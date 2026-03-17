

# Fix Mobile Sidebar + Add Contact Form

## Fix 1 — Mobile Sidebar (`src/components/Navbar.tsx`)

Full rewrite of the component. Key changes from current implementation:

- **Move backdrop and sidebar OUTSIDE the `<nav>` element** — currently they're nested inside `<nav>` which constrains their z-index stacking context. Wrap everything in a `<>` fragment instead.
- **Backdrop**: `z-[998]`, fixed, `inset-0 top-16`, `bg-black/60`, clickable to close
- **Sidebar panel**: `z-[999]`, fixed, `top-16 right-0 bottom-0`, `w-[280px]`, `bg-[#0A0A0A]` (fully opaque), `border-l border-border`
- Add a sidebar header with logo + X close button separated by `border-b border-border`
- Nav links: `text-lg font-medium`, `py-4 border-b border-white/[0.08]`
- Pre-launch badge in sidebar body
- CTA at bottom in its own `border-t border-border` section
- Smooth `translate-x` transition preserved
- `useEffect` body overflow lock preserved
- Add `setTimeout` wrapper on hash scroll for reliability

## Fix 2 — Contact Form (`src/pages/Contact.tsx`)

Insert a new `ContactForm` component and a wrapping section between the "What We're Looking For" section (line 79) and the "Contact Cards" section (line 81).

**ContactForm component** (defined before `const Contact`):
- `useState` for `submitted` boolean and `form` object (name, email, phone, company, tagline, description)
- On submit: constructs a `mailto:` URL with subject/body encoding and opens it via `window.location.href`
- Shows a success state with fallback instructions (direct email + WhatsApp links)
- Form fields: Name*, Email*, Phone, Company, Tagline, Description* — styled with `bg-card border border-border rounded-xl` inputs
- Labels use `font-mono text-[10px] tracking-widest text-primary uppercase`
- Submit button: gold primary rounded-full, full-width
- Add `useState` import (already imported via React)
- Add `useScrollAnimation` hook for the form section

**New section wrapper** inserted at line 80:
- `bg-background` section with `py-28 md:py-36`
- Section label: "GET IN TOUCH"
- Heading: "Tell us about what you're building."
- Subtitle paragraph
- `<ContactForm />` rendered inside

### Files Changed

| File | Change |
|------|--------|
| `src/components/Navbar.tsx` | Full rewrite — fragment wrapper, separated backdrop/sidebar with proper z-index |
| `src/pages/Contact.tsx` | Add `ContactForm` component + new section between seeking cards and contact cards |

No routing, data arrays, shadcn components, or other files modified.

