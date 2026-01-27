import styles from "./index.module.scss";
import { FC, useState } from "react";
import { AddButton } from "../AddButton/index.tsx";
import { MinusButton } from "../MinusButton";
import { MultiplyButton } from "../MultiplyButton";
import { ButtonGroup } from "../ButtonGroup/index.tsx";

export const CounterApp: FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <div className={styles.buttonWrapper}>
        <div className={styles.buttonFlex}>
          <ButtonGroup
            ButtonComponent={AddButton}
            count={count}
            setCount={setCount}
          />
          <ButtonGroup
            ButtonComponent={MinusButton}
            count={count}
            setCount={setCount}
          />
          <ButtonGroup
            ButtonComponent={MultiplyButton}
            count={count}
            setCount={setCount}
          />
        </div>
      </div>
      <div className={styles.boardWrapper}>
        <img
          src="/counterAppImage/bsk.JPG"
          alt="ビスケと言う女性の画像"
          className={styles.board}
        />
        <div className={styles.counter}>{count}</div>
      </div>
    </div>
  );
};
