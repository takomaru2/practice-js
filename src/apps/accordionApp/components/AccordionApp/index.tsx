import styles from "./index.module.scss";
import { AccordionItem } from "../AccordionItem";
import { FC, useState } from "react";

type Items = {
  id: number;
  question: string;
  answer: string;
};

const ITEMS: Items[] = [
  { id: 1, question: "フシギダネ", answer: "草🌱" },
  { id: 2, question: "ゼニガメ", answer: "水💧" },
  { id: 3, question: "ヒトカゲ", answer: "炎🔥" },
];

export const AccordionApp: FC = () => {
  const [openIndex, setOpenIndex] = useState<number[]>([]);

  const openAll = (): void => {
    setOpenIndex(ITEMS.map((_, index) => index));
  };

  const closeAll = (): void => {
    setOpenIndex([]);
  };

  // 引数あるから引数と戻り値それぞれ型を付けたい。
  // 引数はIndexだからnumberで他の関数と同様にtoggleItemから見ると何も返してないからvoidなのではなかろうかと思う。
  const toggleItem = (index: number): void => {
    setOpenIndex((prev) => {
      if (prev.includes(index)) {
        // 開いている=>閉じる
        // 閉じたいので既に空いている状態。結果prevからindexと同じものだけ消える。
        return prev.filter((i) => i !== index);
      } else {
        // 閉じている=>開く
        return [...prev, index];
      }
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>FAQ</h1>
      <div className={styles.buttonWrapper}>
        <button className={styles.open} onClick={openAll}>
          すべて開く
        </button>
        <button className={styles.close} onClick={closeAll}>
          すべて閉じる
        </button>
      </div>
      <div className={styles.accordionMenu}>
        {ITEMS.map((item, index) => (
          <AccordionItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            //openIndex（初期値は空配列）に現在のindexが含まれているかを調べて、その結果のtrue/falseをisOpenに渡している。(includesはbooleanで返すから最適っと)
            isOpen={openIndex.includes(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  );
};
