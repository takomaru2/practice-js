import styles from "./index.module.scss";
import { FC } from "react";
import { CheckBox } from "../CheckBox";
import { AllCheckBox } from "../AllCheckBox";
import { useCheckBoxGroup } from "../../hooks/useCheckBoxGroup.ts";
import { Item } from "../../types";

const ITEMS: Item[] = [
  { id: 1, task: "スクワット", time: "120分" },
  { id: 2, task: "ダッシュ", time: "120分" },
  { id: 3, task: "ダッシュ", time: "120分" },
  { id: 4, task: "ダッシュ", time: "120分" },
  { id: 5, task: "ダッシュ", time: "120分" },
];

const total = ITEMS.length;

export const CheckBoxApp: FC = () => {
  const {
    checkIds,
    count,
    hasChecked,
    allChecked,
    toggleCheck,
    toggleAll,
    allCheckBoxRef,
  } = useCheckBoxGroup(ITEMS);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>モーニングルーティン</h1>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>
            <th className={styles.checkBoxColumn}>
              <AllCheckBox
                checked={allChecked}
                onChange={toggleAll}
                ref={allCheckBoxRef}
              />
            </th>
            <th className={styles.cell}>項目</th>
            <th className={styles.cell}>所要時間</th>
          </tr>
        </thead>

        <tbody>
          {ITEMS.map((item) => (
            <tr className={styles.fuga} key={item.id}>
              <th className={styles.checkBoxColumn}>
                <CheckBox
                  checked={checkIds.includes(item.id)}
                  onChange={() => {
                    toggleCheck(item.id);
                  }}
                />
              </th>
              <td className={styles.cell}>{item.task}</td>
              <td className={styles.cell}>{item.time}</td>
            </tr>
          ))}
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
