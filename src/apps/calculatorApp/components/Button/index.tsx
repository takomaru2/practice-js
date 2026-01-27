import styles from "./index.module.scss";
import { CSSProperties, MouseEventHandler } from "react";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  label: string;
  variant: Variant;
};

export const Button = ({ onClick, label, variant }: ButtonProps) => {
  return (
    <button
      style={colorStyle[variant]}
      type={"button"}
      className={styles.button}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

type Variant = "primary" | "secondary";

const colorStyle: Record<Variant, CSSProperties> = {
  primary: { backgroundColor: "#4169e1", color: "whitesmoke" },
  secondary: { backgroundColor: "lightgrey", color: "dimgray" },
};
