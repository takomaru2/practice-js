import styles from "./index.module.scss";

type AccordionProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionProps) => {
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
