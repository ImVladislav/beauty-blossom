import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container } from "../../shared/styles/Container";
import { Nav, StyledLink } from "./UserPageStyled";

const UserPage = () => {
  return (
    <Container>
      <Nav>
        <StyledLink to="/cabinet">Особисті данні</StyledLink>
        <StyledLink to="/cabinet/history">Історія замовлень</StyledLink>
        <StyledLink to="/cabinet/favorite">Обрані</StyledLink>
      </Nav>
      <Outlet />
    </Container>
  );
};

export default UserPage;
