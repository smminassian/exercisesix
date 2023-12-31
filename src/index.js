import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Calc from "./Calc";

const root = createRoot(document.getElementById("root"));
const calcRoot = createRoot(document.getElementById("calcRoot"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

calcRoot.render(
  <StrictMode>
    <Calc />
    </StrictMode>
);