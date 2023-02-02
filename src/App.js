import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PreviewPage from "./pages/PreviewPage/PreviewPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PreviewPage/>}></Route>
      <Route path="*" element={<NotFoundPage/>}></Route>
      <Route></Route>
    </Routes>

  );
}

export default App;
