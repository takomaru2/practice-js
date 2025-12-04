import styles from "./index.module.scss";
import { Button } from "../Button/index.jsx";
import { useState } from "react";
import { Modal } from "../Modal/index.jsx";
import { MODAL_ITEMS } from "../../constants/modalItems.js";

export const ModalApp = () => {
  const [message, setMessage] = useState(null);

  // この関数たちは'このコンポーネントのsetMessageを使う'ので、ここに置く必要があるよねっ
  const showModal = (message) => setMessage(message);
  const closeModal = () => setMessage(null);

  return (
    <div className={styles.aaa}>
      <h1 className={styles.hoge}>名言モーダル</h1>
      <div className={styles.buttonGroup}>
        {MODAL_ITEMS.map((item) => (
          <Button
            key={item.id}
            label={item.label}
            showModal={() => {
              showModal(item.message);
            }}
          />
        ))}
      </div>

      <Modal message={message} onClose={closeModal} />
    </div>
  );
};
