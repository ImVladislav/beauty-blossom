import {
  Item,
  ItemTitle,
  Nav,
  TitleWrap,
  Title,
  Underline,
} from "./InformBlockStyled";

export const FooterInformBlock = () => {
  return (
    <div>
      <TitleWrap>
        <Title>Клієнтам</Title>
        <Underline />
      </TitleWrap>
      <Nav>
        <Item to="/cabinet/userData">Особистий кабінет</Item>
        <ItemTitle href="/beauty-blossom/wholesaleProgram/#return">
          Повернення та обмін
        </ItemTitle>
        <ItemTitle href="/beauty-blossom/wholesaleProgram/#payment">
          Оплата і доставка
        </ItemTitle>
        <ItemTitle href="/beauty-blossom/wholesaleProgram/#about">
          Про нас
        </ItemTitle>
        {/* <Item to="/contacts">Контакти</Item> */}
      </Nav>
    </div>
  );
};
