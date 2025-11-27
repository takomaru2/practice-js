import styles from "./index.module.scss";
import { useState } from "react";

export const TextCounter = () => {
  //テキストエリアの文字数が1文字以上だったらクリアボタンを出現させる

  // テキストエリアの文字数を見ないといけない

  const [text, setText] = useState("");
  const isActive = text.length > 0;

  const lineCount = text.split("\n").length;
  //文字数
  // todo: 改行した時に文字数をカウントするな
  // todo: スペースを入力した時に文字数カウントするな
  //行数
  // todo: ０文字時は行数は０だが１文字以降は１行とカウントする

  return (
    <div className={styles.container}>
      <h1>テキストカウンター</h1>
      <div className={styles.counterWrapper}>
        <div className={styles.counterItem}>
          <div>文字数</div>
          <span>{text.length}</span>
        </div>
        <div className={styles.counterItem}>
          <div>行数</div>
          <span>{lineCount}</span>
        </div>
      </div>
      <textarea
        className={styles.textArea}
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder={"ここに書けやれい"}
      />
      {isActive && (
        <div className={styles.hoge}>
          <button className={styles.clearButton}>全消しンゴ</button>
        </div>
      )}
    </div>
  );
};
