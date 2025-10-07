import { Container, Group } from '@mantine/core';
import { Link } from 'react-router';

import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <Container size="xl" className={styles.inner}>
            <Group>
                <Link to="/home" color='red' className={styles.link}>Home</Link>
                <Link to="/shows" color='red' className={styles.link}>Shows</Link>
            </Group>
            <Group>
                <Link to="not-implemented" color='red' className={styles.link}>Profile</Link>
            </Group>
            </Container>
        </header>
    );
};
