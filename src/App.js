import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import PreviewPage from "./pages/PreviewPage/PreviewPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PreviewPage />}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="/basket" element={<CartPage />}></Route>
      <Route path="/order" element={<OrderPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>

  );
}

export default App;
