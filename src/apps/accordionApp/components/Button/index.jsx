import styles from "./index.module.scss";
import { useState } from "react";

// 子がstateを持つのをやめて、親で全てのstateを管理するようにしたい
// 子のstateを消す。propsでstateを渡す
export const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  // const [isOpen, setIsOpen] = useState(false);
  //
  // const hoge = () => {
  //   setIsOpen((prev) => {
  //     return !prev;
  //   });
  // };

  return (
    <button className={styles.accordionItem} onClick={onToggle}>
      <span className={styles.question}>
        {question}
        {isOpen && (
          <>
            <br />
            {answer}
          </>
        )}
      </span>
      <span className={styles.icon}>{isOpen ? "▲" : "▼"}</span>
    </button>
  );
};
