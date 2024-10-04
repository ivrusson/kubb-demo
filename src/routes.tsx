
import App from "@/App";
import { HomePage } from "@/pages/home-page";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      { index: true, element: <HomePage /> },
    ],
  }
];