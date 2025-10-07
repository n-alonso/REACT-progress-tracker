import type { MouseEventHandler } from "react";
import { UnstyledButton, Text } from "@mantine/core";

import styles from './Show.module.css';

type ShowProps = {
    title: string,
    clickHandler: MouseEventHandler<HTMLButtonElement>
}

export function Show({ title, clickHandler }: ShowProps) {
    return (
        <UnstyledButton
            onClick={clickHandler}
            className={styles.item}
            c="white"
            bg="var(--mantine-color-blue-filled)"
        >
            <Text mt={7}>{title}</Text>
        </UnstyledButton>
    );
}
