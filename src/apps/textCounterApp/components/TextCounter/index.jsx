import styles from "./index.module.scss";
import { useState } from "react";

export const TextCounter = () => {
  const [text, setText] = useState("");
  const hasText = text.length > 0;

  //行数カウントを関数化する
  const calculateLineCount = (text) => {
    return text === "" ? 0 : text.split("\n").length;
  };

  const lineCount = calculateLineCount(text);

  //文字数カウントを関数化する
  const calculateCharCount = (text) => {
    //'12a' => ['1','2','a']
    const chars = [...text];
    const ignoreChars = ["\n", " ", "　"];
    // 更にこうしたい   ['1',' ','2'] => ['1','2']
    const visibleChars = chars.filter((char) => !ignoreChars.includes(char));
    return visibleChars.length;
  };

  const charCount = calculateCharCount(text);

  const handleClearText = () => {
    return setText("");
  };

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
      {hasText && (
        <div className={styles.clearTextButtonWrapper}>
          <button className={styles.clearTextButton} onClick={handleClearText}>
            全消しンゴ
          </button>
        </div>
      )}
    </div>
  );
};
