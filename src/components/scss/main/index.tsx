import React from "react";
import styles from "./index.module.scss";

type Props = {
  justifyContent?: string;
}
export const Main: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={`${styles.main} container`}>
      {props.children}
    </div>
  );
};
