import React from "react";
import styles from "./index.module.scss";

export const Main: React.FC = ({ ...props }) => {
  return (
    <div className={`${styles.main} container`}>
      {props.children}
    </div>
  );
};
