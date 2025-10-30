import styles from "./index.module.scss";

export const TabButton = (props) => {
  // todo: スタイルを動的にするためにif文でクラス名を出し分ける実装だがこれで良いのか。良いのならばrefactorする
  let aaa = styles.normalLabel;
  if (props.isSelected === true) {
    aaa = styles.activeLabel;
  }

  let bbb = styles.normalContainer;
  if (props.isSelected === true) {
    bbb = styles.activeContainer;
  }

  return (
    <button className={bbb} onClick={props.onClick}>
      <span>{props.icon}</span>
      <span className={aaa}>{props.label}</span>
    </button>
  );
};
