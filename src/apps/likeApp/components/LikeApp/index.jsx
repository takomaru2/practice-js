import styles from "./index.module.scss";
import { useState } from "react";

export const LikeApp = () => {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

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
