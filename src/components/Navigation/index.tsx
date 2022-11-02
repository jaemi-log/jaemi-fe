import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useSetAtom } from "jotai";
import React from "react";

import { dialogOpenAtom } from "../../store";
import NavigationItem from "../NavigationItem";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const setDialogOpen = useSetAtom(dialogOpenAtom);

  return (
    <nav className={styles.container}>
      <NavigationItem onClick={() => setDialogOpen(true)}>
        <PlusCircleIcon className={styles.plusIcon} />
      </NavigationItem>
    </nav>
  );
};

export default Navigation;
