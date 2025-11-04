import { ColorButton } from "../ColorButton/index.jsx";
import styles from "./index.module.scss";
import { useState } from "react";
import { COLORS } from "../../constants/colors.js";

export const ColorApp = () => {
  const [selectedColorName, setSelectedColorName] = useState("red");

  console.log(Object.keys(COLORS));
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

// const findColorCode = (colors, name) => {
//   const found = colors.find((color) => color.name === name);
//
//   return found?.code;
// };

//Optional chaining演算子（?.）は左辺のオペランドがnullish（nullまたはundefined）の場合は、それ以上評価せずにundefinedを返します。一方で、プロパティが存在する場合は、そのプロパティの評価結果を返します。

// const findColorCode = (colors, name) => {
//   const found = colors.find((color) => color.name === name);
//   if (found) {
//     return found.code;
//   } else {
//     return undefined;
//   }
// };
