import { Route, Routes, Navigate } from "react-router";
import { ThemeProvider } from "styled-components";

import Header from "./modules/components/Header/Header";
import { SharedLayout } from "./modules/components/SharedLayout/SharedLayout";
import { MainPage } from "./Pages/MainPage/MainPage";

import { theme } from "./modules/components/theme";

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
          </Route>

          <Route path="*" element={<p>тут ні**я нема скільки не дивись</p>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
// rafc
