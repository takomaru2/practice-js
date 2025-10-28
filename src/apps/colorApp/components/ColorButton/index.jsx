import styles from "./index.module.scss";

export const ColorButton = ({ colorName, colorCode, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={{ "--hover-bg-color": colorCode }}
    >
      <div>{colorName}</div>
      <div>{colorCode}</div>
    </button>
  );
};
