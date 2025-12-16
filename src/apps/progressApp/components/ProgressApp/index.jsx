import styles from "./index.module.scss";
import { useState } from "react";
import { Button } from "../Button/index.jsx";

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

        <div className={styles.controllerWrapper}>
          <div className={styles.hoge}>
            <div className={styles.controllerWrapper}>
              <div className={styles.buttonWrapper}>
                <Button
                  label={"-10"}
                  onClick={() => calc(-10)}
                  isDisabled={progress === 0}
                  size={"small"}
                  color={"blue"}
                />
                <Button
                  label={"-5"}
                  onClick={() => calc(-5)}
                  isDisabled={progress === 0}
                  size={"small"}
                  color={"blue"}
                />
                <Button
                  label={"+5"}
                  onClick={() => calc(+5)}
                  isDisabled={completed}
                  size={"small"}
                  color={"blue"}
                />
                <Button
                  label={"+10"}
                  onClick={() => calc(+10)}
                  isDisabled={completed}
                  size={"small"}
                  color={"blue"}
                />
              </div>

              <div className={styles.fuga}>
                <Button
                  label={"リセット"}
                  onClick={() => setProgress(0)}
                  isDisabled={progress === 0}
                  size={"large"}
                  color={"gray"}
                />

                <Button
                  label={"完了"}
                  onClick={() => setProgress(100)}
                  isDisabled={completed}
                  size={"large"}
                  color={"green"}
                />
              </div>
            </div>
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
