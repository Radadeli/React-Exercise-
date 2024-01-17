import { createRoot } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import "./Index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
