import styles from "./index.module.scss";

export const Button = ({ num, handleClick, operator }) => {
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
