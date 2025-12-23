import styles from "./index.module.scss";
import { useState } from "react";
import { FC } from "react";

export const ToggleApp: FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOn(!isOn);
  };

  return (
    <div className={styles.container}>
      <div className={styles.switchWrapper}>
        <button
          className={`${styles.switch} ${isOn ? styles.active : ""}`}
          onClick={handleClick}
        >
          <span className={`${styles.slider} ${isOn ? styles.active : ""}`} />
        </button>
        <div>{isOn ? "on" : "off"}</div>
      </div>
    </div>
  );
};
