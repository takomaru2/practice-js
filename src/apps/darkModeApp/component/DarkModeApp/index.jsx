import styles from "./index.module.scss";
import { useState } from "react";

export const DarkModeApp = () => {
  const [isDark, setIsDark] = useState(false);

  const handle = () => {
    setIsDark((prev) => {
      return !prev;
    });
  };

  return (
    <div className={`${styles.content} ${isDark ? styles.contentDark : ""}`}>
      <button
        onClick={handle}
        className={`${styles.button} ${isDark ? styles.dark : styles.light} `}
      >
        {isDark ? "ライトモードに切り替え" : "ダークモードに切り替え"}
      </button>
    </div>
  );
};
