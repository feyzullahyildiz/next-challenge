import React from "react";
import styles from "./index.module.scss";
import { Button } from "@components/scss";
import Link from "next/link";

export const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1>superplate</h1>
      <p>The frontend boilerplate with superpowers!</p>
      <Link href="/movies">Tıkla</Link>
      <Button>Docs</Button>
    </div>
  );
};
