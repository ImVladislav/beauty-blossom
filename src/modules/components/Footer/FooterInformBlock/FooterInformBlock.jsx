import { Item, ItemTitle, Nav } from "./InformBlockStyled"


export const FooterInformBlock = () => {
  return (
          <Nav>
              <ItemTitle to="/myaccount" >Особистий кабінет</ItemTitle>
              <Item to="/returnsExchanges">Повернення та обмін</Item>
              <Item to="/paymentDelivery">Оплата і доставка</Item>
              <Item to="wholesaleProgram">Оптова программа</Item>
              <Item to="/contacts">Контакти</Item>
          </Nav>
          
  )
}

