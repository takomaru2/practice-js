import styles from "./index.module.scss";
import { Button } from "../Button/index.jsx";
import { ProgressBar } from "../ProgressBar/index.jsx";
import { THRESHOLD } from "../../../../constants/THRESHOLD/index.js";
import { useProgress } from "../../../../hooks/index.js";

export const ProgressApp = () => {
  const [progress, actions] = useProgress(THRESHOLD.MAX);

  const isCompleted = progress === THRESHOLD.MAX;
  const isEmptyProgress = progress <= THRESHOLD.MIN;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Progress Bar</h1>
      <div className={styles.card}>
        <ProgressBar progress={progress} />

        <div className={styles.buttonWrapper}>
          <div className={styles.actionButtonWrapper}>
            <Button
              label={"-10"}
              onClick={() => actions.clamp(-10)}
              isDisabled={isEmptyProgress}
              size={"small"}
              color={"blue"}
            />

            <Button
              label={"-5"}
              onClick={() => actions.clamp(-5)}
              isDisabled={isEmptyProgress}
              size={"small"}
              color={"blue"}
            />
            <Button
              label={"+5"}
              onClick={() => actions.clamp(+5)}
              isDisabled={isCompleted}
              size={"small"}
              color={"blue"}
            />
            <Button
              label={"+10"}
              onClick={() => actions.clamp(+10)}
              isDisabled={isCompleted}
              size={"small"}
              color={"blue"}
            />
          </div>

          <div className={styles.actionButtonWrapper}>
            <Button
              label={"リセット"}
              onClick={actions.reset}
              isDisabled={isEmptyProgress}
              size={"large"}
              color={"gray"}
            />

            <Button
              label={"完了"}
              onClick={() => actions.completed(100)}
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
