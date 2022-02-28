import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// 원래 main 컬러 ->  "#E55132" (확인때문에 임시로 바꿨어요!)
const theme = createTheme({
  palette: {
    primary: {
      main: "#29E357",
    },
    orange: {
      main: "#EF9734",
    },
    yellow: {
      dark: "#F1BD3D",
      light: "#F2C744",
    },
    text: {
      light: "#FEFDFC",
      main: "#191919",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
