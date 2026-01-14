import { Link } from "react-router";
import styles from "./index.module.scss";

const pages = [
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
];
const beginnerPages = pages.filter((page) => page.level === "beginner");
const intermediatePages = pages.filter((page) => page.level === "intermediate");

export const TableOfContentsPage = () => {
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
