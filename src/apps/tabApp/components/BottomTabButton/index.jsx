import styles from "./index.module.scss";

export const BottomTabButton = (props) => {
  return (
    <button className={styles.buttonWrapper} onClick={props.onClick}>
      <span>{props.icon}</span>
      <span className={styles.buttonName}>{props.name}</span>
    </button>
  );
};
