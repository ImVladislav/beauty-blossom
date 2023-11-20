import { Outlet } from "react-router-dom";
import {
  CabinetBlock,
  CabinetLink,
  Nav,
  OptUserTag,
  Title,
  UserPageBlock,
} from "./UserPageStyled";
import { Header } from "../../modules/Header/Header";
import { Footer } from "../../modules/Footer/Footer";
import { Bgd } from "../../modules/SharedLayout/SharedLayout.styled";
import { useState } from "react";
import { useSelector } from "react-redux";
import { optUserSelector } from "../../redux/auth/selectors";

const UserPage = () => {
  const [pageTitle, setPageTitle] = useState("ІНФОРМАЦІЯ");

  const handleUserDataClick = () => {
    setPageTitle("КОНТАКТНА ІНФОРМАЦІЯ");
  };
  const handleHistoryClick = () => {
    setPageTitle("ІСТОРІЯ ЗАМОВЛЕНЬ");
  };
  const handleChangePasswordClick = () => {
    setPageTitle("ЗМІНИТИ ПАРОЛЬ");
  };
  const handleChangeFeedbackClick = () => {
    setPageTitle("ВІДГУКИ ТА ПРОПОЗИЦІЇ");
  };
  const isOPTuser = useSelector(optUserSelector);

  return (
    <div>
      <Header />
      <Bgd>
        <CabinetBlock>
          <Title>{pageTitle}</Title>
          <UserPageBlock>
            <Nav>
              {isOPTuser && <OptUserTag>Оптовий аккаунт</OptUserTag>}
              <CabinetLink to="userData" onClick={handleUserDataClick}>
                КОНТАКТНА ІНФОРМАЦІЯ
              </CabinetLink>
              <CabinetLink to="history" onClick={handleHistoryClick}>
                ІСТОРІЯ ЗАМОВЛЕНЬ
              </CabinetLink>
              <CabinetLink
                to="сhangePassword"
                onClick={handleChangePasswordClick}
              >
                ЗМІНИТИ ПАРОЛЬ
              </CabinetLink>
              <CabinetLink to="feedback" onClick={handleChangeFeedbackClick}>
                ЗАЛИШИТИ ВІДГУК
              </CabinetLink>
              <CabinetLink to="/">ПОВЕРНУТИСЬ ДО ПОКУПОК</CabinetLink>
            </Nav>

            <Outlet />
          </UserPageBlock>
        </CabinetBlock>
      </Bgd>
      <Footer />
    </div>
  );
};
export default UserPage;
