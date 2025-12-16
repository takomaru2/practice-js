import styles from "./index.module.scss";

//colorはgreen,blue,grayが入ってくる想定
export const Button = ({ onClick, label, isDisabled, size, color }) => {
  let colorStyle;
  // if文中身がtrueなら次のif文に入らない。falseなら入る
  if (!isDisabled) {
    if (color === "green") {
      colorStyle = { backgroundColor: "green", color: "white" };
    }
    if (color === "blue") {
      colorStyle = { backgroundColor: "blue", color: "white" };
    }
    if (color === "gray") {
      colorStyle = { backgroundColor: "lightGray", color: "white" };
    }
  }

  let sizeStyle;
  if (size === "large") {
    sizeStyle = { paddingInline: 32 };
  }
  if (size === "small") {
    sizeStyle = { paddingInline: 16 };
  }

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
