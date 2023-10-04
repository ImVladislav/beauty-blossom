import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";

import { SharedLayout } from "./modules/components/SharedLayout/SharedLayout";
import { MainPage } from "./pages/MainPage/MainPage";

import { theme } from "./modules/components/theme";
import { SearchPage } from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route>
            <Route path="/login" element={<p>login Page</p>} />
            <Route path="/registration" element={<p>registration Page</p>} />
          </Route>
          <Route path="/" element={<MainPage />} />
          <Route>
            <Route path="/category" element={<p>category Page</p>} />
            <Route path="/brands" element={<p>brands Page</p>} />
            <Route path="/news" element={<p>news Page</p>} />
            <Route path="/discount" element={<p>discount Page</p>} />
            <Route
              path="/wholesaleProgram"
              element={<p>wholesaleProgram Page</p>}
            />
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
