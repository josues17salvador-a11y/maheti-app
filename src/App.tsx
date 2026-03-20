import { BrowserRouter, useRoutes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import routes from "./router/config";
import { CartProvider } from "./context/CartContext";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
