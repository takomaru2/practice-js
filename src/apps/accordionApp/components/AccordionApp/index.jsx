import styles from "./index.module.scss";
import { AccordionItem } from "../Button/index.jsx";
import { useState } from "react";

const items = [
  { id: 1, question: "フシギダネ", answer: "草🌱" },
  { id: 2, question: "ゼニガメ", answer: "水💧" },
  { id: 3, question: "ヒトカゲ", answer: "炎🔥" },
];

export const AccordionApp = () => {
  const [isOpenList, setIsOpenList] = useState(() => items.map(() => false));

  const openAll = () => {
    return setIsOpenList(items.map(() => true));
  };

  const closeAll = () => {
    return setIsOpenList(items.map(() => false));
  };

  //ここで１個１個stateを更新していくぅぅ！
  const toggleItem = (index) => {
    const newState = [...isOpenList];
    newState[index] = !newState[index];
    setIsOpenList(newState);
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
            isOpen={isOpenList[item.id]}
            onToggle={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
};
