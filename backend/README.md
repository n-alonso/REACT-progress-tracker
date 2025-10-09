# Backend

## Table of Contents

- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Logging](#logging)
- [Adding New Features](#adding-new-features)
- [Testing Strategy](#testing-strategy)
- [Next Steps](#next-steps)

## Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Generate Prisma Client
```bash
npm run prisma:generate
```

### 3. Run Migrations
```bash
npm run prisma:migrate
```

### 4. Seed the Database
```bash
npm run prisma:seed
```

This will create:
- 3 users (john_doe, jane_smith, anime_fan)
- 15 shows with a total of 951 episodes
- 232 watched records showing user progress

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express
- **Database**: SQLite (development)
- **ORM**: Prisma
- **Security**: Helmet, CORS
- **Logging**: Winston (JSON format in production)

## Project Structure

```
backend/src/
├── features/              # Feature modules
│   ├── shows/            # Show tracking feature
│   │   ├── shows.repository.ts   # Database access layer
│   │   ├── shows.service.ts      # Business logic layer
│   │   ├── shows.routes.ts       # HTTP routes
│   │   └── index.ts              # Feature exports
│   ├── users/            # User management feature
│   ├── watcheds/         # Watched episodes feature
│   ├── health/           # Health check feature
│   └── index.ts          # Main feature exports
├── data/                 # Data layer
│   ├── prismaClient.ts   # Prisma client singleton
│   └── index.ts
├── middlewares/          # Global middlewares
│   ├── errors/
│   │   ├── errorHandler.ts
│   │   └── notFound.ts
│   └── index.ts
└── server.ts            # Application entry point
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run compiled production build |
| `npm run prisma:generate` | Generate Prisma Client |
| `npm run prisma:migrate` | Run database migrations |
| `npm run prisma:seed` | Seed database with test data |
| `npm run prisma:studio` | Open Prisma Studio (database GUI) |

## Logging

Winston logger with environment-based configuration:
- **Development**: Colored console output
- **Production**: JSON format for log aggregation services
- **Files**: `logs/error.log` and `logs/combined.log` (production only)

```typescript
import { createLogger } from './utils/logger';

const logger = createLogger('FeatureName');
logger.info('Message', { metadata });
logger.error('Error occurred', error);
```

## Adding New Features

To add a new feature:

1. Create a new folder in `features/`
2. Add `*.repository.ts` for database access
3. Add `*.service.ts` for business logic
4. Add `*.routes.ts` for HTTP endpoints
5. Create `index.ts` to export public API
6. Update `features/index.ts` to export the router
7. Register the router in `server.ts`

## Testing Strategy

Each layer should be tested independently:

- **Route Tests**: Integration tests with supertest
- **Service Tests**: Unit tests with mocked repositories
- **Repository Tests**: Integration tests with test database

## Next Steps

1. Add tests (see main README for testing setup)
2. Add more features following the same pattern
3. Consider adding DTOs (Data Transfer Objects) for validation
4. Consider adding middleware for authentication

