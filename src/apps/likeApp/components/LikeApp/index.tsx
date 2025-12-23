import styles from "./index.module.scss";
import { useLikeCounter } from "../../hooks";
import { FC } from "react";

export const LikeApp: FC = () => {
  const { count, handleLike, handleReset } = useLikeCounter();

  return (
    <div className={styles.container}>
      <button className={styles.likeButton} onClick={handleLike}>
        ♥ いいねっ
      </button>
      <span className={styles.count}>{count}</span>
      <button className={styles.resetButton} onClick={handleReset}>
        リセッツ
      </button>
    </div>
  );
};
