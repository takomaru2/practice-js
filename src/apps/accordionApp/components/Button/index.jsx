import styles from "./index.module.scss";
import { useState } from "react";

export const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hoge = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  return (
    <button className={styles.accordionItem} onClick={hoge}>
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
