import styles from "./index.module.scss";
import { Item } from "../../types";

type ModalProps = {
  // todo:isOpenもいるのかも
  onClose: () => void;
  // onClose:MouseEventHandler; // buttonから生えてんのとdivから生えてんの微妙に違うから共通のつけた
  // onClose: MouseEventHandler<HTMLElement>;
  quote: Item | null; //　子要素でnullが入りうるのはよくなかど？
};

export const Modal = ({ onClose, quote }: ModalProps) => {
  //message がないときはnullを返す（非表示）ようにしたいが
  // null,undefined''（空文字）0,falseとかがあり得るので
  //typeofを使ってみよう
  //selectedItemの型が‘object’じゃないまたはnullの場合はreturn する

  if (quote === null) {
    return null;
  }

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modalContents}>
        <button onClick={onClose} className={styles.closeButton}>
          ×
        </button>
        <span className={styles.modalTitle}>{quote.speaker}</span>
        <span className={styles.famousQuote}>{quote.message}</span>
      </div>
    </>
  );
};
