import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Bgd } from "./SharedLayout.styled";
import { Suspense } from "react";
import { Loader } from "../../shared/components/Loader/Loader";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Bgd>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Bgd>
      <Footer />
    </>
  );
};
