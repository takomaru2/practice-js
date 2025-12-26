import { ColorButton } from "../ColorButton";
import styles from "./index.module.scss";
import { useState } from "react";
import { COLORS } from "../../constants/colors.ts";
import { FC } from "react";

//値から型への変換はほぼtypeofくらいしかない
type Color = keyof typeof COLORS;

export const ColorApp: FC = () => {
  const [selectedColorName, setSelectedColorName] = useState<Color>("red");
  //asは機能的にしょうがないところは使って良い
  const colorsArray = Object.keys(COLORS) as Color[];
  //['red', 'blue', 'yellow', 'purple', 'green', 'orange', 'pink', 'gray', 'cyan']

  return (
    <div
      className={styles.wrapper}
      style={{
        borderColor: COLORS[selectedColorName],
      }}
    >
      {colorsArray.map((name) => (
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
