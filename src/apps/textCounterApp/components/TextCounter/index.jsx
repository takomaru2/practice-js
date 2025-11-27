import styles from "./index.module.scss";
import { useState } from "react";

export const TextCounter = () => {
  //テキストエリアの文字数が1文字以上だったらクリアボタンを出現させる

  // テキストエリアの文字数を見ないといけない
  const [text, setText] = useState("");
  const isActive = text.length > 0;
  return (
    <div className={styles.container}>
      <h1>テキストカウンター</h1>
      <div className={styles.counterWrapper}>
        <div className={styles.counterItem}>
          <div>文字数</div>
          <span>0</span>
        </div>
        <div className={styles.counterItem}>
          <div>行数</div>
          <span>0</span>
        </div>
      </div>
      <textarea
        className={styles.textArea}
        value={text}
        onChange={(hoge) => setText(hoge.target.value)}
        placeholder={"ここに書けやれい"}
      ></textarea>
      <div className={styles.hoge}>
        {isActive && <button className={styles.clearButton}>全消しンゴ</button>}
      </div>
    </div>
  );
};
