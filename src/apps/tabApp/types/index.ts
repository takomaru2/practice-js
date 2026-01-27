import { TAB_ID } from "../constants";

export type Tab = {
  icon: string;
  label: string;
  id: TabId;
};

// "HOME" | "SEARCH" | "NOTIFICATION";
type TabKey = keyof typeof TAB_ID;

// "house" | "search" | "notification";
export type TabId = (typeof TAB_ID)[TabKey];
