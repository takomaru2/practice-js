import { TabButton } from "../TabButton/index.jsx";
import styles from "./index.module.scss";
import { useState } from "react";
import { MESSAGES } from "../../constants/index.js";
export const TabApp = () => {
  const [selectedMessage, setSelectedMessage] = useState(MESSAGES.home);

  return (
    <div className={styles.container}>
      <div className={styles.tabContent}>{selectedMessage}</div>
      <div className={styles.tabGroup}>
        <TabButton
          // todo iconはimportして使いたい。文字化けの可能性があるので
          icon="🏠"
          label="ホーム"
          onClick={() => {
            setSelectedMessage(MESSAGES.home);
          }}
        />
        <TabButton
          icon="🔍"
          label="検索"
          onClick={() => {
            setSelectedMessage(MESSAGES.search);
          }}
        />
        <TabButton
          icon="🔔"
          label="通知"
          onClick={() => {
            setSelectedMessage(MESSAGES.notification);
          }}
        />
      </div>
    </div>
  );
};
