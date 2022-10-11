import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import Topics from "./components/Topics/Topics";
import Blog from "./components/Blog/Blog";
import Statistics from "./components/Statistics/Statistics";
import Errorpage from "./components/ErrorPage/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "topics",
        element: <Topics />,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
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
