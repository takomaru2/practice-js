import styles from "./index.module.scss";
import { useState } from "react";

export const ToggleApp = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  const hoge = () => {
    return isOn ? styles.switchActive : styles.switch;
  };

  const fuga = () => {
    return isOn ? styles.sliderActive : styles.slider;
  };

  return (
    <div className={styles.container}>
      <div className={styles.switchWrapper}>
        <button className={hoge()} onClick={handleClick}>
          <span className={fuga()}></span>
        </button>
        <div>{isOn ? "on" : "off"}</div>
      </div>
    </div>
  );
};
