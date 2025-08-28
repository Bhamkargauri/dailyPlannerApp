import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import AddBlog from "./AddBlog";
import App from "./App";
import DisplayShelf from "./DisplayShelf";
import UpdateShelf from "./UpdateShelf";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AddBlog />,
      },
      {
        path: "blogs",
        element: <DisplayShelf />,
      },
      {
        path: "update/:id",
        element: <UpdateShelf />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
