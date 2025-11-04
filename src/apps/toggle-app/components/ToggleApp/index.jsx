import styles from "./index.module.scss";

export const ToggleApp = () => {
  const hoge = ["on", "off"];

  return (
    <div className={styles.container}>
      <div className={styles.switchWrapper}>
        <button className={styles.switch}>
          <span className={styles.slider}></span>
        </button>
        <div>{hoge[0]}</div>
      </div>
    </div>
  );
};
