import styles from "./index.module.scss";
import { AccordionItem } from "../Button/index.jsx";

export const AccordionApp = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>FAQ</h1>
      <div className={styles.buttonWrapper}>
        <button className={styles.open}>すべて開く</button>
        <button className={styles.close}>すべて閉じる</button>
      </div>
      <div className={styles.accordionMenu}>
        <AccordionItem question={"フシギダネ?"} answer={"草"} />
        <AccordionItem question={"ゼニガメ?"} answer={"水"} />
        <AccordionItem question={"ヒトカゲ?"} answer={"炎"} />
      </div>
    </div>
  );
};
