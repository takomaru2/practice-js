import styles from "./index.module.scss";
import { FC, useRef, useState } from "react";
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
  // number配列だから[0,1,2]みたいなデータ型
  const [checkIds, setCheckIds] = useState<number[]>([]);

  // チェックが一つでもついているか
  const hasChecked = checkIds.length > 0;
  // いくつチェックがついているか
  const count = checkIds.length;
  // チェック項目の総数
  const total = ITEMS.length;
  // 全部チェックされているかが入っているか
  const allChecked = checkIds.length === ITEMS.length;

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

      // 1つ以上チェックされているか
      const hasChecked = updated.length > 0;
      // 全項目チェックされているか
      const allChecked = updated.length === ITEMS.length;
      // 一部選択状態（partial）かどうかを反映
      updatePartial(hasChecked && !allChecked);

      // 次のstateとして更新後の配列を返す
      return updated;
    });
  };

  const updatePartial = (newIsPartial: boolean): void => {
    if (allCheckBoxRef.current) {
      console.log("FUGA", newIsPartial);
      allCheckBoxRef.current.indeterminate = newIsPartial;
    }
  };

  // 問題:onはできるけどもう一度押した時にoffができない。これはoffの処理が入っていないため。分岐でoffにしたい時の処理も書く。
  // すでに全選択なら → すべて解除
  // まだ全選択でなければ → すべて選択
  // partial（横棒）は必ず解除する //updatePartial(false)で;
  const toggleAll = (): void => {
    if (allChecked) {
      // すでに全選択なら → すべて解除
      setCheckIds([]);
      updatePartial(false);
    } else {
      // まだ全選択でなければ → すべて選択
      setCheckIds(ITEMS.map((item) => item.id));
      updatePartial(false);
    }
  };

  // indeterminate（横棒の中間状態）はpropsでは制御できないため（propsが生えてないから）useRefを使う。
  const allCheckBoxRef = useRef<HTMLInputElement | null>(null);

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
