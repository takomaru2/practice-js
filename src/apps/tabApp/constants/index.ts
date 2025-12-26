// DRYにしたかったので生まれたこいつ

export const TAB_ID = {
  HOME: "home",
  SEARCH: "search",
  NOTIFICATION: "notification",
} as const;

// "house" | "search" | "notification";
export type TabId = (typeof TAB_ID)[TabKey];

// "HOME" | "SEARCH" | "NOTIFICATION";
type TabKey = keyof typeof TAB_ID;

export const MESSAGES: Record<TabId, string> = {
  [TAB_ID.HOME]: "ここはあなたの家です。ゆっくり過ごしてね。",
  [TAB_ID.SEARCH]: "ここは探し物を探すところです。",
  [TAB_ID.NOTIFICATION]: "ここはお手紙が届くよ。読んでね。",
} as const;
// todo:satisfies
//as constによりイミュータブルなオブジェクトになった固いぜ
//as constは構造体に全部つけろ！

export type Tab = {
  icon: string;
  label: string;
  id: TabId;
};

export const TABS: Tab[] = [
  {
    icon: "🏠",
    label: "ホーム",
    id: TAB_ID.HOME,
  },
  {
    icon: "🔍",
    label: "検索",
    id: TAB_ID.SEARCH,
  },
  {
    icon: "🔔",
    label: "通知",
    id: TAB_ID.NOTIFICATION,
  },
];
