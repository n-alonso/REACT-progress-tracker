import { Card, Group, SimpleGrid, Text, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

import { Show as ShowComponent, ShowModal } from "../../components";
import { shows, type Show } from '../../data';

import styles from './ShowsPage.module.css';

export function ShowsPage() {
    const [selectedShow, setSelectedShow] = useState<Show | null>(null);
    const [isOpened, { open, close }] = useDisclosure(false);
    const [inputValue, setInputValue] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const handleShowClick = (show: Show) => {
        setSelectedShow(show);
        open();
    }

    const elements = shows
        .filter(show => show.title.toLowerCase().includes(searchQuery))
        .map(show => <ShowComponent key={show.id} title={show.title} clickHandler={() => handleShowClick(show)}/>);

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
                        onKeyDown={event => { if (event.key == 'Enter') setSearchQuery(event.currentTarget.value)}}
                    />
                </Group>
                <div className={styles.gridContainer}>
                    <SimpleGrid cols={4} mt="md" >
                        {elements}
                    </SimpleGrid>
                </div>
            </Card>

            <ShowModal show={selectedShow} isOpened={isOpened} onCloseHandler={close} />
        </div>
    );
}
