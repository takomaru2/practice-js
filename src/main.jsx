import { createRoot } from "react-dom/client";
import { CounterApp } from "./apps/counterApp/components/CounterApp";
import { TabApp } from "./apps/tabApp/components/TubApp/index.jsx";
import "ress";
import { BrowserRouter, Route, Routes } from "react-router";
import { TableOfContentsPage } from "./TableOfContentsRouter.jsx";
import { ColorApp } from "./apps/colorApp/components/ColorApp/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TableOfContentsPage />} />
      <Route path="/counter-app" element={<CounterApp />} />
      <Route path="/color-app" element={<ColorApp />} />
      <Route path="/tab-app" element={<TabApp />} />
    </Routes>
  </BrowserRouter>,
);
