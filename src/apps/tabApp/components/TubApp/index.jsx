import { BottomTabButton } from "../BottomTab/index.jsx";
import styles from "./index.module.scss";
export const TabApp = () => {
  return (
    <div>
      <div className={styles.tabContent}>コンテナ層</div>
      <div className={styles.buttonNav}>
        <BottomTabButton icon="🏠" name="ホーム" />
        <BottomTabButton icon="🔍" name="検索" />
        <BottomTabButton icon="🔔" name="通知" />
      </div>
    </div>
  );
};
