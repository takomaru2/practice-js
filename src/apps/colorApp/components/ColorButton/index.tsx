import styles from "./index.module.scss";
import { CSSProperties } from "react";

export type colorButtonProps = {
  colorName: string;
  colorCode: string;
  onClick: () => void;
};

export const ColorButton = ({
  colorName,
  colorCode,
  onClick,
}: colorButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={{ "--hover-bg-color": colorCode } as CSSProperties}
    >
      <div>{colorName}</div>
      <div>{colorCode}</div>
    </button>
  );
};
