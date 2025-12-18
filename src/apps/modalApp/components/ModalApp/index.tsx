import styles from "./index.module.scss";
import { Button } from "../Button/index.tsx";
import { useState } from "react";
import { Modal } from "../Modal/index.tsx";
import { FAMOUS_QUOTES } from "../../constants/famousQuotes.ts";

export type Item = {
  id: number;
  speaker: string;
  message: string;
};

export const ModalApp = () => {
  const [selectedFamousQuote, setSelectedFamousQuote] = useState<null | Item>(
    null,
  );

  // この関数たちは'このコンポーネントのsetMessageを使う'ので、ここに置く必要があるよねっ
  const showModal = (item: Item) => setSelectedFamousQuote(item);
  const closeModal = () => setSelectedFamousQuote(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>名言モーダル</h1>
      <div className={styles.buttonGroup}>
        {FAMOUS_QUOTES.map((item) => (
          <Button
            key={item.id}
            speaker={item.speaker}
            onClick={() => showModal(item)}
          />
        ))}
      </div>

      <Modal quote={selectedFamousQuote} onClose={closeModal} />
    </div>
  );
};
