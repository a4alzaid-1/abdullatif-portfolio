---
name: Abdullatif Alzaid Portfolio
description: Bold black/white/red editorial system for a software engineering portfolio
colors:
  ink: "#0A0A0A"
  red: "#EF4444"
  red-hover: "#DC2626"
  paper: "#FAFAFA"
  surface: "#F5F5F5"
  surface-raised: "#E5E5E5"
  text-secondary: "#525252"
  text-tertiary: "#A3A3A3"
  border-subtle: "#E5E5E5"
  border-medium: "#D4D4D4"
  border-strong: "#0A0A0A"
typography:
  display:
    fontFamily: "Archivo Black, Impact, 'Arial Black', sans-serif"
    fontSize: "clamp(2.625rem, 6vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo Black, Impact, 'Arial Black', sans-serif"
    fontSize: "38px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body-large:
    fontFamily: "Work Sans, -apple-system, 'Segoe UI', Helvetica, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Work Sans, -apple-system, 'Segoe UI', Helvetica, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Work Sans, -apple-system, 'Segoe UI', Helvetica, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.06em"
  mono:
    fontFamily: "Space Mono, 'Courier New', Consolas, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "10px 24px"
  button-primary-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  card-default:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "24px"
  card-featured:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "24px"
---

# Design System: Abdullatif Alzaid Portfolio

## 1. Overview

**Creative North Star: "The Red Pen"**

The system reads like a page marked up by a confident editor: black type on
white paper, every claim stated plainly, and a single red mark used only where
something needs to stand out — a section's underline, a hover state, the top
edge of the one project that matters most this week. The red never spreads;
its scarcity is what makes it read as deliberate rather than decorative.

This portfolio explicitly rejects the visual grammar of generated AI sites: no
cream or sand body background, no gradient text, no tiny uppercase tracked
eyebrow sitting above every section, no numbered section scaffolding
(01/02/03) used as filler rather than a real sequence, no identical
icon-plus-heading card grids, no glassmorphism, no hero-metric template. It
also rejects the generic bootcamp-portfolio look — soft pastel cards, rounded
everything, a SaaS-style "trusted by" strip — that most graduating students'
sites converge on by default.

**Key Characteristics:**
- Pure black ink on white paper; the red accent appears at most once per viewport.
- Every corner is square. Structure comes from 2px borders, not radius or shadow.
- Massive Archivo Black headlines announce each section on their own; no eyebrow label rides above them.
- Confident, assertive component language: thick borders, uppercase button labels, no soft transitions into "maybe."

## 2. Colors

The palette is stark by design: near-black ink, near-white paper, and one red
mark, with a narrow band of grays doing the quiet work of secondary text and
dividers.

### Primary
- **Ink** (`#0A0A0A`): headlines, primary text, button fills, borders. Carries the majority of the surface.

### Secondary
- **Signal Red** (`#EF4444`): the single accent. Used for the underline beneath every section headline, link/button hover states, and the top edge of the one featured project card. Never appears more than once per screen.
- **Signal Red — Hover** (`#DC2626`): the pressed/active shade of Signal Red, used only on `:active` states of red-hover elements.

### Neutral
- **Paper** (`#FAFAFA`): page background.
- **Surface** (`#F5F5F5`): reserved for hover backgrounds if introduced later; not currently in active use.
- **Surface Raised** (`#E5E5E5`): reserved for pressed/raised backgrounds; not currently in active use.
- **Text Secondary** (`#525252`): body copy in About, project descriptions, skill list items — anything that isn't a headline or a primary action.
- **Text Tertiary** (`#A3A3A3`): the least prominent text; currently unused but reserved for placeholder/disabled states.
- **Border Subtle** (`#E5E5E5`): default project-card borders and skill-list dividers at rest.
- **Border Medium** (`#D4D4D4`): tag/chip borders (the tech-stack labels on project cards).
- **Border Strong** (`#0A0A0A`): identical to Ink; used explicitly as a border color on hover states and the nav's scrolled-state divider, kept as its own token because its role (structural line) differs from Ink's role (fill/text).

### Named Rules
**The One Red Rule.** Signal Red appears on at most one element per viewport — the section underline, a single hover state, or the top edge of one featured card. If two red elements are visible at once, remove one.

## 3. Typography

**Display Font:** Archivo Black (with Impact, 'Arial Black', sans-serif fallback)
**Body Font:** Work Sans (with -apple-system, 'Segoe UI', Helvetica fallback)
**Label/Mono Font:** Space Mono (with 'Courier New', Consolas fallback)

