import styles from "../ProgressApp/index.module.scss";

export const CompleteButton = ({ label, onClick, completed }) => {
  return (
    <button
      className={completed ? styles.completeDisabled : styles.completeButton}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
