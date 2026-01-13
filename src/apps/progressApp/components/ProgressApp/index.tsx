import styles from "./index.module.scss";
import { Button } from "../Button/index.tsx";
import { ProgressBar } from "../ProgressBar";
import { useProgress } from "../../../../hooks/useProgress.ts";
import { FC } from "react";

export const ProgressApp: FC = () => {
  const { progress, isStart, isCompleted, minus, plus, reset, complete } =
    useProgress();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Progress Bar</h1>
      <div className={styles.card}>
        <ProgressBar progress={progress} />

        <div className={styles.buttonWrapper}>
          <div className={styles.actionButtonWrapper}>
            <Button
              label={"-10"}
              onClick={() => minus(10)}
              isDisabled={isStart}
              size={"small"}
              color={"blue"}
            />

            <Button
              label={"-5"}
              onClick={() => minus(5)}
              isDisabled={isStart}
              size={"small"}
              color={"blue"}
            />
            <Button
              label={"+5"}
              onClick={() => plus(5)}
              isDisabled={isCompleted}
              size={"small"}
              color={"blue"}
            />
            <Button
              label={"+10"}
              onClick={() => plus(10)}
              isDisabled={isCompleted}
              size={"small"}
              color={"blue"}
            />
          </div>

          <div className={styles.actionButtonWrapper}>
            <Button
              label={"リセット"}
              onClick={reset}
              isDisabled={isStart}
              size={"large"}
              color={"gray"}
            />

            <Button
              label={"完了"}
              onClick={complete}
              isDisabled={isCompleted}
              size={"large"}
              color={"green"}
            />
          </div>
        </div>
        {isCompleted && (
          <div className={styles.completeBanner}>😭完了しました！</div>
        )}
      </div>
    </div>
  );
};