**Character:** A geometric, ultra-heavy display slab paired with a clean humanist-geometric body sans — the contrast is deliberate: the display face shouts once per section, the body face stays quiet and readable underneath it.

### Hierarchy
- **Display** (400, `clamp(2.625rem, 6vw, 5rem)` / 42–80px responsive, line-height 1.0, letter-spacing -0.02em): the hero name treatment only — the single largest text on the page.
- **Headline** (400, 38px, line-height 1.1, letter-spacing -0.02em): section titles ("How I build", "Things I've shipped"). This is the section marker; nothing else labels a section.
- **Body Large** (400, 20px, line-height 1.65): the hero subhead and the About section's lead pull-quote paragraph.
- **Body** (400, 16px, line-height 1.7, max 65–75ch): project descriptions, skill list items, contact copy.
- **Label** (700, 13px, letter-spacing 0.06em, uppercase): nav links, button text, tagline text above project names.
- **Mono** (400, 12px): tech-stack tags on project cards only.

### Named Rules
**The No-Eyebrow Rule.** Section headlines never carry a small uppercase label or a number ("01 —") above them. The Archivo Black headline itself, plus its red underline, is the section marker. This rule exists specifically to avoid the tracked-eyebrow-plus-numbered-scaffolding pattern that reads as AI-generated.

## 4. Elevation

The system is completely flat. There is no shadow vocabulary at all — hierarchy
and depth come from the 2px border weight and black/white contrast, never from
elevation. A card at rest and a card on hover differ only in border color
(subtle gray → full black), not in shadow or lift.

### Named Rules
**The Flat-By-Design Rule.** No `box-shadow` anywhere in the system, including on hover or focus. If a component needs to communicate "this is interactive," change its border color or background, never add a shadow.

## 5. Components

### Buttons
- **Shape:** square corners, 0px radius, always.
- **Primary:** background Ink (`#0A0A0A`), text Paper (`#FAFAFA`), 2px Ink border, padding `10px 24px`, label-style text (13px, 700, uppercase, 0.06em tracking).
- **Hover:** background and border shift to Signal Red (`#EF4444`).
- **Secondary:** transparent background, Ink text and border; hover inverts to filled Ink background with Paper text.

### Cards
- **Corner Style:** 0px radius, always.
- **Background:** Paper (`#FAFAFA`).
- **Shadow Strategy:** none — see Elevation.
- **Border:** 2px Border Subtle (`#E5E5E5`) at rest; shifts to full Ink (`#0A0A0A`) on hover. The single featured card additionally carries a 4px Signal Red top border (see The One Red Rule).
- **Internal Padding:** 24–28px.

### Tags / Chips
- **Style:** Space Mono, 12px, no background fill, 2px Border Medium (`#D4D4D4`), text Text Secondary (`#525252`).

### Inputs / Fields
Not currently present in the shipped UI (the portfolio has no form inputs). If added: 2px Border Medium at rest, border shifts to Ink on focus, 0px radius, matching the button/card language.

### Navigation
- Fixed top bar, transparent at rest, Paper background with a 2px Ink bottom border once scrolled.
- Nav links: uppercase Label type, 3px transparent bottom border that turns Signal Red on hover — no color change on the text itself, only the underline.
- Resume link is styled as a filled Primary Button, not a text link, to mark it as the one action worth a click.

## 6. Do's and Don'ts

### Do:
- **Do** keep every corner square — 0px radius across buttons, cards, tags, and inputs.
- **Do** use 2px borders as the only structural device; let a border color change (gray → black, or → red) carry every "this is interactive" signal.
- **Do** let the Archivo Black section headline plus its red underline be the only section marker.
- **Do** hold Signal Red to one appearance per viewport (The One Red Rule).
- **Do** keep body copy in Work Sans at Text Secondary gray, capped near 65–75ch.

### Don't:
- **Don't** add a tiny uppercase tracked eyebrow above any section — this is the AI-generated-site tell PRODUCT.md explicitly calls out.
- **Don't** add numbered section markers (01, 02, 03…) as default scaffolding; if a real ordered sequence ever appears, that's the one exception, not a template for every section.
- **Don't** use a cream, sand, or beige body background. Paper is `#FAFAFA` at zero warm tint.
- **Don't** use gradient text or `background-clip: text` for emphasis — weight and the red accent do that job.
- **Don't** add any `box-shadow`, including on hover or focus.
- **Don't** round any corner. If a radius value shows up anywhere, it's a bug.
- **Don't** let Signal Red creep past one appearance per screen — that's the fastest way this system starts to look like a generic template instead of an edited page.
