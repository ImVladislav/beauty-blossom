import { Outlet } from "react-router-dom";
import {
  CabinetBlock,
  CabinetContainer,
  CabinetLink,
  Nav,
  Title,
  UserPageBlock,
} from "./UserPageStyled";
import { Header } from "../../modules/Header/Header";
import { Footer } from "../../modules/Footer/Footer";
import { Bgd } from "../../modules/SharedLayout/SharedLayout.styled";
import { useState } from "react";

const UserPage = () => {
  const [pageTitle, setPageTitle] = useState("КОНТАКТНА ІНФОРМАЦІЯ");

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

  return (
<CabinetContainer>
<div>
        <Header />
        <Bgd>
          <CabinetBlock>
            <Title>{pageTitle}</Title>
            <UserPageBlock>
              
              <Nav>
                <CabinetLink
                  to="/cabinet/userData"
                  onClick={handleUserDataClick}
                >
                  КОНТАКТНА ІНФОРМАЦІЯ
                </CabinetLink>
                <CabinetLink to="/cabinet/history" onClick={handleHistoryClick}>
                  ІСТОРІЯ ЗАМОВЛЕНЬ
                </CabinetLink>
                <CabinetLink
                  to="/cabinet/сhangePassword"
                  onClick={handleChangePasswordClick}
                >
                  ЗМІНИТИ ПАРОЛЬ
                </CabinetLink>
                                <CabinetLink
                  to="/cabinet/feedback"
                  onClick={handleChangeFeedbackClick}
                >
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
</CabinetContainer>
  );
};
export default UserPage;
