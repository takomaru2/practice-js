import styles from "./index.module.scss";

export const Modal = ({ onClose, quote }) => {
  //message がないときはnullを返す（非表示）ようにしたいが
  // null,undefined''（空文字）0,falseとかがあり得るので
  //typeofを使ってみよう
  //selectedItemの型が‘object’じゃないまたはnullの場合はreturn する

  const isInvalidSelectedFamousQuote =
    typeof quote !== "object" || quote === null;

  if (isInvalidSelectedFamousQuote) {
    return null;
  }

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modalContents}>
        <button onClick={onClose} className={styles.closeButton}>
          ×
        </button>
        <p className={styles.modalTitle}>{quote.label}</p>
        <p className={styles.famousQuote}>{quote.message}</p>
      </div>
    </>
  );
};
