import React from "react";

//layouts
import DefaultLayout from "../components/layouts/default-layout";

//pages
import Index from "./index";
import DetailsPage from "../views/detail-page";

export const DefaultRoutes = [
  {
    path: "/",
    element: <DefaultLayout header="true" footer="true" />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/details-page/:slug",
        element: <DetailsPage />,
      },
    ],
  },
];
