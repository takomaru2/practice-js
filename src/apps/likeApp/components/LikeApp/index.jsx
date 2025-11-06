import styles from "./index.module.scss";
import { useState } from "react";

export const LikeApp = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className={styles.container}>
      <button className={styles.like} onClick={handleClick}>
        ♥ いいねっ
      </button>
      <span className={styles.counter}>{count}</span>
      <button className={styles.reset} onClick={handleReset}>
        リセッツ
      </button>
    </div>
  );
};
