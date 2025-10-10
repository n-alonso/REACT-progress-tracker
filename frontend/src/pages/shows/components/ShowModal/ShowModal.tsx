import { Modal, Text, RingProgress, useMantineTheme, Group, UnstyledButton } from "@mantine/core";
import { Link } from "react-router";

import { useAuth } from "../../../../contexts";
import { type Show, useWatchedEpisodes } from "../../../../data";

import styles from './ShowModal.module.css';

type ShowModalProps = {
    show: Show | null,
    isOpen: boolean,
    onClose: () => void
}

export function ShowModal({ show, isOpen, onClose }: ShowModalProps) {
    const theme = useMantineTheme();
    const { user, isLoading, isError, error } = useAuth();
    const { data: watchedEpisodes, isLoading: isLoadingWatchedEpisodes, isError: isErrorWatchedEpisodes, error: errorWatchedEpisodes } = useWatchedEpisodes(user?.id ?? 0, show?.id ?? 0);

    if (!show) return null;

    if (isLoading) return <h1>Loading User...</h1>;
    if (isError) return <h1>Error: {error?.message}</h1>;
    if (!user) return <h1>User not found.</h1>;

    if (isLoadingWatchedEpisodes) return <h1>Loading Watched Episodes...</h1>;
    if (isErrorWatchedEpisodes) return <h1>Error: {errorWatchedEpisodes.message}</h1>;
    if (!watchedEpisodes) return <h1>Watched Episodes not found.</h1>;

    const title = show.title;
    const completed: number = watchedEpisodes.length;
    const total: number = show.episodes.length;

    return (
        <Modal
            opened={isOpen}
            onClose={onClose}
            title="Tracking Details"
            centered
            padding="xl"
            radius="md"
        >
            <div className={styles.inner}>
                <div>
                    <Text fz="h1" c="var(--mantine-color-blue-filled)" className={styles.label}>
                        {title}
                    </Text>
                    <div>
                        <Text className={styles.lead} mt={30}>
                            {total}
                        </Text>
                        <Text fz="xs" c="dimmed">
                            Total Episodes
                        </Text>
                    </div>
                    <Group mt="lg">
                        <div>
                            <Text className={styles.lead} mt={30}>
                                {completed}
                            </Text>
                            <Text fz="xs" c="dimmed">
                                Completed
                            </Text>
                        </div>
                        <div>
                            <Text className={styles.lead} mt={30}>
                                {total - completed}
                            </Text>
                            <Text fz="xs" c="dimmed">
                                Remaining
                            </Text>
                        </div>
                    </Group>
                    <UnstyledButton
                        component={Link}
                        to={`/shows/${show.id}`}
                        c="white"
                        bg="var(--mantine-color-blue-filled)"
                        mt="xl"
                        className={styles.item}
                    >
                        Open Details
                    </UnstyledButton>
                </div>

                <div className={styles.ring}>
                    <RingProgress
                        roundCaps
                        thickness={6}
                        size={150}
                        sections={[{
                            value: total > 0 ? (completed / total) * 100 : 0,
                            color: theme.primaryColor
                        }]}
                        label={
                            <div>
                                <Text ta="center" fz="lg" c="var(--mantine-color-blue-filled)" className={styles.label}>
                                    {(total > 0 ? (completed / total) * 100 : 0).toFixed(0)}%
                                </Text>
                                <Text ta="center" fz="xs" c="dimmed">
                                    Completed
                                </Text>
                            </div>
                        }
                    />
                </div>
            </div>
        </Modal >
    );
}
