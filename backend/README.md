# Backend

## Table of Contents

- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Logging](#logging)
- [Adding New Features](#adding-new-features)
- [Testing](#testing)
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

## Testing

Tests are implemented with Jest and Supertest, using a separate test database.

### Running Tests

```bash
npm test                 # Run all tests
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Run tests with coverage report
```

For Specific Features:
```bash
npm test -- shows        # Run all shows tests (routes, service, repository)
npm test -- users        # Run all users tests
npm test -- watcheds     # Run all watcheds tests
npm test -- health       # Run health tests
npm test -- middleware   # Run middleware tests
```

For Specific Files:

```bash
npm test -- shows.routes.test    # Run only shows routes tests
```

#### View Coverage Report

After running `npm run test:coverage`, open the report from `coverage/lcov-report/index.html` (Ie. In a browser).

### Test Organization

Tests are colocated with their source files in `__tests__/` directories:
```
src/features/shows/
  ├── shows.routes.ts
  ├── shows.service.ts
  └── __tests__/
      ├── shows.routes.test.ts
      └── shows.service.test.ts
```

### Test Database

Tests use a separate `test.db` database:
- Created automatically on first test run
- Cleaned after each test (all tables truncated)
- Migrations run automatically via `beforeAll` hook

## Next Steps

3. Adding DTOs for validation
4. Adding Authentication
