import styles from "./index.module.scss";
import { FC } from "react";

type TabButtonProps = {
  isSelected: boolean;
  onClick: () => void;
  icon: string;
  label: string;
};

export const TabButton: FC<TabButtonProps> = (props) => {
  const buttonClassName: string = `${styles.container} ${props.isSelected ? styles.active : ""}`;

  return (
    <button className={buttonClassName} onClick={props.onClick}>
      <span>{props.icon}</span>
      <span> {props.label}</span>
    </button>
  );
};
