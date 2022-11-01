import React, { ReactNode } from "react";

import styles from "./NavigationItem.module.css";

type Props = {
  children: ReactNode;
};

const NavigationItem = ({ children }: Props) => {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
};

export default NavigationItem;
