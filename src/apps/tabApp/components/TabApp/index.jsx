import { TabButton } from "../TabButton/index.jsx";
import styles from "./index.module.scss";
import { useState } from "react";
import { MESSAGES, TAB_NAME, TABS } from "../../constants/index.js";

export const TabApp = () => {
  const [selectedTab, setSelectedTab] = useState(TAB_NAME.HOME);

  return (
    <div className={styles.container}>
      <div className={styles.tabContent}>{MESSAGES[selectedTab]}</div>
      <div className={styles.tabGroup}>
        {TABS.map((tab) => (
          <TabButton
            key={tab.tabName}
            icon={tab.icon}
            label={tab.label}
            onClick={() => {
              setSelectedTab(tab.tabName);
            }}
            isSelected={selectedTab === tab.tabName}
          />
        ))}
      </div>
    </div>
  );
};
