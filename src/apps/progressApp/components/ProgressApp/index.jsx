import styles from "./index.module.scss";
import { useState } from "react";
import { Button } from "../Button/index.jsx";

export const ProgressApp = () => {
  //僕はここのstateについてなぜこの設計にしたか答えられなければならない
  const [progress, setProgress] = useState(0);

  const isCompleted = progress === 100;
  const isEmpty = progress === 0;

  const handleClickCalcButton = (n) => {
    setProgress((prev) => Math.min(100, Math.max(0, prev + n)));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Progress Bar</h1>
      <div className={styles.card}>
        <div className={styles.progress}>
          {/*下地のバーを配置*/}
          <div className={styles.bar}></div>
          {/*アクティブ時のバーを重ねて用意*/}
          <div
            className={styles.activeBar}
            style={{ width: `${progress}%` }}
          ></div>
          <span className={styles.pa}>{progress}%</span>
        </div>

        <div className={styles.buttonWrapper}>
          <div className={styles.actionButtonWrapper}>
            <Button
              label={"-10"}
              onClick={() => handleClickCalcButton(-10)}
              isDisabled={isEmpty}
              size={"small"}
              color={"blue"}
            />
            <Button
              label={"-5"}
              onClick={() => handleClickCalcButton(-5)}
              isDisabled={isEmpty}
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
              isDisabled={isEmpty}
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
