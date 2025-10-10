import { Card, Group, SimpleGrid, Text, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

import { ShowComponent, ShowModal } from "../components";
import { type Show, useShows } from '../../../data';

import styles from './ShowsPage.module.css';

export function ShowsPage() {
    const { data, isLoading, isError, error } = useShows();
    const [selectedShow, setSelectedShow] = useState<Show | null>(null);
    const [isOpen, { open, close }] = useDisclosure(false);
    const [inputValue, setInputValue] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const handleShowClick = (show: Show) => {
        setSelectedShow(show);
        open();
    }

    if (isLoading) return <h1>Loading Show...</h1>;
    if (isError) return <h1>Error: {error.message}</h1>;

    const shows = (data || [])
        .filter(show => show.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .map(show => <ShowComponent key={show.id} title={show.title} onClick={() => handleShowClick(show)} />);

    return (
        <div>
            <Card withBorder radius="md" className={styles.card}>
                <Group justify="space-between">
                    <Text size="xl" className={styles.title}>
                        Shows
                    </Text>
                    <TextInput
                        radius="lg"
                        size="sm"
                        placeholder="Search"
                        value={inputValue}
                        onChange={event => setInputValue(event.currentTarget.value)}
                        onKeyDown={event => { if (event.key === 'Enter') setSearchQuery(event.currentTarget.value) }}
                    />
                </Group>
                <div className={styles.gridContainer}>
                    <SimpleGrid cols={4} mt="md" >
                        {shows}
                    </SimpleGrid>
                </div>
            </Card>

            <ShowModal show={selectedShow} isOpen={isOpen} onClose={close} />
        </div>
    );
}
