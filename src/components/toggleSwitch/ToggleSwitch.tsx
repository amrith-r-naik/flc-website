import React, { MouseEventHandler } from "react";
import styles from "./toggleSwitch.module.css";

interface ToggleSwitchProps {
  onSwitch: MouseEventHandler<HTMLInputElement>;
  className: string;
}

const ToggleSwitch = ({ onSwitch, className }: ToggleSwitchProps) => {
  return (
    <input
      type="checkbox"
      className={`${styles.themecheckbox} ${className}`}
      onClick={onSwitch}
    />
  ); // Set size manually in the css file
};

export default ToggleSwitch;
