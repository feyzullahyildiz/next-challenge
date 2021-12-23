import React, { ChangeEvent } from 'react'
import styles from "./index.module.scss";

type Props = {
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    value: string;
}

export const Filter: React.FC<Props> = (props) => {
    return (
        <select onChange={props.onChange} value={props.value} className={styles.content}>
            <option value="title_asc">Sort by title in ascending order.</option>
            <option value="title_desc">Sort by title in descending order.</option>
            <option value="year_asc">Sort by year in ascending order.</option>
            <option value="year_desc">Sort by year in descending order.</option>
        </select>
    )
}
