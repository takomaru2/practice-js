import styles from "./index.module.scss";

export const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progress}>
      <div className={styles.bar}></div>
      <div className={styles.activeBar} style={{ width: `${progress}%` }}></div>
      <span className={styles.pa}>{progress}%</span>
    </div>
  );
};
