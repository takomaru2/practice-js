import { createRoot } from "react-dom/client";
import React from "react";
import { CounterApp } from "./apps/counterApp/components/CounterApp";
import { TabApp } from "./apps/tabApp/components/TabApp/index.jsx";
import "ress";
import { BrowserRouter, Route, Routes } from "react-router";
import { TableOfContentsPage } from "./TableOfContentsRouter.jsx";
import { ToggleApp } from "./apps/toggleApp/components/ToggleApp/index.tsx";
import { ColorApp } from "./apps/colorApp/components/ColorApp/index.tsx";
import { LikeApp } from "./apps/likeApp/components/LikeApp/index.tsx";
import { DarkModeApp } from "./apps/darkModeApp/component/DarkModeApp/index.tsx";
import { AccordionApp } from "./apps/accordionApp/components/AccordionApp/index.jsx";
import { TextCounter } from "./apps/textCounterApp/components/TextCounter/index.tsx";
import { ModalApp } from "./apps/modalApp/components/ModalApp/index.tsx";
import { ProgressApp } from "./apps/progressApp/components/ProgressApp/index.tsx";
import { CalculatorApp } from "./apps/calculatorApp/components/CalculatorApp/index.tsx";

// const PAGE = {
//   COUNTER: { path: "/counter-app", name: "カウンターアプリ" },
//   COLOR: { path: "/color-app", name: "カラーアプリ" },
// };

createRoot(document.getElementById("root")).render(
  // todo: Routerコンポーネントを作成し、Routes定義を移動する（責務分離のため）
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TableOfContentsPage />} />
      <Route path="/counter-app" element={<CounterApp />} />
      <Route path="/color-app" element={<ColorApp />} />
      <Route path="/tab-app" element={<TabApp />} />
      <Route path="/toggle-app" element={<ToggleApp />} />
      <Route path="/like-app" element={<LikeApp />} />
      <Route path="/dark-mode-app" element={<DarkModeApp />} />
      <Route path="/accordion-app" element={<AccordionApp />} />
      <Route path="/text-counter-app" element={<TextCounter />} />
      <Route path="/modal-app" element={<ModalApp />} />
      <Route path="/progress-app" element={<ProgressApp />} />
      <Route path="/calculator-app" element={<CalculatorApp />} />
    </Routes>
  </BrowserRouter>,
);
