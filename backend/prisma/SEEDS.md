# Database Seeds

This document describes the test data seeded into the database for development and testing purposes.

## Running Seeds

### Manual Seeding
```bash
cd backend
npm run prisma:seed
```

### Auto-seeding (after migrations)
Seeds will run automatically after running:
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

| Show Title | Episodes | Genre/Type |
|-----------|----------|------------|
| Berserk | 25 | Dark Fantasy |
| Cowboy Bebop | 26 | Sci-Fi |
| Death Note | 37 | Thriller |
| One Piece | 50 | Adventure (simplified) |
| Attack on Titan | 75 | Action |
| Fullmetal Alchemist: Brotherhood | 64 | Adventure |
| Steins;Gate | 24 | Sci-Fi |
| One Punch Man | 24 | Action/Comedy |
| Demon Slayer | 44 | Action |
| Naruto | 220 | Adventure |
| Hunter x Hunter | 148 | Adventure |
| My Hero Academia | 113 | Superhero |
| Samurai Champloo | 26 | Action |
| Mob Psycho 100 | 25 | Action/Comedy |
| Code Geass | 50 | Mecha |

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

## Testing Scenarios

The seeded data provides various testing scenarios:

### 1. Completed Shows
- Test user seeing 100% progress
- Test completion badges/indicators
- Test "rewatch" functionality

### 2. Partially Watched Shows
- Test progress tracking
- Test "continue watching" functionality
- Test various completion percentages

### 3. Unwatched Shows
- Test discovery of new shows
- Test starting a new show
- Test empty progress states

### 4. Multiple Users
- Test user-specific progress
- Test that users don't see each other's progress
- Test user switching

## API Testing Examples

### Get All Shows
```bash
curl http://localhost:3000/shows
```

### Get User's Watched Episodes
```bash
# john_doe's watched episodes
curl http://localhost:3000/watcheds?userId=1

# jane_smith's watched episodes for Attack on Titan
curl "http://localhost:3000/watcheds?userId=2&showId=5"
```

### Get Specific User
```bash
curl http://localhost:3000/users/1
```

## Database Statistics

After seeding:
- **Users:** 3
- **Shows:** 15
- **Episodes:** 951
- **Watched Records:** 232
- **Average Completion per User:** ~77 episodes

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

Or manually:
```bash
# Clear data
npx prisma migrate reset --skip-seed

# Run seeds
npm run prisma:seed
```

## Customizing Seeds

To add more data, edit `prisma/seed.ts`:

1. **Add more shows:** Add entries to the `showsData` array
2. **Add more users:** Add entries to the users `Promise.all()` array
3. **Add more watched records:** Add entries to the user watcheds arrays
4. **Adjust episode counts:** Modify `episodeCount` in show data

Example:
```typescript
{
  title: 'Your New Show',
  episodeCount: 12,
}
```

## Notes

- Episode titles are simplified as "Episode 1", "Episode 2", etc.
- One Piece episode count is reduced from 1000+ to 50 for testing
- Watched records maintain proper relationships with unique constraints
- Seeds are idempotent (safe to run multiple times)

