import {Navigate, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {SharedLayout} from "./modules/SharedLayout/SharedLayout";
import {theme} from "./shared/styles/theme";
import MainPage from "./pages/MainPage/MainPage";
import SaleProgramPage from "./pages/SaleProgramPage/SaleProgramPage";
import NewPage from "./pages/NewPage/NewPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import BrandsPage from "./pages/BrandsPage/BrandsPage";
import React, {useEffect, Suspense} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGoods} from "./redux/operations";
import DiscountPage from "./pages/DiscountPage/DiscountPage";
import UserData from "./pages/UserPage/UserData";
import PaymentHistory from "./pages/UserPage/PaymentHistory";
import SortCategory from "./modules/SortCategory/SortCategory";
import {refreshCurrentUser} from "./redux/auth/operation";
import {refreshSelector, userSelectorEmail, userSelectorfirstName, userSelectorlastName, userSelectorNumber} from "./redux/auth/selectors";
import {
	PrivateAdminRoute,
	PrivateRoute,
} from "./modules/PrivateRoutes/PrivateRoutse";
import OrderPlacement from "./modules/OrderPlacement/OrderPlacement";
import AdminPage from "./pages/AdminPage/AdminPage";
import UserPage from "./pages/UserPage/UserPage";
import ChangePassword from "./pages/UserPage/ChangePassword";
import {Loader} from "./shared/components/Loader/Loader";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NoProducts from "./pages/NoProducts/NoProducts";
import Feedback from "./pages/UserPage/Feedback";
import ScrollToTopMobile from "./shared/components/ScrollToTopMobile/ScrollToTopMobile";
import {useMedia} from "./hooks/useMedia";
import ForgottenPage from "./pages/ForgottenPage/ForgottenPage";
import ForgottenIdPage from "./pages/ForgottenPage/ForgottenIdPage/ForgottenIdPage";
import {HelmetProvider} from "react-helmet-async";
import {useLocation} from 'react-router-dom';
import {trackPageView} from "./ads/AdEvents";

function App() {
	const location  = useLocation(),
	      email     = useSelector(userSelectorEmail),
	      phone     = useSelector(userSelectorNumber),
	      firstName = useSelector(userSelectorfirstName),
	      lastName  = useSelector(userSelectorlastName);

	useEffect(() => {
		const run = async () => {
			const userDataSelectors = {em: email, ph: phone, fn: firstName, ln: lastName};
			await trackPageView(userDataSelectors);
		};

		run();
	}, [location]);


	const { isMobileScreen } = useMedia();

  const isRefreshing = useSelector(refreshSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGoods());
  }, []);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <HelmetProvider>
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
            <Route path="forgotten" element={<ForgottenPage />} />
            <Route path="forgotten/:forgotten" element={<ForgottenIdPage />} />
            {/* <Route path="login" element={<p>Login Page</p>} /> */}

            {/* <Route path="registration" element={<p>Registration Page</p>} /> */}
            <Route
              path="katehoriji"
              element={
                <Suspense fallback={<Loader />}>
                  <CategoryPage />
                </Suspense>
              }
            />
            <Route
              path="katehoriji/:category"
              element={
                <Suspense fallback={<Loader />}>
                  <SortCategory />
                </Suspense>
              }
            ></Route>
            <Route
              path="katehoriji/:category/:subCategory"
              element={
                <Suspense fallback={<Loader />}>
                  <SortCategory />
                </Suspense>
              }
            />
            <Route
              path="katehoriji/:category/:subCategory/:subSubCategory"
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
              path="novynky"
              element={
                <Suspense fallback={<Loader />}>
                  <NewPage />
                </Suspense>
              }
            />
            <Route
              path="aktsiji"
              element={
                <Suspense fallback={<Loader />}>
                  <DiscountPage />
                </Suspense>
              }
            />
            <Route
              path="kliientam"
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
              path="product"
              element={
                <Suspense fallback={<Loader />}>
                  <Navigate to="/" />
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
    </HelmetProvider>
  ) : (
    <Loader />
  );
}
export default App;
