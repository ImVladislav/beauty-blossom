import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { SharedLayout } from "./modules/components/SharedLayout/SharedLayout";

import { theme } from "./modules/components/theme";

import MainPage from "./pages/MainPage/MainPage";
import SaleProgramPage from "./pages/SaleProgramPage/SaleProgramPage";
import NewPage from "./pages/NewPage/NewPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import BrandsPage from "./pages/BrandsPage/BrandsPage";
<<<<<<< Updated upstream
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getGoods } from "./redux/operations";
import DiscountPage from "./pages/DiscountPage/DiscountPage";
=======
import UserData from "./pages/UserPage/UserData";
import UserPage from "./pages/UserPage/UserPage";
import PaymentHistory from "./pages/UserPage/PaymentHistory";



>>>>>>> Stashed changes

function App() {
  // const [goodsData, setGoodsData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGoods());
  }, []);

<<<<<<< Updated upstream
  // console.log(goodsData); // Отримайте дані з goodsData

=======
>>>>>>> Stashed changes
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<p>Login Page</p>} />
          <Route path="/registration" element={<p>Registration Page</p>} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/brands/:brands" element={<BrandsPage />} />
          <Route path="/news" element={<NewPage />} />
          <Route path="/discount" element={<p>Discount Page</p>} />
          <Route path="/wholesaleProgram" element={<SaleProgramPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product/:id" element={<ProductPage />} />

<<<<<<< Updated upstream
            <Route path="/news" element={<NewPage />} />
            <Route path="/discount" element={<DiscountPage />} />
            <Route path="/wholesaleProgram" element={<SaleProgramPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Route>
          {/*           
          <Route>
            <Route path="/cabinet/:personal-information" element={<p>/cabinet/personal-information/</p>} />
            <Route path="/cabinet/:history" element={<p>/cabinet/personal-information/</p>} />
            <Route path="<p>/cabinet/:favorites/</p>" element={<p>/cabinet/personal-information/</p>} />
          </Route>
          <Route>
=======
          <Route path="/cabinet" element={<UserPage/>}>
            <Route index element={<UserData/>} />
>>>>>>> Stashed changes

            <Route path="/cabinet/history" element={<PaymentHistory/>} />
            <Route path="favorites" element={<p>/cabinet/favorites/</p>} />
          </Route>

<<<<<<< Updated upstream
        <Route path="/" element={<p>home</p>} />
        <Route path="/about" element={<p>About</p>} />
            <Route path="/products" element={<p>Products</p>} />
            </Route> */}

=======
>>>>>>> Stashed changes
          <Route path="*" element={<p>Йой Лишенько! це ми ще не робили.</p>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;





// rafc
