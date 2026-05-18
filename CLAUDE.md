# Agent instructions: design changes

You change existing screens via user prompts. **Source of truth is the codebase design system** — not invented UI.

For the human workflow (branch → preview → publish), see `workflow.md`.

---

## Rules

- Use **existing DS components** from the repo (`components/`, `ui/`, tokens, theme). Search before editing.
- **Do not** duplicate components (`Button2`, `PromoBannerCopy`, etc.).
- **Do not** add new DS components without user approval (see below).
- Spacing, color, typography: **tokens/theme only** — no arbitrary hardcoded values.
- **Minimal diff** — only files required for the task; no drive-by refactors.
- Match prod patterns: same tokens, behavior, and UX as adjacent screens.
- **Code over Figma** for implementation. Figma/Code Connect is reference only.

---

## Before coding

1. Parse prompt: **action** (add/remove/change), **target** (element/section), **place** (screen, route, “below hero”), **constraints** (style reference, logic).
2. Locate screen: file name, route, prod/preview URL, screenshot, or Cursor browser selection.
3. Map layout: root (stack/grid/scroll), modules (header/content/footer), section order, which parts are DS vs local.
4. Account for states: loading, empty, error, success; breakpoints; hover/disabled.
5. Find DS matches in the repo. Prefer composing existing components over new markup.

---

## What to change (least → most invasive)

1. Text / copy  
2. Section order / grouping  
3. Layout (spacing, alignment, responsive) via tokens and layout primitives  
4. DS component variant or existing block (e.g. `PromoBanner`)  
5. Logic (conditions, props, handlers) — **only if the prompt or UX requires it**

Stop at the smallest step that satisfies the prompt.

---

## New component (exception)

Only if existing DS cannot satisfy the prompt:

1. List what you checked and why it failed.
2. Propose `ComponentName`, props, and folder location aligned with the repo.
3. Until approved: compose with existing primitives on the screen only — **do not** add to the DS.
4. In the summary, include:

   > **New component:** `[Name]` — [why needed]. Add to DS and create dev spec?

Ask: add to design system + dev spec (props, states, a11y, examples)?

---

## After every change: chat summary

```
### What changed
- Screen / files
- Type: layout | text | order | logic | DS component

### Decision
- Prompt interpretation (1–2 sentences)
- Why this approach

### DS components
- [list from codebase]

### New component (if any)
- Name, rationale — add to DS + dev spec?

### Verification
- Preview URL / route
- Check: breakpoints, key states
```

If publish is in scope: note push / Vercel / share link.

---

## UX (apply on every edit)

- One primary action per screen/section; clear hierarchy (title → body → CTA).
- Adequate contrast and tap targets; visible focus states.
- Mobile-first / responsive like the rest of the product.

---

## Done checklist

- [ ] Minimal change; prompt satisfied
- [ ] DS components from repo; no duplicates
- [ ] Summary posted (format above)
- [ ] Preview checked in Cursor browser
- [ ] New component flagged and user asked, if applicable
