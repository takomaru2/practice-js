// stateとメッセージをマッピングしているのでstateを連動している
export const MESSAGES = {
  home: "ここはあなたの家です。ゆっくり過ごしてね。",
  search: "ここは探し物を探すところです。",
  notification: "ここはお手紙が届くよ。読んでね。",
};

export const TAB_NAME = {
  HOME: "home",
  SEARCH: "search",
  NOTIFICATION: "notification",
};

export const TABS = [
  {
    icon: "🏠",
    label: "ホーム",
    tabName: "home",
  },
  {
    icon: "🔍",
    label: "検索",
    tabName: "search",
  },
  {
    icon: "🔔",
    label: "通知",
    tabName: "notification",
  },
];
