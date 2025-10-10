import { execSync } from 'child_process';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

dotenv.config({ path: path.resolve(__dirname, '../../.env'), quiet: true });

process.env.NODE_ENV = 'test';
const workerId = process.env.JEST_WORKER_ID || '1';
const databasePath = `file:./test-${workerId}.db`;
process.env.DATABASE_URL = databasePath;

import { prismaClient } from '../data/prismaClient';

jest.setTimeout(10000);

beforeAll(async () => {
    execSync('npx prisma migrate deploy', {
        stdio: 'pipe', // Suppress output unless there's an error
        env: { ...process.env, DATABASE_URL: databasePath }
    });
});

afterEach(async () => {
    // Clean up database tables in correct order (foreign keys)
    await prismaClient.watchedEpisode.deleteMany();
    await prismaClient.episode.deleteMany();
    await prismaClient.show.deleteMany();
    await prismaClient.user.deleteMany();
});

afterAll(async () => {
    await prismaClient.$disconnect();

    // Delete database files
    const testDbPath = path.resolve(__dirname, `../../prisma/test-${workerId}.db`);
    if (fs.existsSync(testDbPath)) fs.unlinkSync(testDbPath);

    const journalPath = `${testDbPath}-journal`;
    if (fs.existsSync(journalPath)) fs.unlinkSync(journalPath);
});

