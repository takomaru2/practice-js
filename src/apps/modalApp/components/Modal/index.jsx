import styles from "./index.module.scss";

export const Modal = ({ onClose, selectedItem }) => {
  //message がないときはnullを返す（非表示）ようにしたいが
  // null,undefined''（空文字）0,falseとかがあり得るので
  //typeofを使ってみよう
  //selectedItemの型が‘object’じゃないまたはnullの場合はreturn する

  const isInvalidSelectedItem =
    typeof selectedItem !== "object" || selectedItem === null;

  if (isInvalidSelectedItem) {
    return null;
  }
  return (
    <>
      <div className={styles.backDrop} onClick={onClose} />
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          ×
        </button>
        <p className={styles.ai}>{selectedItem.label}</p>
        <p className={styles.ho}>{selectedItem.message}</p>
      </div>
    </>
  );
};
