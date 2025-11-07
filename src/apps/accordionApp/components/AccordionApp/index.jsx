import styles from "./index.module.scss";

export const AccordionApp = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>FAQ</h1>
      <div className={styles.buttonWrapper}>
        <button className={styles.open}>すべて開く</button>
        <button className={styles.close}>すべて閉じる</button>
      </div>

      <div className={styles.accordionMenu}>
        <button className={styles.accordionItem}>
          <span className={styles.question}>なんだとはなんですか</span>
          <span className={styles.icon}>▼</span>
        </button>
        <button className={styles.accordionItem}>
          <span className={styles.question}>なんだとはなんですか</span>
          <span className={styles.icon}>▼</span>
        </button>
      </div>
    </div>
  );
};
