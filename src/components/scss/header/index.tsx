import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.nav} container`}>
        <Link href="/" passHref>
          <a className={styles.mainpage}><h2>DEMO Streaming</h2></a>
        </Link>
        <div className={styles.buttons}>
          <a className={styles.login} target="_self" href="#">Log in</a>
          <a className={styles.trialButton} href="#" target="_self">Start your free trial</a>
        </div>
      </div>
    </div>
  );
};
