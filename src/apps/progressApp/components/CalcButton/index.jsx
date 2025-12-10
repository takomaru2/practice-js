import styles from "../ProgressApp/index.module.scss";

export const CalcButton = ({ onClick, label, isdisabled }) => {
  return (
    <button
      className={isdisabled ? styles.minusDisabled : styles.minusButton}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
