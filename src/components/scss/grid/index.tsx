import Image from 'next/image';
import React from 'react'
import styles from "./index.module.scss";

type Props = {
    // title: string;
}

export const Grid: React.FC<Props> = (props) => {
    return (
        <div className={styles.grid}>
            {props.children}
        </div>
    )
}
