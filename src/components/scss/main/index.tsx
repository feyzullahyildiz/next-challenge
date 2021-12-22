import React from "react";
import styles from "./index.module.scss";

type Props = {
  justifyContent?: string;
}
export const Main: React.FC<Props> = ({ justifyContent = 'flex-start', ...props }) => {
  return (
    <div className={`${styles.main} container`} style={{ justifyContent }}>
      {props.children}
    </div>
  );
};
