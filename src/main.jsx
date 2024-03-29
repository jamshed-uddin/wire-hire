import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppliedJob from "./components/AppliedJob";
import JobDetail from "./components/JobDetail";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";

import Blogs from "./components/Blogs";
import Statistics from "./components/Statistics";

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
        path: "appliedjob",
        element: <AppliedJob></AppliedJob>,
        loader: () => fetch("/jobList.json"),
      },
      {
        path: "job-detail/:jobId",
        element: <JobDetail></JobDetail>,
        loader: ({ params }) => fetch("/jobList.json"),
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
