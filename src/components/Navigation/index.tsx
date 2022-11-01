import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

import NavigationItem from "../NavigationItem";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    // <div className={styles.wrapper}>
    <nav className={styles.container}>
      <NavigationItem>
        <PlusCircleIcon className={styles.plusIcon} />
      </NavigationItem>
    </nav>
    // </div>
  );
};

export default Navigation;
