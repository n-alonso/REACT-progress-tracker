import { prismaClient } from '../data/prismaClient';
import { execSync } from 'child_process';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

// Load environment variables (load .env first, then .env.test overrides)
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config({ path: path.resolve(__dirname, '../../.env.test'), override: true });

jest.setTimeout(10000);

process.env.NODE_ENV = 'test';
process.env.DATABASE_URL = 'file:./test.db';

beforeAll(async () => {
    // Run migrations
    execSync('npx prisma migrate deploy', {
        stdio: 'inherit',
        env: { ...process.env, DATABASE_URL: 'file:./test.db' }
    });
});

afterEach(async () => {
    // Clean up database tables in correct order (foreign keys)
    // WatchedEpisode references User, Show, and Episode - delete first
    await prismaClient.watchedEpisode.deleteMany();
    // Episodes reference Show - delete before Show
    await prismaClient.episode.deleteMany();
    // Shows and Users have no dependencies
    await prismaClient.show.deleteMany();
    await prismaClient.user.deleteMany();
});

afterAll(async () => {
    await prismaClient.$disconnect();

    // Delete test database file
    const testDbPath = path.resolve(__dirname, '../../prisma/test.db');
    if (fs.existsSync(testDbPath)) {
        fs.unlinkSync(testDbPath);
    }

    // Also clean up any SQLite journal files
    const journalPath = `${testDbPath}-journal`;
    if (fs.existsSync(journalPath)) {
        fs.unlinkSync(journalPath);
    }
});

