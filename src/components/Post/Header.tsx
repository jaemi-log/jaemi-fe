import React from "react";

import styles from "./Header.module.css";

type Props = {
  title: string;
  date: Date;
};

const Header = ({ title, date }: Props) => {
  return (
    <header className={styles.header}>
      <span className={styles.date}>{date.toLocaleDateString()}</span>
      <h5 className={styles.title}>{title}</h5>
    </header>
  );
};

export default Header;
