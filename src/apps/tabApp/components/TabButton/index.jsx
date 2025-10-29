import styles from "./index.module.scss";

export const TabButton = (props) => {
  let aaa = styles.normalLabel;
  if (props.isActive === true) {
    aaa = styles.activeLabel;
  }

  return (
    <button className={styles.container} onClick={props.onClick}>
      <span>{props.icon}</span>
      <span className={aaa}>{props.label}</span>
    </button>
  );
};
