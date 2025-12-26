import { TabButton } from "../TabButton";
import styles from "./index.module.scss";
import { FC, useState } from "react";
import { MESSAGES, TAB_ID, TABS } from "../../constants";
import { TabId } from "../../types";

export const TabApp: FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabId>(TAB_ID.HOME);

  return (
    <div className={styles.container}>
      <div className={styles.tabContent}>{MESSAGES[selectedTab]}</div>
      <div className={styles.tabGroup}>
        {TABS.map((tab) => {
          return (
            <TabButton
              key={tab.id}
              icon={tab.icon}
              label={tab.label}
              onClick={() => {
                setSelectedTab(tab.id);
              }}
              isSelected={selectedTab === tab.id}
            />
          );
        })}
      </div>
    </div>
  );
};
