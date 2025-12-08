import styles from "./index.module.scss";

export const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
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
