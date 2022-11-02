import React, { ReactNode } from "react";

import styles from "./Content.module.css";

type Props = {
  children: ReactNode;
};

const Content = ({ children }: Props) => {
  return <p className={styles.content}>{children}</p>;
};

export default Content;
