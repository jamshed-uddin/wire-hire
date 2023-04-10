import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Banner from "./components/Banner";
import JobCategory from "./components/JobCategory";
import FeaturedJob from "./components/FeaturedJob";
import AppliedJob from "./components/AppliedJob";
import JobDetail from "./components/JobDetail";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/applied-job",
        element: <AppliedJob></AppliedJob>,
      },
      {
        path: "/job-detail",
        element: <JobDetail></JobDetail>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
