import styles from "./index.module.scss";

export const Button = ({ speaker, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {speaker}
    </button>
  );
};
