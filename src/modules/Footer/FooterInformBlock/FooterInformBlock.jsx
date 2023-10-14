import { Item, ItemTitle, Nav } from "./InformBlockStyled"


export const FooterInformBlock = () => {
  return (
          <Nav>
              <ItemTitle to="/myaccount" >Особистий кабінет</ItemTitle>
              <Item to="/wholesaleProgram">Повернення та обмін</Item>
              <Item to="/wholesaleProgram">Оплата і доставка</Item>
              <Item to="/wholesaleProgram">Оптова программа</Item>
              {/* <Item to="/contacts">Контакти</Item> */}
          </Nav>
          
  )
}

