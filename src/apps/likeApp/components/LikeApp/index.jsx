import styles from "./index.module.scss";
import { useLikeCounter } from "../../hooks/index.js";

export const LikeApp = () => {
  const { count, handleLike, handleReset } = useLikeCounter();

  return (
    <div className={styles.container}>
      <button className={styles.likeButton} onClick={handleLike}>
        ♥ いいねっ
      </button>
      <span className={styles.counter}>{count}</span>
      <button className={styles.resetButton} onClick={handleReset}>
        リセッツ
      </button>
    </div>
  );
};
