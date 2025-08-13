import { createBrowserRouter } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import Home from "./../pages/Home/Home";
import About from "./../pages/About/About";
import Portfolio from "../pages/Portfolio/Portfolio";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
