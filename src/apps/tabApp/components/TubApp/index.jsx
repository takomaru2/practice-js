import { BottomTabButton } from "../BottomTabButton/index.jsx";
import styles from "./index.module.scss";
import { useState } from "react";
export const TabApp = () => {
  const [state, setState] = useState("ああああ");

  const message = { hoge: "ああああ", fuga: "っっっい", piyo: "にににい" };

  return (
    <div>
      <div className={styles.tabContent}>{state}</div>
      <div className={styles.buttonNav}>
        <BottomTabButton
          icon="🏠"
          name="ホーム"
          onClick={() => {
            setState(message.hoge);
          }}
        />
        <BottomTabButton
          icon="🔍"
          name="検索"
          onClick={() => {
            setState(message.fuga);
          }}
        />
        <BottomTabButton
          icon="🔔"
          name="通知"
          onClick={() => {
            setState(message.piyo);
          }}
        />
      </div>
    </div>
  );
};
