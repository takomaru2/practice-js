import styles from "./index.module.scss";
import { FC, useEffect, useRef, useState } from "react";
//  NEXT 型=>map?=>component
type Item = {
  id: number;
  task: string;
  time: string;
};

const ITEMS: Item[] = [
  { id: 1, task: "スクワット", time: "120分" },
  { id: 2, task: "ダッシュ", time: "120分" },
];

//ちなみに最初の項目と所要時間みたいなところをITEMSに混ぜてないんだけど、これ混ぜるべきかな？
//コンポーネント化する時もこいつだけRef渡しているし、似ているけど責務違う気がする

export const CheckBoxApp: FC = () => {
  const [checkIds, setCheckIds] = useState<number[]>([]);

  const hasChecked = checkIds.length > 0;
  const count = checkIds.length;
  const total = ITEMS.length;
  const allChecked = checkIds.length === ITEMS.length;

  const isPartial = hasChecked && !allChecked;

  // 指定したidのチェック状態を切り替えるたい
  const toggleCheck = (id: number): void => {
    setCheckIds((prev) => {
      // チェック更新後のid配列を入れるための箱
      let updated;

      // すでに選択されている id なら配列から削除（チェックを外す）
      if (prev.includes(id)) {
        updated = prev.filter((value) => value !== id);
      } else {
        // 選択されていなければ配列に追加（チェックを入れる）
        updated = [...prev, id];
      }

      // 次のstateとして更新後の配列を返す
      return updated;
    });
  };

  // partial（横棒）は必ず解除する //updatePartial(false)で;
  const toggleAll = (): void => {
    if (allChecked) {
      // すでに全選択なら → すべて解除
      setCheckIds([]);
    } else {
      // まだ全選択でなければ → すべて選択
      setCheckIds(ITEMS.map((item) => item.id));
    }
  };

  // indeterminate（横棒の中間状態）はpropsでは制御できないため（propsが生えてないから）useRefを使う。
  const allCheckBoxRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (allCheckBoxRef.current !== null) {
      allCheckBoxRef.current.indeterminate = isPartial;
    }
  }, [isPartial]);

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
                checked={allChecked}
                onChange={toggleAll}
              />
            </th>
            <th className={styles.cell}>項目</th>
            <th className={styles.cell}>所要時間</th>
          </tr>
        </thead>

        <tbody>
          <tr className={styles.fuga}>
            <th className={styles.checkBoxColumn}>
              <input
                type="checkbox"
                checked={checkIds.includes(ITEMS[0].id)}
                onChange={() => {
                  toggleCheck(ITEMS[0].id);
                }}
              />
            </th>
            <th className={styles.cell}>{ITEMS[0].task}</th>
            <th className={styles.cell}>{ITEMS[0].time}</th>
          </tr>

          <tr className={styles.fuga}>
            <th className={styles.checkBoxColumn}>
              <input
                type="checkbox"
                checked={checkIds.includes(ITEMS[1].id)}
                onChange={() => {
                  toggleCheck(ITEMS[1].id);
                }}
              />
            </th>
            <th className={styles.cell}>{ITEMS[1].task}</th>
            <th className={styles.cell}>{ITEMS[1].time}</th>
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

// useEffect(() => {
//   console.log("allCheckBoxRef", allCheckBoxRef);
// }, []);

// useEffect(() => {
//   if (allCheckBoxRef.current) {
//     allCheckBoxRef.current.indeterminate = isPartial;
//   }
// }, [isPartial]);
