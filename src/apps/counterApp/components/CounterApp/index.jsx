import styles from "./index.module.scss";
import { useState } from "react";
import { AddButton } from "../AddButton/index.jsx";
import { MinusButton } from "../MinusButton/index.jsx";
import { MultiplyButton } from "../MultiplyButton/index.jsx";
import { ButtonGroup } from "../ButtonGroup/index.jsx";

export const CounterApp = () => {
  const [count, setCount] = useState(0);

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
