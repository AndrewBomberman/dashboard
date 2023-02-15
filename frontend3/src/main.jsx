import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import Layout from "./components/style/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <App />
    </ScopedCssBaseline>
  </React.StrictMode>
);
