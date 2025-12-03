import styles from "./index.module.scss";

export const Modal = ({ message, onClose }) => {
  //message がないときは null を返す（非表示）
  if (!message) {
    return null;
  }
  return (
    <>
      <div className={styles.backDrop} onClick={onClose}></div>
      <div className={styles.modal}>
        <p>{message}</p>
        <button onClick={onClose} className={styles.closeButton}>
          閉じる
        </button>
      </div>
    </>
  );
};
