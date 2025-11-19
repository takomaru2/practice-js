import styles from "./index.module.scss";
import { AccordionItem } from "../Button/index.jsx";
import { useState } from "react";

// 全開閉実装は１つずつのstateを使って全てをtrueにする
export const AccordionApp = () => {
  const [openStates, setOpenStates] = useState([false, false, false]);

  const openAll = () => setOpenStates([true, true, true]);
  const closeAll = () => setOpenStates([false, false, false]);

  //ここで１個１個stateを更新していくぅぅ！
  const toggleOne = (index) => {
    //reactは元のstateを直接変更❌なのでstateのコピー作る
    const newState = [...openStates];
    //渡されたindexだけ反転させる
    newState[index] = !newState[index];
    //修正した配列を 新しい state として更新
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
        <AccordionItem
          question={"フシギダネ"}
          answer={"草ww"}
          isOpen={openStates[0]}
          onToggle={() => toggleOne(0)}
        />
        <AccordionItem
          question={"ゼニガメ"}
          answer={"水"}
          isOpen={openStates[1]}
          onToggle={() => toggleOne(1)}
        />
        <AccordionItem
          question={"ヒトカゲ"}
          answer={"炎"}
          isOpen={openStates[2]}
          onToggle={() => toggleOne(2)}
        />
      </div>
    </div>
  );
};
