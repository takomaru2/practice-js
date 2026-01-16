import styles from "./index.module.scss";

export const CalculatorApp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.pageTitle}>計算フォーム</h1>
        <label className={styles.inputGroup}>
          <span className={styles.label}>数値１</span>
          <input
            type="number"
            className={styles.input}
            placeholder={"数値を入力してくれ"}
          />
        </label>

        <label className={styles.inputGroup}>
          <span className={styles.label}>演算子</span>
          <select name="selectedFruit" className={styles.input}>
            <option>+</option>
            <option>-</option>
            <option>x</option>
            <option>÷</option>
          </select>
        </label>

        <label className={styles.inputGroup}>
          <span className={styles.label}>数値2</span>
          <input
            type="number"
            className={styles.input}
            placeholder={"数値を入力してくれ"}
          />
        </label>
        <div className={styles.buttonGroup}>
          <button className={styles.submitButton}>計算する</button>
          <button className={styles.resetButton}>リセッツ</button>
        </div>

        {/*<div className={styles.error}>有効な数値を入力してください</div>*/}
        {/*<div className={styles.result}>*/}
        {/*  <div className={styles.resultLabel}>結果</div>*/}
        {/*  <div className={styles.resultValue}>数字</div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
