import styles from "./index.module.scss";
import { useState } from "react";
import { CalcButton } from "../CalcButton/index.jsx";
import { RestButton } from "../ResetButton/index.jsx";
import { CompleteButton } from "../CompleteButton/index.jsx";

const minusArray = [10, 5];
const plusArray = [5, 10];

export const ProgressApp = () => {
  //僕はここのstateについてなぜこの設計にしたか答えられなければならない
  const [progress, setProgress] = useState(0);
  console.log(progress);

  const completed = progress === 100;

  const calc = (n) => {
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
            {minusArray.map((num) => (
              <CalcButton
                label={"-" + num}
                onClick={() => calc(-1 * num)}
                isdisabled={progress <= 0}
              />
            ))}

            {plusArray.map((num) => (
              <CalcButton
                label={"+" + num}
                onClick={() => calc(num)}
                isdisabled={progress === 100}
              />
            ))}
          </div>
          <div className={styles.fuga}>
            <RestButton label={"リセット"} onClick={() => setProgress(0)} />
            <CompleteButton
              label={"完了"}
              onClick={() => setProgress(100)}
              completed={completed}
            />
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
