import styles from "./index.module.scss";

export const AccordionItem = ({ label, icon }) => {
  return (
    <button className={styles.accordionItem}>
      <span className={styles.question}>{label}</span>
      <span className={styles.icon}>{icon}</span>
    </button>
  );
};
