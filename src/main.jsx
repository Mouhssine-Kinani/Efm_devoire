// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import {EFMStore} from './ReduxEFM/EFMstore.js'
// import { ToolkitStore } from "./Toolkit/all.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={EFMStore}>
      <App />
    </Provider>
  </StrictMode>
);
