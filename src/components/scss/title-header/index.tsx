import React from 'react'
import styles from "./index.module.scss";

type Props = {
    title: string;
}

export const TitleHeader: React.FC<Props> = ({title}) => {
    return (
        <h2 className={styles.titleHeader}>
            <div className="container">{title}</div>
        </h2>
    )
}
