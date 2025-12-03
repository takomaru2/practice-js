import styles from "./index.module.scss";
import { Button } from "../Button/index.jsx";
import { useState } from "react";

export const ModalApp = () => {
  const [modal, setModal] = useState({ isOpen: false, message: "" });

  const showModal = (message) => setModal({ isOpen: true, message });
  const closeModal = () => setModal({ isOpen: false, message: "" });

  const bokes = [
    { key: 1, label: "網走の人", message: "捕まってしまいました" },
    { key: 2, label: "米子育ちの人", message: "ここは日本の首都さ！" },
    { key: 3, label: "考える人", message: "んーー難しい問題だね" },
  ];

  return (
    <div className={styles.aaa}>
      <h1 className={styles.hoge}>名言モーダル</h1>
      <div className={styles.buttonGroup}>
        {bokes.map((boke) => (
          <Button
            label={boke.label}
            showModal={() => {
              showModal(boke.message);
            }}
          />
        ))}
      </div>

      {/*ここはボタンコンポーネントの責務なのか、アコーディオンはそう*/}
      {modal.isOpen && (
        <>
          <div className={styles.backDrop}></div>
          <div className={styles.modal}>
            <p>{modal.message}</p>
            <button onClick={closeModal} className={styles.closeButton}>
              閉じる
            </button>
          </div>
        </>
      )}
    </div>
  );
};
