import { Modal, Text, RingProgress, useMantineTheme, Group } from "@mantine/core";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { watcheds, type Show, type User } from "../../data";

import styles from './Modal.module.css';

type ShowModalProps = {
    show: Show | null,
    isOpened: boolean,
    onCloseHandler: () => void
}

export function ShowModal({ show, isOpened, onCloseHandler }: ShowModalProps) {
    const theme = useMantineTheme();
    const user: User = useContext(AuthContext);

    if (!show) return null;

    const title = show?.title ?? "No Show";
    const completed: number = watcheds.filter(watched => (watched.showId == show.id) && (watched.userId == user.id)).length;
    const total: number = show.episodeIds.length; 

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
                                    {((completed / total) * 100).toFixed(0)}%
                                </Text>
                                <Text ta="center" fz="xs" c="dimmed">
                                    Completed
                                </Text>
                            </div>
                        }
                    />
                </div>
            </div>
        </Modal>
    );
}
