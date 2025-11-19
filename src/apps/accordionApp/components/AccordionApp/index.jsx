import styles from "./index.module.scss";
import { AccordionItem } from "../Button/index.jsx";
import { useState } from "react";

const items = [
  { id: 1, question: "フシギダネ", answer: "草🌱" },
  { id: 2, question: "ゼニガメ", answer: "水💧" },
  { id: 3, question: "ヒトカゲ", answer: "炎🔥" },
];

// 全開閉実装は１つずつのstateを使って全てをtrueにする
export const AccordionApp = () => {
  const [openStates, setOpenStates] = useState([false, false, false]);

  const openAll = () => setOpenStates([true, true, true]);
  const closeAll = () => setOpenStates([false, false, false]);

  //ここで１個１個stateを更新していくぅぅ！
  const toggleOne = (index) => {
    const newState = [...openStates];
    newState[index] = !newState[index];
    setOpenStates(newState);
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
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openStates[item.id]}
            onToggle={() => toggleOne(item.id)}
          />
        ))}
      </div>
    </div>
  );
};
