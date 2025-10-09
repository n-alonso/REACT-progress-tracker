import { Card, Group, Text, RingProgress, SimpleGrid, ActionIcon } from "@mantine/core"
import { IconEye, IconEyeOff } from "@tabler/icons-react";

import { useAuth } from "../../../contexts";
import { type Show, useWatchedEpisodes } from "../../../data";

import styles from './ShowDetails.module.css';

type ShowDetailsProps = {
    show: Show,
}

export function ShowDetails({ show }: ShowDetailsProps) {
    const { user, isLoading: isLoadingUser, isError: isErrorUser, error: errorUser } = useAuth();
    if (isLoadingUser) return <h1>Loading User...</h1>;
    if (isErrorUser) return <h1>Error: {errorUser?.message}</h1>;
    if (!user) return <h1>User not found.</h1>;

    const { data: watchedEpisodes, isLoading: isLoadingWatchedEpisodes, isError: isErrorWatchedEpisodes, error: errorWatchedEpisodes } = useWatchedEpisodes(user.id, show.id);
    if (isLoadingWatchedEpisodes) return <h1>Loading Watched Episodes...</h1>;
    if (isErrorWatchedEpisodes) return <h1>Error: {errorWatchedEpisodes.message}</h1>;
    if (!watchedEpisodes) return <h1>Watched Episodes not found.</h1>;

    const episodes = show.episodes.map(episode => {
        return (
            <Group key={episode.id} justify="space-between">
                <Text c="dimmed">{episode.title}</Text>
                {
                    watchedEpisodes.find(watchedEpisode => watchedEpisode.episodeId === episode.id)
                        ? <ActionIcon size="lg" color='var(--mantine-color-blue-filled)' variant='subtle' className={styles.link} >
                            <IconEye />
                        </ActionIcon>
                        : <ActionIcon size="lg" color="grey" variant='subtle' className={styles.link} >
                            <IconEyeOff />
                        </ActionIcon>
                }
            </Group>
        );
    });

    const total = show.episodes.length;
    const watched = watchedEpisodes.length;
    const remaining = total - watched;
    const percentage = (watched / total) * 100;

    return (
        <Card withBorder padding="lg" radius="md" mt="md" className={styles.card}>
            <Text mt="lg" className={styles.title}>Tracking Details</Text>
            <Group justify="space-between">
                <Text mt="sm" mb="md" c="dimmed" fz="xs">
                    {total} Total episodes • {watched} Watched • {remaining} Remaining
                </Text>
                <Group gap={5}>
                    <Text fz="xs" c="dimmed">
                        {percentage.toFixed(0)}% completed
                    </Text>
                    <RingProgress size={18} thickness={2} sections={[{ value: percentage, color: 'blue' }]} />
                </Group>
            </Group>
            <Text mt="lg">Episodes:</Text>
            <div className={styles.gridContainer}>
                <SimpleGrid cols={1} mt="sm">
                    {episodes}
                </SimpleGrid>
            </div>
        </Card>
    )
}
