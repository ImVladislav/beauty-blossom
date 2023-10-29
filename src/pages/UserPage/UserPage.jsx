import { Link, Outlet } from "react-router-dom";
import { Container } from "../../shared/styles/Container";
import { CabinetLink, Nav, StyledLink, Title, UserPageBlock } from "./UserPageStyled";
import { ProductOfTheWeek } from "../../modules/ProductOfTheWeek/ProductOfTheWeek";
import { Header } from "../../modules/Header/Header";
import { Footer } from "../../modules/Footer/Footer";
import { Bgd } from "../../modules/SharedLayout/SharedLayout.styled";
import { useState } from "react";

const UserPage = () => {
  const [pageTitle, setPageTitle] = useState("КОНТАКТНА ІНФОРМАЦІЯ");

  const handleUserDataClick = () => {
    setPageTitle("КОНТАКТНА ІНФОРМАЦІЯ");
  }
    const handleHistoryClick = () => {
    setPageTitle("ІСТОРІЯ ЗАМОВЛЕНЬ");
  }
    const handleChangePasswordClick = () => {
    setPageTitle("ЗМІНИТИ ПАРОЛЬ");
  }
  return (
    <Container>
      <div>
    <ProductOfTheWeek />
        <Header />
        <Bgd>
          <div>
              <Title>{pageTitle}</Title>
            <UserPageBlock>
      <Nav>
        <CabinetLink to="/cabinet/userData" onClick={handleUserDataClick}>КОНТАКТНА ІНФОРМАЦІЯ</CabinetLink>
                <CabinetLink to="/cabinet/history" onClick={handleHistoryClick} >ІСТОРІЯ ЗАМОВЛЕНЬ</CabinetLink>
        <CabinetLink to="/cabinet/сhangePassword"  onClick={handleChangePasswordClick} >ЗМІНИТИ ПАРОЛЬ</CabinetLink>
        <CabinetLink to="/">ПОВЕРНУТИСЬ ДО ПОКУПОК</CabinetLink>
          </Nav>
          
            <Outlet />
          </UserPageBlock>
        </div>    
        </Bgd>
        <Footer/>
        </div>
    </Container>
  );
};
export default UserPage;
