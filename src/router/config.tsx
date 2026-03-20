import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Products from "../pages/products/page";
import Checkout from "../pages/checkout/page";
const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/productos", element: <Products /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "*", element: <NotFound /> },
];
export default routes;
