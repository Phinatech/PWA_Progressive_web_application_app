import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Practicing } from "../Components/Pratiices";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Practicing />,
  },
]);

export default routes;
