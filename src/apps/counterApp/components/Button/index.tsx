import styles from "./index.module.scss";
import { MouseEventHandler } from "react";

type ButtonProps = {
  num: number;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  operator: any; //todo: ここなんやねん
};

export const Button = ({ num, handleClick, operator }: ButtonProps) => {
  let className;

  switch (operator) {
    case "+":
      className = styles.add;
      break;
    case "-":
      className = styles.minus;
      break;
    case "x":
      className = styles.multiply;
      break;
    default:
      className = styles.add;
      break;
  }

  return (
    <button onClick={handleClick} className={`${styles.button} ${className}`}>
      {operator}
      {num}
    </button>
  );
};
