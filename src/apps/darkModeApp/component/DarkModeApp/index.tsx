import styles from "./index.module.scss";
import { FC, useState } from "react";

export const DarkModeApp: FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleColorMode = (): void => {
    setIsDark((prev) => {
      return !prev;
    });
  };

  return (
    <div className={`${styles.content} ${isDark ? styles.contentDark : ""}`}>
      <button
        onClick={toggleColorMode}
        className={`${styles.button} ${isDark ? styles.dark : ""} `}
      >
        {isDark ? "ライトモードに切り替え" : "ダークモードに切り替え"}
      </button>
    </div>
  );
};
