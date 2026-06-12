# DevStash

A developer knowledge hub for snippetgs, commands, prompts, notes, files, images, links and custom types.

## Context Files

Read the following to get the full context of the project:

- @context/project-overview.md
- @context/coding-standarts.md
- @context/ai-interaction.md
- @context/current-feature.md




## Project Structure & Module Organization

This is a Next.js App Router project using TypeScript and Tailwind CSS. Application code lives under `src/app`. The root route is `src/app/page.tsx`, shared document structure and metadata live in `src/app/layout.tsx`, and global Tailwind imports live in `src/app/globals.css`. Static public assets belong in `public/`; keep generated build output such as `.next/` out of version control. Use the `@/*` path alias for imports from `src`, for example `@/app/page`.

## Build, Test, and Development Commands

- `npm run dev`: starts the local Next.js development server.
- `npm run build`: creates a production build and runs Next.js compile checks.
- `npm run start`: serves the production build after `npm run build`.
- `npm run lint`: runs ESLint with `eslint-config-next` core web vitals and TypeScript rules.

Use `npm` for package management because this repository includes `package-lock.json`.

## Coding Style & Naming Conventions

Write React components in TypeScript (`.tsx`) and keep components as small, default-exported route components where Next.js file conventions require it. Use two-space indentation, double quotes, and semicolons to match the existing files. Prefer PascalCase for component names, camelCase for variables and functions, and lowercase route folder names under `src/app`. Keep global CSS minimal; prefer Tailwind utility classes in components.

## Testing Guidelines

No test framework is configured yet. Before adding substantial logic, add an appropriate test setup and document the new command here. For now, treat `npm run lint` and `npm run build` as the required verification steps before opening a pull request. Name future tests near the code they cover, for example `component.test.tsx` or `route.test.ts`.

## Commit & Pull Request Guidelines

The current history only contains the initial Create Next App commit, so use clear, imperative commit messages such as `Add contributor guide` or `Simplify home page`. Pull requests should include a short description, verification commands run, linked issues when applicable, and screenshots for visible UI changes.

## Agent-Specific Instructions

This repository uses Next.js `16.2.7`, which may differ from older Next.js conventions. Before changing Next.js APIs, routing files, or configuration, read the relevant guide in `node_modules/next/dist/docs/` and follow any deprecation notes.
