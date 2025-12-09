import styles from "./index.module.scss";
import { useState } from "react";

export const ProgressApp = () => {
  const [progress, setProgress] = useState(0);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Progress Bar</h1>
      <div className={styles.card}>
        <div className={styles.progress}>
          <div className={styles.bar}></div>
          <div
            className={styles.activeBar}
            style={{ width: `${progress}%` }}
          ></div>
          <span className={styles.pa}>{progress}%</span>
        </div>
        <div className={styles.controllers}>
          <div className={styles.hoge}>
            <button
              className={styles.minusButton}
              onClick={() => setProgress(progress - 10)}
            >
              -10
            </button>
            <button
              className={styles.minusButton}
              onClick={() => setProgress(progress - 5)}
            >
              -5
            </button>
            <button
              className={styles.addButton}
              onClick={() => setProgress(progress + 5)}
            >
              +5
            </button>
            <button
              className={styles.addButton}
              onClick={() => setProgress(progress + 10)}
            >
              +10
            </button>
          </div>
          <div className={styles.fuga}>
            <button
              className={styles.resetButton}
              onClick={() => setProgress(0)}
            >
              リセット
            </button>
            <button
              className={styles.controlButton}
              onClick={() => setProgress(100)}
            >
              完了
            </button>
          </div>
          <div className={styles.complete}>😭完了しました！</div>
        </div>
      </div>
    </div>
  );
};
