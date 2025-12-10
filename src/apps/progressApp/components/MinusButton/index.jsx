import styles from "../ProgressApp/index.module.scss";

export const MinusButton = ({ progress, onClick, displayNumber }) => {
  const isMinusDisabled = progress <= 0;
  return (
    <button
      disabled={progress === 0}
      className={isMinusDisabled ? styles.minusDisabled : styles.minusButton}
      onClick={onClick}
    >
      {displayNumber}
    </button>
  );
};
