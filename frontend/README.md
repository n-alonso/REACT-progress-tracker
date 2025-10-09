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

## Project Structure

```
frontend/src/
├── pages/                    # Page components
│   ├── home/                # Home page
│   ├── shows/               # Shows listing & details
│   │   ├── components/      # Show-specific components
│   │   ├── index.ts
│   │   ├── ShowsPage.tsx
│   │   └── ShowDetailsPage.tsx
│   ├── profile/             # User profile page
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
│   │   │   ├── health.ts
│   │   │   ├── users.ts
│   │   │   ├── shows.ts
│   │   │   └── watchedEpisodes.ts
│   │   └── hooks/           # React Query hooks
│   │       ├── useShows.ts
│   │       ├── useUsers.ts
│   │       └── useWatchedEpisodes.ts
│   └── models/              # TypeScript types
│       ├── Show.type.ts
│       ├── Episode.type.ts
│       ├── User.type.ts
│       └── WatchedEpisode.type.ts
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

1. Adding testing
2. Adding error boundaries
3. Adding Authentication
4. Adding loading states for mutations
5. Refactoring to debounced search
6. Adding form validation
7. Adding optimistic updates
8. Adding code splitting and lazy loading
