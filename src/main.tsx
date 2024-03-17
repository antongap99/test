import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ErrorBoundary } from "./app/providers/ErrorBoundary";
import {StoreProvider} from "./app/providers/storeProvider/ui/StoreProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
	    <StoreProvider>
            <App />
	    </StoreProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
