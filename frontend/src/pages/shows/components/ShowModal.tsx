import { Modal, Text, RingProgress, useMantineTheme, Group, UnstyledButton } from "@mantine/core";
import { Link } from "react-router";

import { useAuth } from "../../../contexts";
import { type Show, useWatcheds } from "../../../data";

import styles from './ShowModal.module.css';

type ShowModalProps = {
    show: Show | null,
    isOpened: boolean,
    onCloseHandler: () => void
}

export function ShowModal({ show, isOpened, onCloseHandler }: ShowModalProps) {
    if (!show) return null;

    const theme = useMantineTheme();

    const { user, isLoading, isError, error } = useAuth();
    if (isLoading) return <h1>Loading User...</h1>;
    if (isError) return <h1>Error: {error?.message}</h1>;
    if (!user) return <h1>User not found.</h1>;

    const { data: watcheds, isLoading: isLoadingWatcheds, isError: isErrorWatcheds, error: errorWatcheds } = useWatcheds(user.id, show.id);
    if (isLoadingWatcheds) return <h1>Loading Watcheds...</h1>;
    if (isErrorWatcheds) return <h1>Error: {errorWatcheds.message}</h1>;
    if (!watcheds) return <h1>Watcheds not found.</h1>;

    const title = show.title;
    const completed: number = watcheds.length;
    const total: number = show.episodes.length;

    return (
        <Modal
            opened={isOpened}
            onClose={onCloseHandler}
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
