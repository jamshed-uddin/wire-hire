import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Banner from "./components/Banner";
import JobCategory from "./components/JobCategory";
import FeaturedJob from "./components/JobList/FeaturedJob";
import AppliedJob from "./components/AppliedJob";
import JobDetail from "./components/JobDetail";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import { appliedJobData } from "./Loader/loader";

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
        path: "/applied-job",
        element: <AppliedJob></AppliedJob>,
        loader: appliedJobData,
      },
      {
        path: "/job-detail/:jobId",
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
