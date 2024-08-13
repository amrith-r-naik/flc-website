import { useTheme } from "next-themes";
import React from "react";

import styles from "./themeToggleSwitch.module.css";

const ThemeToggleSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  // TODO(Omkar): Better toggle
  return (
    <input
      type="checkbox"
      checked={resolvedTheme === "dark"}
      className={styles.themecheckbox}
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    />
  ); // Set size manually in the css file
};

export default ThemeToggleSwitch;
