import styles from "./index.module.scss";

export const TextCounter = () => {
  return (
    <div className={styles.container}>
      <h1>テキストカウンター</h1>
      <div className={styles.counterWrapper}>
        <div className={styles.counterItem}>
          <div>文字数 </div>
          <span>0</span>
        </div>
        <div className={styles.counterItem}>
          <div>行数 </div>
          <span>0</span>
        </div>
      </div>
      <textarea
        className={styles.textArea}
        placeholder={"ここに書けやれい"}
      ></textarea>
      <div className={styles.hoge}>
        <button className={styles.clearButton}>全消しンゴ</button>
      </div>
    </div>
  );
};
