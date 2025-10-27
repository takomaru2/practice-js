import { Button } from "../Button/index.jsx";
import styles from "./index.module.scss";
import { useState } from "react";
import { colors } from "../../constants/colors.js";

export const ColorApp = () => {
  const [borderColor, setBorderColor] = useState("red");
  const handleClick = (clickedColor) => {
    setBorderColor(clickedColor);
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        borderColor: getColor(colors, borderColor),
      }}
    >
      {colors.map(({ name, code }) => (
        <Button
          key={name}
          color={name}
          colorCode={code}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

const getColor = (colors, name) => {
  for (let i = 0; i < colors.length; i++) {
    const obj = colors[i];
    if (obj.name === name) {
      return obj.code;
    }
  }
};
