import { ErrorPage } from "./components/ErrorPage/index.tsx";
import App from "./App.tsx";
import { createBrowserRouter } from "react-router-dom";
import { PromptPage } from "./components/PromptPage/index.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/prompt/:id",
    element: <PromptPage />,
    errorElement: <ErrorPage />,
  },
]);
