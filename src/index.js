import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { store } from "./App/Store";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
