import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CounterApp } from "./apps/counterApp/components/CounterApp";
import "ress";
import { BrowserRouter, Route, Routes } from "react-router";
import { TableOfContentsPage } from "./TableOfContentsRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableOfContentsPage />} />
        <Route path="/counter-app" element={<CounterApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
