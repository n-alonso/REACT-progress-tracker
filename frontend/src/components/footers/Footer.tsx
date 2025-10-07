import { ActionIcon, Container, Group, Text } from '@mantine/core';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { Link } from 'react-router';

import styles from './Footer.module.css';

const socials = [
    { icon: <IconBrandInstagram />, label: "instagram" }, 
    { icon: <IconBrandTwitter  />, label: "twitter" }, 
    { icon: <IconBrandYoutube />, label: "youtube" },
].map(({ icon, label }) => {
    return (
        <Link to="not-implemented" key={label}>
            <ActionIcon size="lg" color='gray' variant='subtle' className={styles.link} >
                {icon}
            </ActionIcon>
        </Link>
    )
});

export function Footer() {
    return (
        <footer className={styles.footer}>
            <Container className={styles.inner}>
                <Text c="dimmed" size="sm">© 2001 Company X. Licensing and rights text, yada yada.</Text>
                <Group>
                    {socials}
                </Group>
            </Container>
        </footer>
    );
}
