import styles from "./index.module.scss";

export const Modal = ({ onClose, selectedItem }) => {
  //message がないときは null を返す（非表示）
  if (!selectedItem) {
    return null;
  }
  return (
    <>
      <div className={styles.backDrop} onClick={onClose}></div>
      <div className={styles.modal}>
        <p>{selectedItem.label}</p>
        <p>{selectedItem.message}</p>
        <button onClick={onClose} className={styles.closeButton}>
          閉じる
        </button>
      </div>
    </>
  );
};
