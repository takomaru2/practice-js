import { Link } from "react-router";

const pages = [
  { path: "/counter-app", name: "カウンターアプリ" },
  { path: "/color-app", name: "カラーアプリ" },
];

export const TableOfContentsPage = () => {
  return (
    <ul>
      {pages.map((page) => (
        <li key={page.path}>
          <Link to={page.path}>{page.name}</Link>
        </li>
      ))}
    </ul>
  );
};
