import styles from "./index.module.scss";
import { Button } from "../Button/index.jsx";
import { useState } from "react";

export const ModalApp = () => {
  const [modal, setModal] = useState({ isOpen: false, message: "" });

  const showModal = (message) => setModal({ isOpen: true, message });
  const closeModal = () => setModal({ isOpen: false, message: "" });

  const boke = [
    { key: 1, label: "網走の人", message: "捕まってしまいました" },
    { key: 2, label: "米子育ちの人", message: "ここは日本の首都さ！" },
    { key: 3, label: "考える人", message: "んーー難しい問題だね" },
  ];

  return (
    <div className={styles.aaa}>
      <h1 className={styles.hoge}>名言モーダル</h1>
      <div className={styles.buttonGroup}>
        <Button
          label={boke[0].label}
          showModal={() => showModal(boke[0].message)}
        />
        <Button
          label={boke[1].label}
          showModal={() => showModal(boke[1].message)}
        />
        <Button
          label={boke[2].label}
          showModal={() => showModal(boke[2].message)}
        />
      </div>

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
