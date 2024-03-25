import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import Blogs from "../page/blog/Blogs";
import Shop from "../page/Shop/Shop";
import Wishlist from "../page/Wishlist/Wishlist";
import Checkout from "../page/Checkout/Checkout";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/blog-classic",
        element: <Blogs />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
