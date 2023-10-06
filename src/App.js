import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { SharedLayout } from "./modules/components/SharedLayout/SharedLayout";

import { theme } from "./modules/components/theme";

import MainPage from "./pages/MainPage/MainPage"
import SaleProgramPage from "./pages/DiscountPage/SaleProgramPage";
import NewPage from "./pages/NewPage/NewPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route>
            <Route path="/login" element={<p>login Page</p>} />
            <Route path="/registration" element={<p>registration Page</p>} />
          </Route>
          <Route path="/" element={<MainPage/>} />
          <Route>
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/brands" element={<p>brands Page</p>} />
            <Route path="/news" element={<NewPage />} />
            <Route path="/discount" element={<p>discount Page</p>} />
            <Route path="/wholesaleProgram" element={<SaleProgramPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>

          <Route path="*" element={<p>тут ні**я нема скільки не дивись</p>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
export default App;
// rafc
