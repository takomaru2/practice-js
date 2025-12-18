import styles from "../ProgressApp/index.module.scss";

export const RestButton = ({ label, onClick }) => {
  return (
    <button className={styles.resetButton} onClick={onClick}>
      {label}
    </button>
  );
};
