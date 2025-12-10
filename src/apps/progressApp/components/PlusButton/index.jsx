import styles from "../ProgressApp/index.module.scss";

export const PlusButton = ({ progress, onClick, displayNumber }) => {
  const completed = progress === 100;
  return (
    <button
      className={completed ? styles.addDisabled : styles.addButton}
      onClick={onClick}
    >
      {displayNumber}
    </button>
  );
};
