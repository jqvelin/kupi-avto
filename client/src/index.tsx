import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./shared/state/store";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const rootNodeId = "root";

const container = document.getElementById(rootNodeId);

if (!container) {
    throw new Error(`Не найден Dom элемент с ${rootNodeId} `);
}

const root = createRoot(container);

const queryClient = new QueryClient()

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                <App />
                </QueryClientProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
