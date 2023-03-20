import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { axiosConfig } from "./config/axiosConfig";
import "./index.css";
import { BrowserRouter, createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom";
import { UsersPage } from "./pages/UsersPage";

axiosConfig();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  //<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  //</React.StrictMode>,
);
