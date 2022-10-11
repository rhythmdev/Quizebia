import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import Topics from "./components/Topics/Topics";
import Blog from "./components/Blog/Blog";
import Statistics from "./components/Statistics/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "topics",
        element: <Topics />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);
