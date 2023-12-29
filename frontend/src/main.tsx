import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { GlobalAuthProvider } from "./context/AuthContext.tsx";
import axios from "axios";
import { Toaster } from "react-hot-toast";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto Slab , serif",
    allVariants: { color: "white" },
  },
});

axios.defaults.baseURL = "http://localhost:8000/api/v1";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalAuthProvider>
      <ThemeProvider theme={theme}>
        <Toaster position="bottom-right"></Toaster>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </GlobalAuthProvider>
  </React.StrictMode>
);
