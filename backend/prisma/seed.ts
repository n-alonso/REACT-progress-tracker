/// <reference types="node" />
import { PrismaClient, Show, Episode } from '@prisma/client';
import { createLogger } from '../src/utils/logger';

const prisma = new PrismaClient();
const logger = createLogger('Seed');

type ShowWithEpisodes = Show & { episodes: Episode[] };

async function main() {
    logger.info('Starting database seeding');

    // Clear existing data
    logger.info('Cleaning existing data');
    await prisma.watched.deleteMany();
    await prisma.episode.deleteMany();
    await prisma.show.deleteMany();
    await prisma.user.deleteMany();

    // Create Users
    logger.info('Creating users');
    const users = await Promise.all([
        prisma.user.create({
            data: { username: 'john_doe' },
        }),
        prisma.user.create({
            data: { username: 'jane_smith' },
        }),
        prisma.user.create({
            data: { username: 'anime_fan' },
        }),
    ]);
    logger.info(`Created ${users.length} users`);

    // Create Shows with Episodes
    logger.info('Creating shows and episodes');

    const showsData = [
        {
            title: 'Berserk',
            episodeCount: 25,
        },
        {
            title: 'Cowboy Bebop',
            episodeCount: 26,
        },
        {
            title: 'Death Note',
            episodeCount: 37,
        },
        {
            title: 'One Piece',
            episodeCount: 50, // Simplified from 1000+
        },
        {
            title: 'Attack on Titan',
            episodeCount: 75,
        },
        {
            title: 'Fullmetal Alchemist: Brotherhood',
            episodeCount: 64,
        },
        {
            title: 'Steins;Gate',
            episodeCount: 24,
        },
        {
            title: 'One Punch Man',
            episodeCount: 24,
        },
        {
            title: 'Demon Slayer',
            episodeCount: 44,
        },
        {
            title: 'Naruto',
            episodeCount: 220,
        },
        {
            title: 'Hunter x Hunter',
            episodeCount: 148,
        },
        {
            title: 'My Hero Academia',
            episodeCount: 113,
        },
        {
            title: 'Samurai Champloo',
            episodeCount: 26,
        },
        {
            title: 'Mob Psycho 100',
            episodeCount: 25,
        },
        {
            title: 'Code Geass',
            episodeCount: 50,
        },
    ];

    const shows: ShowWithEpisodes[] = [];
    for (const showData of showsData) {
        const episodes = Array.from({ length: showData.episodeCount }, (_, i) => ({
            title: `Episode ${i + 1}`,
        }));

        const show = await prisma.show.create({
            data: {
                title: showData.title,
                episodes: {
                    create: episodes,
                },
            },
            include: {
                episodes: true,
            },
        });

        shows.push(show);
        logger.info(`Created show: ${show.title}`, { episodeCount: show.episodes.length });
    }

    logger.info(`Created ${shows.length} shows`);

    // Create Watched Records (User Progress)
    logger.info('Creating watched records');

    // User 1 (john_doe) - Has watched some episodes from multiple shows
    const user1Watcheds = [
        // Watched all of Cowboy Bebop
        ...shows[1].episodes.map(ep => ({
            userId: users[0].id,
            showId: shows[1].id,
            episodeId: ep.id,
        })),
        // Watched half of Death Note
        ...shows[2].episodes.slice(0, 18).map(ep => ({
            userId: users[0].id,
            showId: shows[2].id,
            episodeId: ep.id,
        })),
        // Watched first 10 episodes of Berserk
        ...shows[0].episodes.slice(0, 10).map(ep => ({
            userId: users[0].id,
            showId: shows[0].id,
            episodeId: ep.id,
        })),
    ];

    // User 2 (jane_smith) - Different viewing progress
    const user2Watcheds = [
        // Watched all of Steins;Gate
        ...shows[6].episodes.map(ep => ({
            userId: users[1].id,
            showId: shows[6].id,
            episodeId: ep.id,
        })),
        // Watched first 20 episodes of One Piece
        ...shows[3].episodes.slice(0, 20).map(ep => ({
            userId: users[1].id,
            showId: shows[3].id,
            episodeId: ep.id,
        })),
        // Watched first 5 episodes of Attack on Titan
        ...shows[4].episodes.slice(0, 5).map(ep => ({
            userId: users[1].id,
            showId: shows[4].id,
            episodeId: ep.id,
        })),
    ];

    // User 3 (anime_fan) - Heavy watcher
    const user3Watcheds = [
        // Watched all of One Punch Man
        ...shows[7].episodes.map(ep => ({
            userId: users[2].id,
            showId: shows[7].id,
            episodeId: ep.id,
        })),
        // Watched all of Mob Psycho 100
        ...shows[13].episodes.map(ep => ({
            userId: users[2].id,
            showId: shows[13].id,
            episodeId: ep.id,
        })),
        // Watched 30 episodes of Demon Slayer
        ...shows[8].episodes.slice(0, 30).map(ep => ({
            userId: users[2].id,
            showId: shows[8].id,
            episodeId: ep.id,
        })),
        // Watched 50 episodes of Naruto
        ...shows[9].episodes.slice(0, 50).map(ep => ({
            userId: users[2].id,
            showId: shows[9].id,
            episodeId: ep.id,
        })),
    ];

    const allWatcheds = [...user1Watcheds, ...user2Watcheds, ...user3Watcheds];

    await prisma.watched.createMany({
        data: allWatcheds,
    });

    logger.info(`Created ${allWatcheds.length} watched records`);

    // Summary
    const totalEpisodes = shows.reduce((sum, show) => sum + show.episodes.length, 0);
    logger.info('Database seeding completed successfully', {
        users: users.length,
        shows: shows.length,
        episodes: totalEpisodes,
        watchedRecords: allWatcheds.length,
    });
}

main()
    .catch((e) => {
        logger.error('Error seeding database', e instanceof Error ? e : { message: String(e) });
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

