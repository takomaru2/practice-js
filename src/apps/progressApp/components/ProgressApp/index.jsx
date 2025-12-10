import styles from "./index.module.scss";
import { useState } from "react";
import { MinusButton } from "../MinusButton/index.jsx";
import { PlusButton } from "../PlusButton/index.jsx";

export const ProgressApp = () => {
  //僕はここのstateについてなぜこの設計にしたか答えられなければならない
  const [progress, setProgress] = useState(0);
  console.log(progress);

  const completed = progress === 100;

  const minusCalc = (n) => {
    setProgress((prev) => Math.min(100, Math.max(0, prev + n)));
  };

  const plusCalc = (n) => {
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
        <div className={styles.controllers}>
          <div className={styles.hoge}>
            <MinusButton
              displayNumber={"-10"}
              progress={progress}
              onClick={() => minusCalc(-10)}
            />
            <MinusButton
              displayNumber={"-5"}
              progress={progress}
              onClick={() => minusCalc(-5)}
            />

            <PlusButton
              displayNumber={"+5"}
              progress={progress}
              onClick={() => plusCalc(5)}
            />

            <PlusButton
              displayNumber={"+10"}
              progress={progress}
              onClick={() => plusCalc(10)}
            />
          </div>
          <div className={styles.fuga}>
            <button
              className={styles.resetButton}
              onClick={() => setProgress(0)}
            >
              リセット
            </button>
            <button
              className={
                completed ? styles.completeDisabled : styles.completeButton
              }
              onClick={() => setProgress(100)}
            >
              完了
            </button>
          </div>
          {/*状態的にもう一つstateを作ることが考えられるが今のstateを使って表現できるから*/}
          {completed && (
            <div className={styles.completeBanner}>😭完了しました！</div>
          )}
        </div>
      </div>
    </div>
  );
};
