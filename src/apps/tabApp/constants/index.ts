export const TAB_NAME = {
  HOME: "home",
  SEARCH: "search",
  NOTIFICATION: "notification",
};

// stateとメッセージをマッピングしているのでstateを連動している
export const MESSAGES = {
  [TAB_NAME.HOME]: "ここはあなたの家です。ゆっくり過ごしてね。",
  [TAB_NAME.SEARCH]: "ここは探し物を探すところです。",
  [TAB_NAME.NOTIFICATION]: "ここはお手紙が届くよ。読んでね。",
};

export const TABS = [
  {
    icon: "🏠",
    label: "ホーム",
    tabName: TAB_NAME.HOME,
  },
  {
    icon: "🔍",
    label: "検索",
    tabName: TAB_NAME.SEARCH,
  },
  {
    icon: "🔔",
    label: "通知",
    tabName: TAB_NAME.NOTIFICATION,
  },
];
