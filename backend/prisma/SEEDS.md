# Database Seeds

This document describes the test data seeded into the database for development and testing purposes.

## Running Seeds

### Seeding
Manually:
```bash
cd backend
npm run prisma:seed
```

Or automatically after migration:
```bash
npm run prisma:migrate
```

## Seeded Data Overview

### Users (3 total)

| ID | Username | Description |
|----|----------|-------------|
| 1  | john_doe | Casual viewer - watching multiple shows |
| 2  | jane_smith | Moderate viewer - some completed series |
| 3  | anime_fan | Heavy watcher - multiple completed series |

### Shows (15 total)

| Show Title | Episodes |
|-----------|----------|
| Berserk | 25 |
| Cowboy Bebop | 26 |
| Death Note | 37 |
| One Piece | 50 |
| Attack on Titan | 75 |
| Fullmetal Alchemist: Brotherhood | 64 |
| Steins;Gate | 24 |
| One Punch Man | 24 |
| Demon Slayer | 44 |
| Naruto | 220 |
| Hunter x Hunter | 148 |
| My Hero Academia | 113 |
| Samurai Champloo | 26 |
| Mob Psycho 100 | 25 |
| Code Geass | 50 |

**Total Episodes:** 951

## User Viewing Progress

### User 1 (john_doe) - 54 episodes watched

**Completed Shows:**
- Cowboy Bebop (26/26 episodes - 100%)

**In Progress:**
- Death Note (18/37 episodes - 49%)
- Berserk (10/25 episodes - 40%)

### User 2 (jane_smith) - 49 episodes watched

**Completed Shows:**
- Steins;Gate (24/24 episodes - 100%)

**In Progress:**
- One Piece (20/50 episodes - 40%)
- Attack on Titan (5/75 episodes - 7%)

### User 3 (anime_fan) - 129 episodes watched

**Completed Shows:**
- One Punch Man (24/24 episodes - 100%)
- Mob Psycho 100 (25/25 episodes - 100%)

**In Progress:**
- Demon Slayer (30/44 episodes - 68%)
- Naruto (50/220 episodes - 23%)

## Database Statistics

After seeding:
- **Users:** 3
- **Shows:** 15
- **Episodes:** 951
- **Watched Records:** 232

## Resetting the Database

To clear and reseed the database:

```bash
cd backend
npm run prisma:migrate reset
# This will:
# 1. Drop the database
# 2. Run migrations
# 3. Run seeds automatically
```

## Customizing Seeds

To add more data, edit `prisma/seed.ts`:

1. **Add more shows:** Add entries to the `showsData` array
2. **Add more users:** Add entries to the users `Promise.all()` array
3. **Add more watched records:** Add entries to the user watcheds arrays
4. **Adjust episode counts:** Modify `episodeCount` in show data

## Notes

- Watched records maintain proper relationships with unique constraints
- Seeds are idempotent (safe to run multiple times)
