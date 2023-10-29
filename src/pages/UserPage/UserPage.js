import { Link, Outlet } from "react-router-dom";
import { Container } from "../../shared/styles/Container";
import { CabinetLink, Nav, StyledLink } from "./UserPageStyled";

const UserPage = () => {
  return (
    <Container>
      <Nav>
        <CabinetLink to="/cabinet/userData">Особисті данні</CabinetLink>
        <CabinetLink to="/cabinet/history">Історія замовлень</CabinetLink>
        <CabinetLink to="/cabinet/favorite">Обрані</CabinetLink>
        <CabinetLink to="/">Повернутись до покупок</CabinetLink>
      </Nav>
      <Outlet />
    </Container>
  );
};
export default UserPage;
