import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MultiListView from "./pages/MultiListView/MultiListView.tsx";
import DetailedListView from "./pages/DetailedListView/DetailedListView.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "lists",
    element: <MultiListView />,
  },
  {
    path: "lists/:listName",
    element: <DetailedListView />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
