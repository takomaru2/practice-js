import styles from "./index.module.scss";
import { useState } from "react";

export const ToggleApp = () => {
  const [isOn, setIsOn] = useState(true);

  const handleClick = () => {
    if (isOn) {
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  };

  const hoge = () => {
    return isOn ? styles.switch : styles.switchActive;
  };

  const fuga = () => {
    return isOn ? styles.slider : styles.sliderActive;
  };

  return (
    <div className={styles.container}>
      <div className={styles.switchWrapper}>
        <button className={hoge()} onClick={handleClick}>
          <span className={fuga()}></span>
        </button>
        <div>{isOn ? "off" : "on"}</div>
      </div>
    </div>
  );
};
