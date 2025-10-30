import { TabButton } from "../TabButton/index.jsx";
import styles from "./index.module.scss";
import { useState } from "react";
import { MESSAGES, TAB_NAME } from "../../constants/index.js";

export const TabApp = () => {
  const [selectedTab, setSelectedTab] = useState(TAB_NAME.HOME);

  return (
    <div className={styles.container}>
      <div className={styles.tabContent}>{MESSAGES[selectedTab]}</div>
      <div className={styles.tabGroup}>
        <TabButton
          icon="🏠"
          label={"ホーム"}
          onClick={() => {
            setSelectedTab(TAB_NAME.HOME);
          }}
          isSelected={selectedTab === TAB_NAME.HOME}
        />
        <TabButton
          icon="🔍"
          label="検索"
          onClick={() => {
            setSelectedTab(TAB_NAME.SEARCH);
          }}
          isSelected={selectedTab === TAB_NAME.SEARCH}
        />
        <TabButton
          icon="🔔"
          label="通知"
          onClick={() => {
            setSelectedTab(TAB_NAME.NOTIFICATION);
          }}
          isSelected={selectedTab === TAB_NAME.NOTIFICATION}
        />
      </div>
    </div>
  );
};
