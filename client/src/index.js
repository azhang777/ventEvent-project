import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import authReducer from "./state";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { themeSettings } from "./theme";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { authReducer },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={themeSettings}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
