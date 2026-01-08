import { createRoot } from "react-dom/client";
import { CounterApp } from "./apps/counterApp/components/CounterApp";
import { TabApp } from "./apps/tabApp/components/TabApp/index.jsx";
import "ress";
import { BrowserRouter, Route, Routes } from "react-router";
import { TableOfContentsPage } from "./TableOfContentsRouter.jsx";
import { ColorApp } from "./apps/colorApp/components/ColorApp/index.jsx";
import { ToggleApp } from "./apps/toggleApp/components/ToggleApp/index.jsx";
import { LikeApp } from "./apps/likeApp/components/LikeApp/index.tsx";
import { DarkModeApp } from "./apps/darkModeApp/component/DarkModeApp/index.jsx";
import { AccordionApp } from "./apps/accordionApp/components/AccordionApp/index.jsx";
import { TextCounter } from "./apps/textCounterApp/components/TextCounter/index.tsx";
import { ModalApp } from "./apps/modalApp/components/ModalApp/index.tsx";
import { ProgressApp } from "./apps/progressApp/components/ProgressApp/index.jsx";
import React from "react";

createRoot(document.getElementById("root")).render(
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
    </Routes>
  </BrowserRouter>,
);
