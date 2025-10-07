import { Text, Group, Container, Badge, Title, SimpleGrid, Card } from "@mantine/core";
import { IconDeviceTv, IconTool, IconUserCircle } from "@tabler/icons-react";

import styles from './HomePage.module.css';

export function HomePage() {
    return (
        <Container size='lg' py='xl'>
            <Group justify='center'>
                <Badge variant="filled" size="lg">
                    Progress Tracker
                </Badge>
            </Group>

            <Title ta="center" mt="sm" order={2} className={styles.title}>
                Track your watching progress on your favourite shows
            </Title>

            <Text c="dimmed" ta="center" mt="md" className={styles.description}>
                There is some progress tracking needed and of course this description is very necessary too!
                Don't ever dare to doubt that.
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} mt={50} spacing="xl">
                <Card shadow="md" radius="md" padding="xl" className={styles.card}>
                    <IconDeviceTv size={50} stroke={1.5} className={styles.icon}/>
                    <Text fz="lg" fw={500} mt="md" className={styles.cardTitle}>
                        Browse and Search Shows
                    </Text>
                    <Text fz="sm" c="dimmed" mt="sm">
                        Check all the available shows in the platform that can be tracked and search for specific ones.
                    </Text>
                </Card>
                <Card shadow="md" radius="md" padding="xl" className={styles.card}>
                    <IconUserCircle size={50} stroke={1.5} className={styles.icon}/>
                    <Text fz="lg" fw={500} mt="md" className={styles.cardTitle}>
                        User Profiles
                    </Text>
                    <Text fz="sm" c="dimmed" mt="sm">
                        Save your progress for every show, explore your list and browse your personal details.
                    </Text>
                </Card>
                <Card shadow="md" radius="md" padding="xl" className={styles.card}>
                    <IconTool size={50} stroke={1.5} className={styles.icon}/>
                    <Text fz="lg" fw={500} mt="md" className={styles.cardTitle}>
                        Tech Stack
                    </Text>
                    <Text fz="sm" c="dimmed" mt="sm">
                        Built with Vite, React, React-Router, React Query, Mantine and Tabler Icons.
                    </Text>
                </Card>
            </SimpleGrid>
        </Container>
    );
}
