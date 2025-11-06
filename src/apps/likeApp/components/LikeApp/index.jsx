import styles from "./index.module.scss";
import { useState } from "react";

export const LikeApp = () => {
  const [count] = useState(0);
  return (
    <div className={styles.container}>
      <button className={styles.like}>♥ いいねっ</button>
      <span className={styles.counter}>{count}</span>
      <button className={styles.reset}>リセッツ</button>
    </div>
  );
};
