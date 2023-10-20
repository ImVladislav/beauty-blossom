import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { SharedLayout } from "./modules/SharedLayout/SharedLayout";
import { useNavigate } from "react-router-dom";
import { theme } from "./shared/styles/theme";
import MainPage from "./pages/MainPage/MainPage";
import SaleProgramPage from "./pages/SaleProgramPage/SaleProgramPage";
import NewPage from "./pages/NewPage/NewPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import BrandsPage from "./pages/BrandsPage/BrandsPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGoods } from "./redux/operations";
import DiscountPage from "./pages/DiscountPage/DiscountPage";
import UserData from "./pages/UserPage/UserData";
import PaymentHistory from "./pages/UserPage/PaymentHistory";
import SortCategory from "./modules/Category/SortCategory/SortCategory";
import { refreshCurrentUser } from "./redux/auth/operation";
import { refreshSelector } from "./redux/auth/selectors";
import { PrivateRoute } from "./modules/PrivateRoutes/PrivateRoutse";

import { token } from "./redux/auth/operation";
  
function App() {
  // const [goodsData, setGoodsData] = useState(null);
  const isRefreshing = useSelector(refreshSelector);
  


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGoods());
  }, []);

    useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);
  console.log(isRefreshing);

  return !isRefreshing ? (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<p>Login Page</p>} />
          <Route path="/registration" element={<p>Registration Page</p>} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category/:category" element={<SortCategory />}></Route>
          <Route
            path="/category/:category/:category"
            element={<SortCategory />}
          />

          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/brands/:brands" element={<BrandsPage />} />
          <Route path="/news" element={<NewPage />} />
          <Route path="/discount" element={<DiscountPage />} />
          <Route path="/wholesaleProgram" element={<SaleProgramPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product/:id" element={<ProductPage />} />

          <Route path="/news" element={<NewPage />} />
          <Route path="/discount" element={<DiscountPage />} />
          <Route path="/wholesaleProgram" element={<SaleProgramPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product/:id" element={<ProductPage />} />

          <Route path="/cabinet"
            element={<PrivateRoute component={UserData} to="/cabinet" />} />
          <Route path="/cabinet/history"
            element={<PrivateRoute component={PaymentHistory} to="/cabinet/history" />} />
            
          <Route path="favorites" element={<p>/cabinet/favorites/</p>} />
          <Route path="*" element={<p>Йой Лишенько! це ми ще не робили.</p>} />
        </Route>
        <Route></Route>
      </Routes>
    </ThemeProvider>
  ) : null;
};
export default App;

// rafc
