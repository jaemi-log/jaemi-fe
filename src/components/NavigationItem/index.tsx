import React, { ReactNode } from "react";

import styles from "./NavigationItem.module.css";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const NavigationItem = ({ children, onClick }: Props) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default NavigationItem;
