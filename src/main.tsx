import { createRoot } from "react-dom/client";
import { CounterApp } from "./apps/counterApp/components/CounterApp";
import { TabApp } from "./apps/tabApp/components/TabApp";
import "ress";
import { BrowserRouter, Route, Routes } from "react-router";
import { TableOfContentsPage } from "./TableOfContentsRouter.tsx";
import { ToggleApp } from "./apps/toggleApp/components/ToggleApp";
import { ColorApp } from "./apps/colorApp/components/ColorApp";
import { LikeApp } from "./apps/likeApp/components/LikeApp";
import { DarkModeApp } from "./apps/darkModeApp/component/DarkModeApp";
import { AccordionApp } from "./apps/accordionApp/components/AccordionApp";
import { TextCounter } from "./apps/textCounterApp/components/TextCounter";
import { ModalApp } from "./apps/modalApp/components/ModalApp";
import { ProgressApp } from "./apps/progressApp/components/ProgressApp";
import { CalculatorApp } from "./apps/calculatorApp/components/CalculatorApp";
import { CheckBoxApp } from "./apps/checkBoxApp/components/CheckBoxApp";

const root = document.getElementById("root");

if (root !== null) {
  createRoot(root).render(
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
        <Route path="/check-box-app" element={<CheckBoxApp />} />
      </Routes>
    </BrowserRouter>,
  );
}
