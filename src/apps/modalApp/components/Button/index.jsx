import styles from "./index.module.scss";

export const Button = ({ label, onClick }) => {
  return (
    <button className={styles.triggerButton} onClick={onClick}>
      {label}
    </button>
  );
};
