import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <h2 className={styles.logo}>재미로그</h2>
    </header>
  );
};

export default Header;
