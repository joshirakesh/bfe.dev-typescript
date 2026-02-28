# AGENTS.md

Guidance for coding agents working in this repository.

## Repository purpose
This repository contains TypeScript type-challenge style exercises. Each challenge usually has:
- `README.md` with the problem statement.
- `solution.ts` with the type-level implementation.
- sometimes `explanation.md` with extra notes.

## Editing rules
- Keep solutions focused on type-level TypeScript (interfaces, mapped types, conditional types, infer, etc.).
- Avoid introducing runtime JavaScript unless a task explicitly requires it.
- Prefer concise implementations and preserve existing folder conventions.
- Do not rename challenge directories unless the task explicitly asks for a structural change.

## Validation checklist
When you change challenge files:
1. Run `git diff --name-only` to confirm intended files only.
2. Run `tsc --noEmit` if a TypeScript config is present.
3. If there is no test/config tooling available, explain that limitation in your final response.

## Commit guidance
- Use a clear, scoped commit message, for example:
  - `docs: add AGENTS guidance for repository workflows`
  - `fix(easy/005): correct Pick type implementation`
