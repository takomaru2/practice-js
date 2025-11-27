import styles from "./index.module.scss";
import { useState } from "react";

export const TextCounter = () => {
  const [text, setText] = useState("");
  const isActive = text.length > 0;

  // todo: 3.０文字時は行数は０だが１文字以降は１行とカウントする
  const lineCount = text.length === 0 ? 0 : text.split("\n").length;

  // todo: 1.改行した時に文字数をカウントするな
  // 文字列を1文字ずつの配列に変換（文字列は直接filterできないんでね！）
  // こうしたい   '12a' => ['1','2','a']
  const chars = [...text];

  // todo: 2.スペースを入力した時に文字数カウントするな
  // 次はfilterして改行文字とスペースを除外する、実際にカウントしたい文字だけ残す
  // こうしたい      ['1','\n','2'] => ['1','2']
  // 更にこうしたい   ['1',' ','2'] => ['1','2']

  const ignoreChars = ["\n", " ", "　"];
  const visibleChars = chars.filter((char) => !ignoreChars.includes(char));

  // 最終的に残った文字の数を文字数カウンターに渡す！
  // こうしたい   ['1','2'] => 2
  const charCount = visibleChars.length;

  return (
    <div className={styles.container}>
      <h1>テキストカウンター</h1>
      <div className={styles.counterWrapper}>
        <div className={styles.counterItem}>
          <div>文字数</div>
          <span>{charCount}</span>
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
