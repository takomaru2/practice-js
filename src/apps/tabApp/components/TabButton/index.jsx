import styles from "./index.module.scss";

export const TabButton = (props) => {
  // todo: スタイルを動的にするためにif文でクラス名を出し分ける実装だがこれで良いのか。良いのならばrefactorする
  // A.良い。今回は「選択されている」か「選択されていない」かの2状態しかないため。
  // 例えば色の種類ごとにstateがあるcolor-appのような場合は、この方法はDRYでなく不適。

  const getButtonClassName = `${styles.container} ${props.isSelected ? styles.active : ""}`;

  return (
    <button className={getButtonClassName} onClick={props.onClick}>
      <span>{props.icon}</span>
      <span> {props.label}</span>
    </button>
  );
};
