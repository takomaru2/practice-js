import styles from "./index.module.scss";
import { FC, useState } from "react";

export const TextCounter: FC = () => {
  const [text, setText] = useState<string>("");
  const hasText: boolean = text.length > 0;

  const calculateLineCount = (text: string): number => {
    return text === "" ? 0 : text.split("\n").length;
  };

  //calculateLineCount発火して最終的に何に置き換わる？numberじゃね？
  const lineCount: number = calculateLineCount(text);

  //文字数カウントを関数化する
  const calculateCharCount = (text: string): number => {
    //'12a' => ['1','2','a']
    const chars = [...text];
    const ignoreChars = ["\n", " ", "　"];
    // 更にこうしたい   ['1',' ','2'] => ['1','2']
    const visibleChars = chars.filter((char) => !ignoreChars.includes(char));
    return visibleChars.length;
  };

  const charCount: number = calculateCharCount(text);

  const handleClearText = (): void => {
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
