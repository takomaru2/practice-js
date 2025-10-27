import styles from "./index.module.scss";

export const Button = ({ color, colorCode, handleClick }) => {
  const shot = () => {
    handleClick(color);
  };

  return (
    <button
      onClick={shot}
      className={styles.button}
      style={{ "--bg-color": colorCode }}
    >
      <p>{color}</p>
      <p>{colorCode}</p>
    </button>
  );
};
