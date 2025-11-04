import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CounterApp } from "./apps/counterApp/components/CounterApp";
import "ress";
import { BrowserRouter, Route, Routes } from "react-router";
import { TableOfContentsPage } from "./TableOfContentsRouter.jsx";
import { ColorApp } from "./apps/colorApp/components/ColorApp/index.jsx";
import { ToggleApp } from "./apps/toggle-app/components/ToggleApp/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableOfContentsPage />} />
        <Route path="/counter-app" element={<CounterApp />} />
        <Route path="/color-app" element={<ColorApp />} />
        <Route path="/toggle-app" element={<ToggleApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
