import { Link } from "react-router";
import styles from "./index.module.scss";
import { FC } from "react";

// 一覧表示やルーティングで共通利用するページ定義。
// 汎用的なデータ構造にしているのは、将来どこからでも再利用できるようにするためという意図を感じるようでし。
// const PAGE = {
//   COUNTER: { path: "/counter-app", name: "カウンターアプリ" },
//   COLOR: { path: "/color-app", name: "カラーアプリ" },
// };

type Page = {
  path: string;
  name: string;
  level: string;
};

const PAGES: Page[] = [
  { path: "/counter-app", name: "カウンターアプリ", level: "beginner" },
  { path: "/color-app", name: "カラーアプリ", level: "beginner" },
  { path: "/tab-app", name: "ボトムタブ", level: "beginner" },
  { path: "/toggle-app", name: "トグルスイッチ", level: "beginner" },
  { path: "/like-app", name: "いいねアプリ", level: "beginner" },
  { path: "/dark-mode-app", name: "ダークモード", level: "beginner" },
  { path: "/accordion-app", name: "アコーディオン", level: "beginner" },
  { path: "/text-counter-app", name: "文字数カウンター", level: "beginner" },
  { path: "/modal-app", name: "モーダル", level: "beginner" },
  { path: "/progress-app", name: "プログレスバー", level: "beginner" },
  { path: "/calculator-app", name: "計算フォーム", level: "intermediate" },
  { path: "/search-app", name: "2chコピペ検索", level: "intermediate" },
];

const beginnerPages = PAGES.filter((page) => page.level === "beginner");
const intermediatePages = PAGES.filter((page) => page.level === "intermediate");

// todo: levelという概念はここでしか使わないから専用のデータ構造にする感じもありそうすると上記のロジックの保守が必要なくなる
// const pagesByLevel = {
//   beginner: [
//     { path: "/counter-app", name: "カウンターアプリ" },
//     { path: "/color-app", name: "カラーアプリ" },
//     { path: "/tab-app", name: "ボトムタブ" },
//     { path: "/toggle-app", name: "トグルスイッチ" },
//     { path: "/like-app", name: "いいねアプリ" },
//     { path: "/dark-mode-app", name: "ダークモード" },
//     { path: "/accordion-app", name: "アコーディオン" },
//     { path: "/text-counter-app", name: "文字数カウンター" },
//     { path: "/modal-app", name: "モーダル" },
//     { path: "/progress-app", name: "プログレスバー" },
//   ],
//   intermediate: [{ path: "/calculator-app", name: "計算フォーム" }],
// };

export const TableOfContentsPage: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Practice App</h1>
      <div className={styles.difficultySections}>
        <h2 className={styles.difficulty}>⭐初級</h2>
        <ul className={styles.linkToAppWrapper}>
          {beginnerPages.map((page) => (
            <li key={page.path}>
              <Link className={styles.linkToApp} to={page.path}>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>

        <h2 className={styles.difficulty}>⭐⭐ 中級</h2>
        <ul className={styles.linkToAppWrapper}>
          {intermediatePages.map((page) => (
            <li key={page.path}>
              <Link className={styles.linkToApp} to={page.path}>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
