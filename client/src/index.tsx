import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./shared/state/store";

const rootNodeId = "root";

const container = document.getElementById(rootNodeId);

if (!container) {
    throw new Error(`Не найден Dom элемент с ${rootNodeId} `);
}

const root = createRoot(container);

root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
);