import styles from "./index.module.scss";

export const CheckBoxApp = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>モーニングルーティン</h1>

      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>
            <th className={styles.checkboxColumn}>
              <input type="checkbox" />
            </th>
            <th>項目</th>
            <th>予測時間</th>
          </tr>
        </thead>

        <tbody>
          <tr className={styles.fuga}>
            <th className={styles.checkboxColumn}>
              <input type="checkbox" />
            </th>
            <th>スクワット</th>
            <th>120分</th>
          </tr>

          <tr className={styles.fuga}>
            <th className={styles.checkboxColumn}>
              <input type="checkbox" />
            </th>
            <th>ダッシュ</th>
            <th>120分</th>
          </tr>
        </tbody>
      </table>
      {/*<div>選択中:1/7</div>*/}
    </div>
  );
};
