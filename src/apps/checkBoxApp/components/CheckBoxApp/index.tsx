import styles from "./index.module.scss";
import { useState } from "react";

export const CheckBoxApp = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const hasChecked = check1 || check2 || check3;
  const checks = [check1, check2, check3];
  // trueなやつ数える。filterがtruthyなものを返すのだ。つまりtrueの数だけ数えれる
  const count = checks.filter(Boolean).length;
  const total = checks.length;

  const checkAllFn = () => {
    // 両方チェックされているときだけtrueの反転だから両方チェックされている時にfalse
    const next = !(check1 && check2);
    setCheck1(next);
    setCheck2(next);
    setCheck3(next);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>モーニングルーティン</h1>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>
            <th className={styles.checkBoxColumn}>
              <input
                type="checkbox"
                checked={hasChecked}
                onChange={checkAllFn}
              />
            </th>
            <th className={styles.cell}>項目</th>
            <th className={styles.cell}>予測時間</th>
          </tr>
        </thead>

        <tbody>
          <tr className={styles.fuga}>
            <th className={styles.checkBoxColumn}>
              <input
                type="checkbox"
                checked={check1}
                onChange={() => setCheck1(!check1)}
              />
            </th>
            <th className={styles.cell}>スクワット</th>
            <th className={styles.cell}>120分</th>
          </tr>

          <tr className={styles.fuga}>
            <th className={styles.checkBoxColumn}>
              <input
                type="checkbox"
                checked={check2}
                onChange={() => setCheck2(!check2)}
              />
            </th>
            <th className={styles.cell}>ダッシュ</th>
            <th className={styles.cell}>120分</th>
          </tr>

          <tr className={styles.fuga}>
            <th className={styles.checkBoxColumn}>
              <input
                type="checkbox"
                checked={check3}
                onChange={() => setCheck3(!check3)}
              />
            </th>
            <th className={styles.cell}>朝ごはん</th>
            <th className={styles.cell}>1分</th>
          </tr>
        </tbody>
      </table>
      {/*チェック１つでもついていたら出てくる*/}
      {/* todo:countの部分が可変になる */}
      {hasChecked && (
        <div className={styles.count}>
          選択中:{count}/{total}
        </div>
      )}
    </div>
  );
};
