import styles from "./index.module.scss";
import { useRef, useState } from "react";

export const CheckBoxApp = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const hasChecked = check1 || check2;
  const checks = [check1, check2];
  // trueなやつ数える。filterがtruthyなものを返すのだ。つまりtrueの数だけ数えれる
  const count = checks.filter(Boolean).length;
  const total = checks.length;

  const checkAllFn = () => {
    // 両方チェックされているときだけtrueの反転だから両方チェックされている時にfalse
    const next = !(check1 && check2);
    setCheck1(next);
    setCheck2(next);
  };

  // パーシャルの
  // 条件　選択されているチェックボックスが１つ以上かつ、全選択はされていない状態
  // 何をするのか　項目の中身横棒にする

  // const allCheck = check1 && check2 && check3;
  // const isPartial = hasChecked && !allCheck;

  // 項目チェックボックスを変数に入れて扱えるようにしたい。propsにないのでuseRef使う。
  const allCheckBoxRef = useRef<HTMLInputElement | null>(null);
  console.log(
    "ほげ",
    allCheckBoxRef.current && allCheckBoxRef.current.indeterminate,
  );

  // useEffect(() => {
  //   console.log("allCheckBoxRef", allCheckBoxRef);
  // }, []);

  // useEffect(() => {
  //   if (allCheckBoxRef.current) {
  //     allCheckBoxRef.current.indeterminate = isPartial;
  //   }
  // }, [isPartial]);

  const updatePartial = (newIsPartial: boolean) => {
    if (allCheckBoxRef.current) {
      console.log("FUGA", newIsPartial);
      allCheckBoxRef.current.indeterminate = newIsPartial;
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>モーニングルーティン</h1>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>
            <th className={styles.checkBoxColumn}>
              <input
                ref={allCheckBoxRef}
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
                onChange={() => {
                  setCheck1(!check1);
                  const newAllCheck = !check1 && check2;
                  const newHasChecked = !check1 || check2;
                  const newIsPartial = newHasChecked && !newAllCheck;

                  updatePartial(newIsPartial);
                }}
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
                onChange={() => {
                  setCheck2(!check2);
                  const newAllCheck = check1 && !check2;
                  const newHasChecked = check1 || !check2;
                  const newIsPartial = newHasChecked && !newAllCheck;

                  updatePartial(newIsPartial);
                }}
              />
            </th>
            <th className={styles.cell}>ダッシュ</th>
            <th className={styles.cell}>120分</th>
          </tr>
        </tbody>
      </table>
      {hasChecked && (
        <div className={styles.count}>
          選択中:{count}/{total}
        </div>
      )}
    </div>
  );
};
