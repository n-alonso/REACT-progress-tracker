import { Card, Group, Text } from "@mantine/core";
import { useParams } from "react-router";

import { ShowDetails } from "../../components";
import { shows, type Show } from "../../data";

import styles from './ShowsPage.module.css';

export function ShowDetailsPage() {
    const { id } = useParams();
    const show: Show = shows.find(s => s.id === Number(id)) as Show;

    return (
        <div>
            <Card withBorder radius="md" className={styles.card}>
                <Group justify="center">
                    <Text size="xl" my="md" className={styles.title}>
                        {show.title}
                    </Text>
                </Group>
                <ShowDetails show={show} />
            </Card>
        </div>
    );
}
