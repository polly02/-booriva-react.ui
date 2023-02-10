import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import PreviewPage from "./pages/PreviewPage/PreviewPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PreviewPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
      <Route path="/categories" element={<CategoriesPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/order" element={<OrderPage />}></Route>
    </Routes>

  );
}

export default App;
