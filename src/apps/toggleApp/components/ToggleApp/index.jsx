import styles from "./index.module.scss";
import { useState } from "react";

export const ToggleApp = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={styles.container}>
      <div className={styles.switchWrapper}>
        <button
          className={`${styles.switch} ${isOn ? styles.active : ""}`}
          onClick={handleClick}
        >
          <span
            className={`${styles.slider} ${isOn ? styles.active : ""}`}
          ></span>
        </button>
        <div>{isOn ? "on" : "off"}</div>
      </div>
    </div>
  );
};
