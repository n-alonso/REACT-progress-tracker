# Frontend

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Data Layer](#data-layer)
- [Adding New Features](#adding-new-features)
- [Next Steps](#next-steps)

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **UI Library**: Mantine
- **Routing**: React Router v7
- **Data Fetching**: TanStack Query (React Query)
- **HTTP Client**: Axios
- **Styling**: CSS Modules
- **Icons**: Tabler Icons
- **Testing**: Vitest + React Testing Library

## Project Structure

```
frontend/src/
├── pages/                   # Page components
│   ├── home/                # Home page
│   ├── profile/             # User profile page
│   ├── shows/               # Shows listing & details
│   │   ├── components/      # Show-specific components
│   │   │   ├── ShowComponent/
|   │   │   │   ├── ShowComponent.tsx
|   │   │   │   ├── ShowComponent.module.css
|   │   │   │   └── ShowComponent.test.tsx
│   │   │   ├── ShowDetails/
│   │   │   ├── ShowModal/
│   │   │   └── index.ts
│   │   ├── ShowsPage/       # Shows listing page
│   │   │   ├── ShowsPage.tsx
│   │   │   ├── ShowsPage.module.css
│   │   │   └── ShowsPage.test.tsx
│   │   ├── ShowDetailsPage/
│   │   └── index.ts
│   └── index.ts             # Page exports
├── components/              # Shared components
│   ├── headers/             # Header component
│   ├── footers/             # Footer component
├── contexts/                # React contexts
│   └── AuthContext.tsx      # Authentication context
├── data/                    # Data layer
│   ├── api/
│   │   ├── client.ts        # Axios instance
│   │   ├── services/        # API service functions
│   │   │   ├── health/      # (health.ts, health.test.ts)
│   │   │   ├── users/       # (users.ts, users.test.ts)
│   │   │   ├── shows/       # (shows.ts, shows.test.ts)
│   │   │   ├── watchedEpisodes/ # (watchedEpisodes.ts, watchedEpisodes.test.ts)
│   │   │   └── index.ts
│   │   └── hooks/           # React Query hooks
│   │       ├── useShows/    # (useShows.ts, useShows.test.tsx)
│   │       ├── useUsers/    # (useUsers.ts, useUsers.test.tsx)
│   │       ├── useWatchedEpisodes/ # (useWatchedEpisodes.ts, useWatchedEpisodes.test.tsx)
│   │       └── index.ts
│   └── models/              # TypeScript types
│       ├── Show/            # (Show.type.ts, Show.type.test.ts)
│       ├── Episode/         # (Episode.type.ts, Episode.type.test.ts)
│       ├── User/            # (User.type.ts, User.type.test.ts)
│       └── WatchedEpisode/  # (WatchedEpisode.type.ts, WatchedEpisode.type.test.ts)
├── App.tsx                  # Root component
└── main.tsx                 # Application entry point
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run unit tests |
| `npm run test:ui` | Run tests with Vitest UI |
| `npm run test:coverage` | Run tests with coverage report |

## Testing

Tests are implemented with Vitest and React Testing Library.

### Running Tests

```bash
npm test                # Run all tests on watch mode
npm run test:ui         # Run tests with Vitest UI
npm run test:coverage   # Run tests with coverage report
npm run test:ci         # Run all tests and exit process
```

For Specific Features:
```bash
npm test -- shows        # Run all shows tests (pages, components)
npm test -- hooks        # Run all React Query hooks tests
npm test -- services     # Run all API service tests
npm test -- models       # Run all model/type tests
npm test -- components   # Run all shared component tests
```

For Specific Files:
```bash
npm test -- useShows.test          # Run only useShows hook tests
```

#### View Coverage Report

After running `npm run test:coverage`, open the report from `coverage/index.html`.

## Data Layer

### API Services

API services are organized by domain in `data/api/services/`:

```typescript
// data/api/services/shows.ts
export const showsApi = {
    getAll: async (): Promise<Show[]> => { ... },
    getById: async (id: number): Promise<Show> => { ... },
};
```

### React Query Hooks

Custom hooks wrap API services with React Query for caching and state management:

```typescript
// data/api/hooks/useShows.ts
export const useShows = () => {
    return useQuery({
        queryKey: ['shows'],
        queryFn: () => showsApi.getAll(),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};
```

## Adding New Features

To add a new feature:

1. **Create Page Component** in `pages/[feature]/`
2. **Add Route** in `main.tsx`
3. **Create API Service** in `data/api/services/[feature].ts`
4. **Create React Query Hook** in `data/api/hooks/use[Feature].ts`
5. **Add TypeScript Types** in `data/models/[Feature].type.ts`
6. **Update Exports** in respective `index.ts` files

## Next Steps

1. Adding error boundaries
2. Adding Authentication
3. Adding loading states for mutations
4. Refactoring to debounced search
5. Adding form validation
6. Adding optimistic updates
7. Adding code splitting and lazy loading
