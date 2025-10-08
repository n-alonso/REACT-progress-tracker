import { Card, Group, Text, RingProgress, SimpleGrid, ActionIcon } from "@mantine/core"
import { IconEye, IconEyeOff } from "@tabler/icons-react";

import { useAuth } from "../../../contexts";
import { type Show, useWatcheds } from "../../../data";

import styles from './ShowDetails.module.css';

type ShowDetailsProps = {
    show: Show,
}

export function ShowDetails({ show }: ShowDetailsProps) {
    const { user, isLoading: isLoadingUser, isError: isErrorUser, error: errorUser } = useAuth();
    if (isLoadingUser) return <h1>Loading User...</h1>;
    if (isErrorUser) return <h1>Error: {errorUser?.message}</h1>;
    if (!user) return <h1>User not found.</h1>;

    const { data: watcheds, isLoading: isLoadingWatcheds, isError: isErrorWatcheds, error: errorWatcheds } = useWatcheds(user.id, show.id);
    if (isLoadingWatcheds) return <h1>Loading Watcheds...</h1>;
    if (isErrorWatcheds) return <h1>Error: {errorWatcheds.message}</h1>;
    if (!watcheds) return <h1>Watcheds not found.</h1>;

    const episodes = show.episodes.map(episode => {
        return (
            <Group key={episode.id} justify="space-between">
                <Text c="dimmed">{episode.title}</Text>
                {
                    watcheds.find(watched => watched.episodeId === episode.id)
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

    return (
        <Card withBorder padding="lg" radius="md" mt="md" className={styles.card}>
            <Text mt="lg" className={styles.title}>Tracking Details</Text>
            <Group justify="space-between">
                <Text mt="sm" mb="md" c="dimmed" fz="xs">
                    56 Total episodes • 17 Watched • 443 Remaining
                </Text>
                <Group gap={5}>
                    <Text fz="xs" c="dimmed">
                        80% completed
                    </Text>
                    <RingProgress size={18} thickness={2} sections={[{ value: 80, color: 'blue' }]} />
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
