import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/custom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IndexRoutes } from "./routes";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([...IndexRoutes],{ basename: process.env.PUBLIC_URL });
library.add(fas);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router}></RouterProvider>
    </App>
  </React.StrictMode>
);
