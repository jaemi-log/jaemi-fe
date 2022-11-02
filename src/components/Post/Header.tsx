import React, { ReactNode } from "react";

import styles from "./Header.module.css";

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  return <h5 className={styles.title}>{children}</h5>;
};

export default Header;
