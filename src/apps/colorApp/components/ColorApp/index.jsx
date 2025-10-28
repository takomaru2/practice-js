import { ColorButton } from "../ColorButton/index.jsx";
import styles from "./index.module.scss";
import { useState } from "react";
import { COLORS } from "../../constants/colors.js";

export const ColorApp = () => {
  const [selectedColorName, setSelectedColorName] = useState("red");

  return (
    <div
      className={styles.wrapper}
      style={{
        borderColor: findColorCode(COLORS, selectedColorName),
      }}
    >
      {COLORS.map((color) => (
        <ColorButton
          key={color.name}
          colorName={color.name}
          colorCode={color.code}
          onClick={() => {
            setSelectedColorName(color.name);
          }}
        />
      ))}
    </div>
  );
};

const findColorCode = (colors, name) => {
  const found = colors.find((color) => color.name === name);
  return found?.code;
};
