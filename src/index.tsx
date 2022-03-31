import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "state";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "utils/theme";

const node = document.getElementById("root") as HTMLDivElement;
const root = createRoot(node);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
