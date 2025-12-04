import styles from "./index.module.scss";

export const Modal = ({ onClose, selectedItem }) => {
  //message がないときは null を返す（非表示）
  if (!selectedItem) {
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
