import styles from "./index.module.scss";

type ProgressBarProps = {
  progress: number;
};

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className={styles.progress}>
      <div className={styles.bar}></div>
      <div className={styles.activeBar} style={{ width: `${progress}%` }}></div>
      <span className={styles.pa}>{progress}%</span>
    </div>
  );
};
