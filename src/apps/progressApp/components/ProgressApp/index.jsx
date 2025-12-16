import styles from "./index.module.scss";
import { useState } from "react";
import { Button } from "../Button/index.jsx";
import { ProgressBar } from "../ProgressBar/index.jsx";

// 引数がnumberで戻り値もnumber
/**
 * @example
 * clamp(-5) // 0
 * clamp(105) // 100
 */
const clamp = (num) => {
  return Math.min(THRESHOLD.MAX, Math.max(THRESHOLD.MIN, num));
};

const THRESHOLD = {
  MAX: 100,
  MIN: 0,
};

export const ProgressApp = () => {
  //僕はここのstateについてなぜこの設計にしたか答えられなければならない
  const [progress, setProgress] = useState(0);

  const isCompleted = progress >= THRESHOLD.MAX;
  const isEmptyProgress = progress <= THRESHOLD.MIN;

  const handleClickCalcButton = (n) => {
    setProgress((prev) => clamp(prev + n));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Progress Bar</h1>
      <div className={styles.card}>
        <ProgressBar progress={progress} />

        <div className={styles.buttonWrapper}>
          <div className={styles.actionButtonWrapper}>
            <Button
              label={"-10"}
              onClick={() => handleClickCalcButton(-10)}
              isDisabled={isEmptyProgress}
              size={"small"}
              color={"blue"}
            />
            <Button
              label={"-5"}
              onClick={() => handleClickCalcButton(-5)}
              isDisabled={isEmptyProgress}
              size={"small"}
              color={"blue"}
            />
            <Button
              label={"+5"}
              onClick={() => handleClickCalcButton(+5)}
              isDisabled={isCompleted}
              size={"small"}
              color={"blue"}
            />
            <Button
              label={"+10"}
              onClick={() => handleClickCalcButton(+10)}
              isDisabled={isCompleted}
              size={"small"}
              color={"blue"}
            />
          </div>

          <div className={styles.actionButtonWrapper}>
            <Button
              label={"リセット"}
              onClick={() => setProgress(0)}
              isDisabled={isEmptyProgress}
              size={"large"}
              color={"gray"}
            />

            <Button
              label={"完了"}
              onClick={() => setProgress(100)}
              isDisabled={isCompleted}
              size={"large"}
              color={"green"}
            />
          </div>
        </div>
        {/*状態的にもう一つstateを作ることが考えられるが今のstateを使って表現できるから*/}
        {isCompleted && (
          <div className={styles.completeBanner}>😭完了しました！</div>
        )}
      </div>
    </div>
  );
};
