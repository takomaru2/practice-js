import { TabButton } from "../TabButton/index.jsx";
import styles from "./index.module.scss";
import { useState } from "react";
import { MESSAGES } from "../../constants/index.js";
export const TabApp = () => {
  //   todo: isActiveもstateを使って実装するのならuseStateの命名変更
  const [selectedTab, setSelectedTab] = useState(MESSAGES.home);

  return (
    <div className={styles.container}>
      <div className={styles.tabContent}>{selectedTab}</div>
      <div className={styles.tabGroup}>
        <TabButton
          // todo: iconはimportして使いたい。文字化けの可能性があるので
          icon="🏠"
          label={"ホーム"}
          onClick={() => {
            setSelectedTab(MESSAGES.home);
          }}
          isSelected={selectedTab === MESSAGES.home}
        />
        <TabButton
          icon="🔍"
          label="検索"
          onClick={() => {
            setSelectedTab(MESSAGES.search);
          }}
          isSelected={selectedTab === MESSAGES.search}
        />
        <TabButton
          icon="🔔"
          label="通知"
          onClick={() => {
            setSelectedTab(MESSAGES.notification);
          }}
          isSelected={selectedTab === MESSAGES.notification}
        />
      </div>
    </div>
  );
};
