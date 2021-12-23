import React from 'react'
import styles from "./index.module.scss";

type Props = {
    justifyContent?: string;
    alignItems?: string;
}

export const Row: React.FC<Props> = ({ justifyContent = 'flex-end', alignItems = 'center', ...props}) => {
    return (
        <div className={styles.row} style={{justifyContent, alignItems}}>
            {props.children}
        </div>
    )
}
