import { Card, Group, Text, RingProgress, SimpleGrid, ActionIcon } from "@mantine/core"
import { useContext, useState } from "react";

import { episodes, watcheds, type Show } from "../../data"
import { AuthContext } from "../../contexts/AuthContext";

import styles from './ShowDetails.module.css';
import { IconEye, IconEyeOff } from "@tabler/icons-react";

type ShowDetailsProps = {
    show: Show,
}

export function ShowDetails({ show }: ShowDetailsProps) {
    const user = useContext(AuthContext);
    const showEpisodes = episodes.filter(episode => episode.showId == show.id);

    const [isWatched, setIsWatched] = useState<boolean[]>(
        new Array(showEpisodes.length).fill(false)
    );

    watcheds.forEach(watched => {
        if ((watched.showId == show.id) && (watched.userId == user.id)) {
            const newIsWatched = isWatched.slice();
            newIsWatched[watched.episodeId] = true;
            setIsWatched(newIsWatched);
        }
    });
    
    showEpisodes.map(episode => {
        return (
            <Group key={episode.id} justify="space-between">
                <Text c="dimmed">{episode.title}</Text>
                {
                    isWatched[episode.id]
                    ? 
                    <ActionIcon size="lg" color='var(--mantine-color-blue-filled)' variant='subtle' className={styles.link} >
                        <IconEye />
                    </ActionIcon>
                    : 
                    <ActionIcon size="lg" color='gray' variant='subtle' className={styles.link} >
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
                    {showEpisodes}
                </SimpleGrid>
            </div>
        </Card>
    )
}
