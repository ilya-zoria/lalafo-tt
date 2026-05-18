# Prototype workflow

Build UI prototypes with AI using the design system in this repo. Agent behavior is defined in [`CLAUDE.md`](../CLAUDE.md).

---

## Steps

| # | You | Agent |
|---|-----|--------|
| 1 | Create a **feature branch** in Cursor | — |
| 2 | Write a **prompt** (screen + change) | Reads `CLAUDE.md`, finds screen, uses DS from code |
| 3 | Review **summary** in chat | Reports what changed, which components, preview URL |
| 4 | Check **preview** in Cursor browser | Verifies layout and states |
| 5 | **Commit & push** → GitHub → Vercel | Only when you ask |
| 6 | **Share** preview or prod link with the team | — |

---

## Good prompts

Be specific about **where** and **what**:

- `Add a promo block on the success screen`
- `Move the CTA above the FAQ on checkout`
- `Use the same banner style as on the home page, more compact`

Avoid vague prompts (`make it better`) unless you iterate in chat.

---

## What to expect

- Changes use **existing** design-system components from the codebase.
- No duplicate components; new DS pieces need your approval (see `CLAUDE.md`).
- Each iteration ends with a short **summary** and a way to open **preview**.

---

## Example

1. Branch: `feature/success-promo`
2. Prompt: `Add promo block on success screen`
3. Agent adds section with an existing promo/banner component, posts summary.
4. You open local preview in Cursor, approve or refine.
5. Push → Vercel preview URL → share with design/product.
