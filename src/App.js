// import React, { useEffect, lazy } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getGoods } from "./redux/operations";
// import { refreshCurrentUser } from "./redux/auth/operation";
// import { refreshSelector } from "./redux/auth/selectors";
// import { Route, Routes } from "react-router";
// import { ThemeProvider } from "styled-components";
// import { SharedLayout } from "./modules/SharedLayout/SharedLayout";
// import { PrivateAdminRoute, PrivateRoute } from "./modules/PrivateRoutes/PrivateRoutse";
// import { theme } from "./shared/styles/theme";
// import PaymentHistory from "./pages/UserPage/PaymentHistory";
// import UserPage from "./pages/UserPage/UserPage";
// import UserData from "./pages/UserPage/UserData";
// import AdminPage from "./pages/AdminPage/AdminPage";
// import ChangePassword from "./pages/UserPage/ChangePassword";
// import Feedback from "./pages/UserPage/Feedback";

// const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
// const SaleProgramPage = lazy(() => import("./pages/SaleProgramPage/SaleProgramPage"));
// const NewPage = lazy(() => import("./pages/NewPage/NewPage"));
// const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
// const CategoryPage = lazy(() => import("./pages/CategoryPage/CategoryPage"));
// const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));
// const BrandsPage = lazy(() => import("./pages/BrandsPage/BrandsPage"));
// const DiscountPage = lazy(() => import("./pages/DiscountPage/DiscountPage"));
// const SortCategory = lazy(() => import("./modules/Category/SortCategory/SortCategory"));
// const OrderPlacement = lazy(() => import("./modules/OrderPlacement/OrderPlacement"));
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
// const NoProducts = lazy(() => import("./pages/NoProducts/NoProducts"));

// function App() {
//   // const [goodsData, setGoodsData] = useState(null);
//   const isRefreshing = useSelector(refreshSelector);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getGoods());
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     dispatch(refreshCurrentUser());
//   }, [dispatch]);

//   return !isRefreshing ? (
//     <ThemeProvider theme={theme}>
//       <Routes>
//         <Route path="*" element={<NotFoundPage />} />
//         <Route
//           path="/"
//           element={<SharedLayout />}
//         >
//           <Route
//             index
//             element={<MainPage /> }
//           />
//           <Route
//             path="category"
//             element={<CategoryPage />}
//           />
//           <Route
//             path="category/:category"
//             element={<SortCategory />}
//           ></Route>
//           <Route
//             path="category/:category/:category"
//             element={ <SortCategory /> }
//           />
//           <Route
//             path="category/:category/:category/:category"
//             element={<SortCategory />}
//           />
//           <Route
//             path="brands"
//             element={<BrandsPage />}
//           />
//           <Route
//             path="brands/:brands"
//             element={<BrandsPage />}
//           />
//           <Route
//             path="news"
//             element={<NewPage />}
//           />
//           <Route
//             path="discount"
//             element={<DiscountPage /> }
//           />
//           <Route
//             path="wholesaleProgram"
//             element={<SaleProgramPage />}
//           />
//           <Route
//             path="feedback"
//             element={ <Feedback/> }
//           />
//           <Route
//             path="search"
//             element={<SearchPage />}
//           />
//           <Route
//             path="product/:id"
//             element={<ProductPage />}
//           />
//           <Route path="no-product" element={<NoProducts />} />
//           <Route
//             path="order"
//             element={<OrderPlacement />}
//           />
//           <Route
//             path="ordersbyclient"
//             element={<PrivateAdminRoute component={AdminPage} to="/" />}
//           />
//         </Route>
//         <Route
//           path="cabinet"
//           element={<PrivateRoute component={UserPage} to="/" />}
//         >
//           <Route
//             path="userData"
//             element={<PrivateRoute component={UserData} to="/" />}
//           ></Route>

//           <Route
//             path="сhangePassword"
//             element={<PrivateRoute component={ChangePassword} to="/" />}
//           />

//           <Route
//             path="history"
//             element={<PrivateRoute component={PaymentHistory} to="/" />}
//           />

//         </Route>
//       </Routes>
//     </ThemeProvider>
//   ) : null;
// }
// export default App;

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
import SortCategory from "./modules/SortCategory/SortCategory";
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
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NoProducts from "./pages/NoProducts/NoProducts";
import Feedback from "./pages/UserPage/Feedback";
import ScrollToTopMobile from "./shared/components/ScrollToTopMobile/ScrollToTopMobile";
import { useMedia } from "./hooks/useMedia";

function App() {
  const { isMobileScreen } = useMedia();
  // const [goodsData, setGoodsData] = useState(null);
  const isRefreshing = useSelector(refreshSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGoods());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
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
          <Route path="login" element={<p>Login Page</p>} />
          <Route path="registration" element={<p>Registration Page</p>} />
          <Route
            path="category"
            element={
              <Suspense fallback={<Loader />}>
                <CategoryPage />
              </Suspense>
            }
          />
          <Route
            path="category/:category"
            element={
              <Suspense fallback={<Loader />}>
                <SortCategory />
              </Suspense>
            }
          ></Route>
          <Route
            path="category/:category/:category"
            element={
              <Suspense fallback={<Loader />}>
                <SortCategory />
              </Suspense>
            }
          />
          <Route
            path="category/:category/:category/:category"
            element={
              <Suspense fallback={<Loader />}>
                <SortCategory />
              </Suspense>
            }
          />
          <Route
            path="brands"
            element={
              <Suspense fallback={<Loader />}>
                <BrandsPage />
              </Suspense>
            }
          />
          <Route
            path="brands/:brands"
            element={
              <Suspense fallback={<Loader />}>
                <BrandsPage />
              </Suspense>
            }
          />
          <Route
            path="news"
            element={
              <Suspense fallback={<Loader />}>
                <NewPage />
              </Suspense>
            }
          />
          <Route
            path="discount"
            element={
              <Suspense fallback={<Loader />}>
                <DiscountPage />
              </Suspense>
            }
          />
          <Route
            path="wholesaleProgram"
            element={
              <Suspense fallback={<Loader />}>
                <SaleProgramPage />
              </Suspense>
            }
          />
          <Route
            path="feedback"
            element={
              <Suspense fallback={<Loader />}>
                <Feedback />
              </Suspense>
            }
          />
          <Route
            path="search"
            element={
              <Suspense fallback={<Loader />}>
                <SearchPage />
              </Suspense>
            }
          />
          <Route
            path="product/:id"
            element={
              <Suspense fallback={<Loader />}>
                <ProductPage />
              </Suspense>
            }
          />
          <Route path="no-product" element={<NoProducts />} />
          <Route
            path="order"
            element={
              <Suspense fallback={<Loader />}>
                <OrderPlacement />
              </Suspense>
            }
          />
          <Route
            path="ordersbyclient"
            element={<PrivateAdminRoute component={AdminPage} to="/" />}
          />
        </Route>
        <Route
          path="cabinet"
          element={<PrivateRoute component={UserPage} to="/" />}
        >
          <Route
            path="userData"
            element={<PrivateRoute component={UserData} to="/" />}
          ></Route>

          <Route
            path="сhangePassword"
            element={<PrivateRoute component={ChangePassword} to="/" />}
          />

          <Route
            path="history"
            element={<PrivateRoute component={PaymentHistory} to="/" />}
          />
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
      {!isMobileScreen && <ScrollToTopMobile />}
    </ThemeProvider>
  ) : null;
}
export default App;
