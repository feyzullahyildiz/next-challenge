import React, { ChangeEvent } from 'react'
import styles from "./index.module.scss";

type Props = {
    // title: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export const Search: React.FC<Props> = (props) => {
    return (
        <label className={styles.content}>
            <input className={styles.input}
                placeholder='Search'
                type="text"
                value={props.value}
                onChange={props.onChange}
            />
            <img className={styles.icon} src="/icons/search.png"

            />
        </label>
    )
}
