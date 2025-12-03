import styles from "./index.module.scss";
import { Button } from "../Button/index.jsx";
import { useState } from "react";

export const ModalApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.aaa}>
      <h1 className={styles.hoge}>名言モーダル</h1>
      <div className={styles.buttonGroup}>
        <Button label={"網走の人"} showModal={showModal} />
        <Button label={"米子育ちの人"} showModal={showModal} />
        <Button label={"考える人"} showModal={showModal} />
      </div>

      {isOpen && (
        <>
          <div className={styles.backDrop}></div>
          <div className={styles.modal}>
            <p>開いたああああ！！！</p>
            <button onClick={closeModal} className={styles.closeButton}>
              閉じるうううう！
            </button>
          </div>
        </>
      )}
    </div>
  );
};
