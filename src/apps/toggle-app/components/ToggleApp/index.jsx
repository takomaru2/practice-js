import styles from "./index.module.scss";
import { useState } from "react";

export const ToggleApp = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    if (isOn) {
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.switchWrapper}>
        <button className={styles.switch} onClick={handleClick}>
          <span className={styles.slider}></span>
        </button>
        <div>{isOn ? "on" : "off"}</div>
      </div>
    </div>
  );
};
