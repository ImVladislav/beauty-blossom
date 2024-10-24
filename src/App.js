
import { Navigate, Route, Routes } from "react-router-dom";
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
import ForgottenPage from "./pages/ForgottenPage/ForgottenPage";
import ForgottenIdPage from "./pages/ForgottenPage/ForgottenIdPage/ForgottenIdPage";
import { HelmetProvider } from "react-helmet-async";
import axios from "axios";
import CryptoJS from 'crypto-js';

function App() {
  const { isMobileScreen } = useMedia();

  const isRefreshing = useSelector(refreshSelector);
//======================Facebook Pixel======================
  
  const sendConversion = async () => {
    const accessToken = 'EAA04OeuiMK8BO9ibuOGZCCgfOhpEMUhdsoiKK1VlNgWVUA7LB43A9bwpJqdAQyRzYuJxpAx7Ad63pDU2ZClOmerZAXTZBAQB6S2oyMgD08vRCJrsZAIa3cQapueQGRZBSGUUwKMuKX6xW9AvJq38ERWpyRnZAnpv67HFaJY3qHzLxr62ZCJ7CZBjjfsKX0WCPvlBEaQZDZD';
    const pixelId = '789745059892711';
    
    const userData = {
      email: 'example@example.com', // Email для хешування
      phone: '1234567890', // Телефон для хешування
      country: 'Країна', // Країна
      zip: '12345' // Поштовий індекс
    };
  
    const eventData = {
      data: [
        {
          event_name: 'PageView',
          event_time: Math.floor(Date.now() / 1000), // Текущий час
          event_id: 'uniqueEventId1234',
          event_source_url: 'https://www.beautyblossom.com.ua/', // URL сторінки
          user_data: {
            email: CryptoJS.SHA256(userData.email).toString(), // Хешуйте email
            phone: CryptoJS.SHA256(userData.phone).toString(), // Хешуйте телефон
            country: CryptoJS.SHA256(userData.country).toString(), // Хешуйте країну
            zip: CryptoJS.SHA256(userData.zip).toString() // Хешуйте поштовий індекс
            // Виключаємо state
          }
        }
      ],
      access_token: accessToken
    };
  
    try {
      const response = await axios.post(`https://graph.facebook.com/v13.0/${pixelId}/events`, eventData);
      console.log('Event sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending event:', error.response.data);
    }
  };
  //==============================================================================

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGoods());
    sendConversion()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
