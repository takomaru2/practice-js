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
        borderColor: COLORS[selectedColorName],
      }}
    >
      {Object.keys(COLORS).map((name) => (
        <ColorButton
          key={name}
          colorName={name}
          colorCode={COLORS[name]}
          onClick={() => {
            setSelectedColorName(name);
          }}
        />
      ))}
    </div>
  );
};
