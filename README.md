# Lalafo design prototype

Next.js prototype of the **Your ad** mobile screen (375px), built with React, TypeScript, Tailwind CSS, and [shadcn/ui](https://ui.shadcn.com) components styled to match the Lalafo design system.

Repository: [https://github.com/ilya-zoria/lalafo-tt](https://github.com/ilya-zoria/lalafo-tt)

---

## Getting started

**Requirements:** Node.js 18+

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the screen is rendered at a fixed **375px** width.

### Test the workflow with Cursor Agent

Use **Cursor Agent** to iterate on this prototype the same way you would in production design work: describe a change in chat, let the agent edit the screen using `[CLAUDE.md](./CLAUDE.md)` and the design system, then verify in the **browser preview** before you commit.

1. Start `npm run dev` and open the app preview in Cursor.
2. Prompt the agent with a specific screen + change (see [Example AI prompt](#example-ai-prompt) below).
3. Review the agent summary and check layout in the Cursor browser.
4. Follow `[docs/workflow.md](./docs/workflow.md)` when you are ready to branch, commit, and share.

Agent features in Cursor 3 (planning, browser testing, parallel agents) are a good fit for this loop. Learn more in the [Cursor 3.0 changelog](https://cursor.com/changelog/3-0).

### Example AI prompt

```text
Add Email section below phone number section
```

The agent should edit only what’s needed, use existing tokens/components, and reply with a short summary plus how to verify in the browser preview.

---

## Project layout


| Path                                | Purpose                                                    |
| ----------------------------------- | ---------------------------------------------------------- |
| `src/app/`                          | Next.js app router (`page.tsx`, global styles)             |
| `src/components/your-ad-screen.tsx` | Main screen composition                                    |
| `src/components/ui/`                | UI components (Button, Input, Select, etc.)                |
| `CLAUDE.md`                         | Agent instructions for AI-assisted design changes          |
| `.cursor/rules/claude.mdc`          | Cursor rule — enforces reading `CLAUDE.md` on every change |
| `docs/workflow.md`                  | Human workflow for building prototypes with AI             |


---

## How the docs work together

```text
You (product/design)          AI agent (Cursor)
        │                              │
        ▼                              ▼
 docs/workflow.md  ◄────────►  CLAUDE.md (repo root)
   "what to do"                  "how to do it"
                                       ▲
                                       │
                          .cursor/rules/claude.mdc
                            (always applies)
```

### `[CLAUDE.md](./CLAUDE.md)` — agent instructions

Source of truth for **how the AI should change UI** in this repo:

- Use the **design system in code** (components, tokens, theme) — not invented UI
- Make **minimal diffs**; no duplicate components
- Prefer existing DS components; ask before adding new ones to the system
- Follow a **change priority**: copy → order → layout → DS components → logic
- Post a structured **summary** after each change (what changed, why, preview URL)
- Apply basic **UX rules** (hierarchy, contrast, mobile-first)

When you prompt the agent (e.g. *“Add Email section below phone number section”*), it should follow these rules.

### `[.cursor/rules/claude.mdc](./.cursor/rules/claude.mdc)` — Cursor rule

An **always-on** Cursor rule (`alwaysApply: true`) that tells the agent to read and follow `CLAUDE.md` before any project change (UI, components, layout, copy, logic, styles, or routes).

Use this so agent behavior stays aligned with `CLAUDE.md` even when the file is not @-mentioned in chat. The rule content is short; `**CLAUDE.md` remains the source of truth** for detailed instructions.

### `[docs/workflow.md](./docs/workflow.md)` — human workflow

A short guide for **people** prototyping with AI:

1. Create a feature branch
2. Write a clear prompt (screen + change)
3. Review the agent summary in chat
4. Check the preview in the Cursor browser
5. Commit, push, deploy (GitHub / Vercel) when ready
6. Share the preview link with the team

Includes prompt examples and what to expect from the agent (DS-only changes, approval for new components).

**Relationship:** `workflow.md` is the process; `CLAUDE.md` is the behavior; `claude.mdc` ensures the agent loads that behavior automatically. You can still @-mention `@CLAUDE.md` or `@docs/workflow.md` in chat when helpful.

---

## Design reference

- **Screen:** “Your ad” posting flow
- **Font:** Ubuntu
- **Colors & type:** CSS variables in `src/app/globals.css`

