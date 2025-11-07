import { Link } from "react-router";
import styles from "./index.module.scss";

const pages = [
  { path: "/counter-app", name: "カウンターアプリ" },
  { path: "/color-app", name: "カラーアプリ" },
  { path: "/tab-app", name: "ボトムタブ" },
  { path: "/toggle-app", name: "トグルスイッチ" },
];

export const TableOfContentsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Practice App</h1>
      <div>
        <h2 className={styles.difficulty}>初級 ⭐︎</h2>
        <ul className={styles.linkToAppWrapper}>
          {pages.map((page) => (
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
