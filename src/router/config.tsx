import { Navigate, type RouteObject } from "react-router-dom";
import Home from "../pages/home/page";
import Products from "../pages/products/page";
import Promotions from "../pages/promotions/page";
import Checkout from "../pages/checkout/page";
const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/productos", element: <Products /> },
  { path: "/ofertas", element: <Promotions /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "*", element: <Navigate to="/" /> },
];
export default routes;
