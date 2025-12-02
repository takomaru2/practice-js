import styles from "./index.module.scss";
import { Button } from "../Button/index.jsx";

export const ModalApp = () => {
  return (
    <div className={styles.aaa}>
      <h1 className={styles.hoge}>名言モーダル</h1>
      <div className={styles.buttonGroup}>
        <Button label={"網走の人"} />
        <Button label={"米子育ちの人"} />
        <Button label={"考える人"} />
      </div>
    </div>
  );
};
