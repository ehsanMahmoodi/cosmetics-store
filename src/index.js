import React from "react";
import ReactDOM from "react-dom";
// style
import "./assets/css/index.css";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "./theme/defaultTheme";
// app
import App from "./app/App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
