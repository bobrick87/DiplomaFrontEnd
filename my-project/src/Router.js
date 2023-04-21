import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRouter from "./privateRouter";

import Login from './containers/Login/Login';
import Products from './containers/Products/Products';
import NotFound from "./containers/NotFound/NotFound";
import Preview from "./containers/Preview/Preview";
import ProductID from "./containers/ProductID/ProductID";

const AppRouter = () => {
  return (
    <BrowserRouter >
      <Routes>
      <Route path="/login" element={<Login />}/>
      <Route element={<PrivateRouter />}>
        <Route path="/" element={<Products />} />
        <Route path="/preview" element={<Preview />}/>
        <Route path="/products/:productId" element={<ProductID />}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
