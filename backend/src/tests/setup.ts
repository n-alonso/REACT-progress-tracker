import { prismaClient } from '../data/prismaClient';
import { execSync } from 'child_process';
import * as dotenv from 'dotenv';
import * as path from 'path';

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
    // Watched references User, Show, and Episode - delete first
    await prismaClient.watched.deleteMany();
    // Episodes reference Show - delete before Show
    await prismaClient.episode.deleteMany();
    // Shows and Users have no dependencies
    await prismaClient.show.deleteMany();
    await prismaClient.user.deleteMany();
});

afterAll(async () => {
    await prismaClient.$disconnect();
});

