import { Card, Group, Text } from "@mantine/core";
import { useParams } from "react-router";

import { ShowDetails } from "./components";
import { useShow } from "../../data";

import styles from './ShowsPage.module.css';

export function ShowDetailsPage() {
    const { id } = useParams();
    const { data: show, isLoading, isError, error } = useShow(Number(id));

    if (isLoading) return <h1>Loading Show...</h1>;
    if (isError) return <h1>Error: {error.message}</h1>;
    if (!show) return <h1>Show not found.</h1>;

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
