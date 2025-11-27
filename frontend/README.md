# React Live Coding Starter

Production-friendly Vite + React + TypeScript scaffold designed for interview/live-coding sessions. It ships with routing, a layout shell, reusable UI primitives, hooks, contexts, and sensible project organization so you can focus on solving the prompt.

## Quick Start

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` – start Vite dev server with HMR
- `npm run build` – type-check and create a production build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint across the project
- `npm run type-check` – run TypeScript in noEmit mode
- `npm run format` – format source files with Prettier

## Project Structure

```
src/
├── components/   # Reusable UI primitives (e.g., Button)
├── contexts/     # React context providers (ThemeProvider)
├── hooks/        # Custom hooks (useToggle, etc.)
├── layouts/      # Shared layouts/MainLayout
├── pages/        # Route-level screens (Home, About, 404)
├── routes/       # Router configuration
├── services/     # API helpers / data fetching
├── stores/       # Zustand store,....
├── styles/       # Global stylesheets
├── types/        # Shared TypeScript types
└── utils/        # Utility helpers (delay, formatters, ...)
```

## API mock wiring

- Backend Nest server exposes `GET /ping` via `backend/src/app.controller.ts`.
- Copy `env.example` to `.env` (or export `VITE_API_URL`) so the frontend knows where to send requests.
- Start the backend (`cd backend && npm run start:dev`) before `npm run dev` in `my-app`.
- `HomePage` calls the ping endpoint on mount and surfaces the response/status for interview demos.

## Styling

- Tailwind CSS v3 is configured through `tailwind.config.js` and `postcss.config.js`.
- Global directives plus custom component classes live in `src/styles/global.css`.
- Compose utility classes directly in components (see `HomePage`) or extend Tailwind via `@layer`.
- Custom brand colors are available under the `brand` palette (e.g., `text-brand`, `text-brand-muted`).

Happy coding!

