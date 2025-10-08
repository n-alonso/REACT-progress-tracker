import { Container, Group } from '@mantine/core';
import { Link } from 'react-router';

import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <Container size="xl" className={styles.inner}>
                <Group>
                    <Link to="/home" className={styles.link}>Home</Link>
                    <Link to="/shows" className={styles.link}>Shows</Link>
                </Group>
                <Group>
                    <Link to="not-implemented" className={styles.link}>Profile</Link>
                </Group>
            </Container>
        </header>
    );
};
