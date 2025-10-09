import { Card, Group, Text, Stack, Avatar } from "@mantine/core";
import { IconUserSquare } from "@tabler/icons-react";

import { useAuth } from "../../contexts";
import styles from './ProfilePage.module.css';

export function ProfilePage() {
    const { user, isLoading, isError, error } = useAuth();

    if (isLoading) return <h1>Loading User...</h1>;
    if (isError) return <h1>Error: {error?.message}</h1>;
    if (!user) return <h1>User not found.</h1>;

    const uniqueShows = new Set(user.watchedEpisodes?.map(ep => ep.showId) || []);
    const showsTracking = uniqueShows.size;

    return (
        <Card withBorder radius="md" className={styles.card}>
            <Text size="xl" className={styles.title}>
                Profile
            </Text>

            <div className={styles.contentContainer}>
                <Stack gap="lg" align="center">
                    <Avatar size={120} radius={120} color="blue">
                        <IconUserSquare size={80} stroke={1.5} />
                    </Avatar>

                    <Stack gap="xs" align="center">
                        <Text size="xl" fw={600} c="var(--mantine-color-blue-filled)">
                            {user.username}
                        </Text>
                        <Text size="sm" c="dimmed">
                            User ID: {user.id}
                        </Text>
                    </Stack>

                    <Group gap="xl" mt="md">
                        <Stack gap={5} align="center">
                            <Text size="xs" c="dimmed">
                                Currently Watching
                            </Text>
                            <Text size="lg" fw={500} c="var(--mantine-color-blue-filled)">
                                {showsTracking} Shows
                            </Text>
                        </Stack>
                    </Group>
                </Stack>
            </div>
        </Card>
    );
}

