import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Bigslider from "../TwoSlider/BigSlider";
import Smallslider from "../TwoSlider/Smallslider";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Bigslider />,
      },
      {
        path: "/Smallslider",
        index: true,
        element: <Smallslider />,
      },
    ],
  },
]);
