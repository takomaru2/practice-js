import styles from "./index.module.scss";

export const TabButton = (props) => {
  let aaa = styles.normalLabel;
  if (props.isActive === true) {
    aaa = styles.activeLabel;
  }

  let bbb = styles.normalContainer;
  if (props.isActive === true) {
    bbb = styles.activeContainer;
  }

  return (
    <button className={bbb} onClick={props.onClick}>
      <span>{props.icon}</span>
      <span className={aaa}>{props.label}</span>
    </button>
  );
};
