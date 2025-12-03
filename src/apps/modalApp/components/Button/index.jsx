import styles from "./index.module.scss";

export const Button = ({ label, showModal }) => {
  return (
    <button className={styles.fuga} onClick={showModal}>
      {label}
    </button>
  );
};
