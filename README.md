# Progress Tracker

[![CI/CD Pipeline Status](https://github.com/n-alonso/REACT-progress-tracker/actions/workflows/ci-pipeline.yml/badge.svg)](https://github.com/n-alonso/REACT-progress-tracker/actions/workflows/ci-pipeline.yml)

A full-stack TV show progress tracking application built with React and Express. Track your watched episodes across multiple shows with an intuitive interface.

## Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Frontend](#frontend)
  - [Documentation](#frontend-documentation)
  - [Tech Stack](#frontend-tech-stack)
  - [Architecture](#frontend-architecture)
- [Backend](#backend)
  - [Documentation](#backend-documentation)
  - [Tech Stack](#backend-tech-stack)
  - [Architecture](#backend-architecture)
- [DevOps](#devops)
  - [Tech Stack](#devops-tech-stack)
  - [Architecture](#devops-architecture)
- [Available Scripts](#available-scripts)
- [Development Workflow](#development-workflow)
- [Next Steps](#next-steps)

## Quick Start

```bash
# 1. Clone the repository
git clone <repository_url> progress-tracker
cd progress-tracker

# 2. Install all dependencies (root + frontend + backend)
npm install

# 3. Set up backend environment variables
cd backend
cp .env.example .env
cd ..

# 4. Set up frontend environment variables
cd frontend
cp .env.example .env
cd ..

# 5. Generate Prisma client and set up database
cd backend
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
cd ..

# 6. Start both frontend and backend
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

**What gets created:**
- 3 users (john_doe, jane_smith, anime_fan)
- 15 shows with 951 episodes
- 232 watched episode records

## Project Structure

This is a monorepo containing:

```
progress-tracker/
├── .github/
│   └── workflows/
│       └── ci-pipeline.yml  # GitHub Actions (CI)
├── frontend/                # React application (port 5173)
├── backend/                 # Express API (port 3000)
└── package.json             # Root scripts for running both services
```

## Frontend

### Frontend Documentation

**[Full Frontend Documentation](./frontend/README.md)**

### Frontend Tech Stack

- React 19 + TypeScript
- Vite (build tool)
- TanStack Query (data fetching)
- Mantine (UI components)
- React Router v7
- Vitest + React Testing Library (testing)
- ESLint (code linting)

### Frontend Architecture

Feature-based architecture with pages, components, and a dedicated data layer (API services + React Query hooks).

Related files (component, styles, tests) are grouped in dedicated folders for better organization.

## Backend

### Backend Documentation

**[Full Backend Documentation](./backend/README.md)**

### Backend Tech Stack

- Node.js + TypeScript
- Express (REST API)
- Prisma ORM
- SQLite (development database)
- Winston (logging)
- Jest + Supertest (testing)
- ESLint (code linting)

### Backend Architecture

Feature-based architecture with layered components (routes → services → repositories) grouped per feature.

**Database**: With migrations and pre-seeded with 3 users, 15 shows, and 951 episodes to test with.

## DevOps

### DevOps Tech Stack

- **GitHub Actions** - CI/CD pipelines


### DevOps Architecture

**CI Pipeline**: Parallel execution of frontend and backend jobs (lint, build, test) on every push.


## Available Scripts

Run from the root directory:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both frontend and backend in development mode |
| `npm run dev:frontend` | Start only the frontend |
| `npm run dev:backend` | Start only the backend |

See individual READMEs for more scripts (testing, building, database management, etc.).

## Development Workflow

1. **Backend** runs on `http://localhost:3000`
2. **Frontend** runs on `http://localhost:5173`
3. Frontend is pre-configured to communicate with the backend
4. Database is automatically seeded on first run

## Next Steps

- Adding a CD pipeline
- Adding IaC
- See frontend/backend documentation for their related next steps
