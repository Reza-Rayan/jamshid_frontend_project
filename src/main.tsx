import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

import RtlTheme from "./Theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RtlTheme>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RtlTheme>
    </Provider>
  </React.StrictMode>
);
