import React from "react";
import styles from "./themeToggleSwitch.module.css";
import { useTheme } from "next-themes";

const ThemeToggleSwitch = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
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
