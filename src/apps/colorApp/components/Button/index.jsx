import styles from "./index.module.scss";

export const Button = ({ colorName, colorCode, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={{ "--bg-color": colorCode }}
    >
      <div>{colorName}</div>
      <div>{colorCode}</div>
    </button>
  );
};
