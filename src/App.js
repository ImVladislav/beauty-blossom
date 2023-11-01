import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { SharedLayout } from "./modules/SharedLayout/SharedLayout";
import { theme } from "./shared/styles/theme";
import MainPage from "./pages/MainPage/MainPage";
import SaleProgramPage from "./pages/SaleProgramPage/SaleProgramPage";
import NewPage from "./pages/NewPage/NewPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import BrandsPage from "./pages/BrandsPage/BrandsPage";
import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGoods } from "./redux/operations";
import DiscountPage from "./pages/DiscountPage/DiscountPage";
import UserData from "./pages/UserPage/UserData";
import PaymentHistory from "./pages/UserPage/PaymentHistory";
import SortCategory from "./modules/Category/SortCategory/SortCategory";
import { refreshCurrentUser } from "./redux/auth/operation";
import { refreshSelector } from "./redux/auth/selectors";
import {
  PrivateAdminRoute,
  PrivateRoute,
} from "./modules/PrivateRoutes/PrivateRoutse";
import OrderPlacement from "./modules/OrderPlacement/OrderPlacement";
import AdminPage from "./pages/AdminPage/AdminPage";
import UserPage from "./pages/UserPage/UserPage";
import ChangePassword from "./pages/UserPage/ChangePassword";
import { Loader } from "./shared/components/Loader/Loader";

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

  return !isRefreshing ? (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <SharedLayout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <MainPage />
              </Suspense>
            }
          />
          <Route path="/login" element={<p>Login Page</p>} />
          <Route path="/registration" element={<p>Registration Page</p>} />
          <Route
            path="/category"
            element={
              <Suspense fallback={<Loader />}>
                <CategoryPage />
              </Suspense>
            }
          />
          <Route
            path="/category/:category"
            element={
              <Suspense fallback={<Loader />}>
                <SortCategory />
              </Suspense>
            }
          ></Route>
          <Route
            path="/category/:category/:category"
            element={
              <Suspense fallback={<Loader />}>
                <SortCategory />
              </Suspense>
            }
          />
          <Route
            path="/category/:category/:category/:category"
            element={
              <Suspense fallback={<Loader />}>
                <SortCategory />
              </Suspense>
            }
          />
          <Route
            path="/brands"
            element={
              <Suspense fallback={<Loader />}>
                <BrandsPage />
              </Suspense>
            }
          />
          <Route
            path="/brands/:brands"
            element={
              <Suspense fallback={<Loader />}>
                <BrandsPage />
              </Suspense>
            }
          />
          <Route
            path="/news"
            element={
              <Suspense fallback={<Loader />}>
                <NewPage />
              </Suspense>
            }
          />
          <Route
            path="/discount"
            element={
              <Suspense fallback={<Loader />}>
                <DiscountPage />
              </Suspense>
            }
          />
          <Route
            path="/wholesaleProgram"
            element={
              <Suspense fallback={<Loader />}>
                <SaleProgramPage />
              </Suspense>
            }
          />
          <Route
            path="/search"
            element={
              <Suspense fallback={<Loader />}>
                <SearchPage />
              </Suspense>
            }
          />
          <Route
            path="/product/:id"
            element={
              <Suspense fallback={<Loader />}>
                <ProductPage />
              </Suspense>
            }
          />
          <Route
            path="/order"
            element={
              <Suspense fallback={<Loader />}>
                <OrderPlacement />
              </Suspense>
            }
          />
          <Route
            path="/ordersbyclient"
            element={<PrivateAdminRoute component={AdminPage} to="/" />}
          />
        </Route>
        <Route
          path="/cabinet"
          element={<PrivateRoute component={UserPage} to="/" />}
        >
          <Route
            path="/cabinet/userData"
            element={<PrivateRoute component={UserData} to="/" />}
          ></Route>

          <Route
            path="/cabinet/сhangePassword"
            element={<PrivateRoute component={ChangePassword} to="/" />}
          />

          <Route
            path="/cabinet/history"
            element={<PrivateRoute component={PaymentHistory} to="/" />}
          />
          <Route path="favorites" element={<p>/cabinet/favorites/</p>} />
          <Route path="*" element={<p>Йой Лишенько! це ми ще не робили.</p>} />
        </Route>
      </Routes>
    </ThemeProvider>
  ) : null;
}
export default App;

// rafc
