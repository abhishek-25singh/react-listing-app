import React, { StrictMode } from "react";
import reactDom from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";

reactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
