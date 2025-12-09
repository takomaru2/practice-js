import styles from "./index.module.scss";

export const ProgressApp = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Progress Bar</h1>
      <div className={styles.card}>
        <div className={styles.progress}>
          <div className={styles.bar}></div>
          <div className={styles.activeBar}></div>
          <span className={styles.pa}>0%</span>
        </div>
        <div className={styles.controllers}>
          <div className={styles.hoge}>
            <button className={styles.minusButton}>-10</button>
            <button className={styles.minusButton}>-5</button>
            <button className={styles.addButton}>+5</button>
            <button className={styles.addButton}>+10</button>
          </div>
          <div className={styles.fuga}>
            <button className={styles.resetButton}>リセット</button>
            <button className={styles.controlButton}>完了</button>
          </div>
          <div className={styles.complete}>😭完了しました！</div>
        </div>
      </div>
    </div>
  );
};
