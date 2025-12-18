import styles from "./index.module.scss";

//colorはgreen,blue,grayが入ってくる想定
export const Button = ({ onClick, label, isDisabled, size, color }) => {
  const colorStyle = isDisabled ? {} : getColorStyle(color);

  const sizeStyle = getSizeStyle(size);

  return (
    <button
      style={{ ...colorStyle, ...sizeStyle, flex: 1 }}
      disabled={isDisabled}
      className={isDisabled ? styles.buttonDisabled : styles.button}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// 引数は文字列,戻り値はobj
const getColorStyle = (color) => {
  let colorStyle;

  switch (color) {
    case "green":
      colorStyle = { backgroundColor: "green", color: "white" };
      break;
    case "blue":
      colorStyle = { backgroundColor: "blue", color: "white" };
      break;
    case "gray":
      colorStyle = { backgroundColor: "lightGray", color: "white" };
      break;
    default:
  }

  return colorStyle;
};

const getSizeStyle = (size) => {
  let sizeStyle;

  switch (size) {
    case "large":
      sizeStyle = { paddingInline: 32 };
      break;
    case "small":
      sizeStyle = { paddingInline: 16 };
      break;
    default:
  }
  return sizeStyle;
};
