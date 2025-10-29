import styles from "./index.module.scss";

export const TabButton = (props) => {
  return (
    <button className={styles.container} onClick={props.onClick}>
      <span>{props.icon}</span>
      <span className={styles.label}>{props.label}</span>
    </button>
  );
};
