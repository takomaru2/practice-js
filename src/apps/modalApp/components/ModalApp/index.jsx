import styles from "./index.module.scss";
import { Button } from "../Button/index.jsx";
import { useState } from "react";
import { Modal } from "../Modal/index.jsx";

const BOKES = [
  { label: "網走の人", message: "捕まってしまいました" },
  { label: "米子育ちの人", message: "ここは日本の首都さ！" },
  { label: "考える人", message: "んーー難しい問題だね" },
];

export const ModalApp = () => {
  const [message, setMessage] = useState(null);

  const showModal = (message) => setMessage(message);
  const closeModal = () => setMessage(null);

  return (
    <div className={styles.aaa}>
      <h1 className={styles.hoge}>名言モーダル</h1>
      <div className={styles.buttonGroup}>
        {BOKES.map((boke) => (
          <Button
            label={boke.label}
            showModal={() => {
              showModal(boke.message);
            }}
          />
        ))}
      </div>

      <Modal message={message} onClose={closeModal} />
    </div>
  );
};
