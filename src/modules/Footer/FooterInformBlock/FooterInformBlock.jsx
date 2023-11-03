import { useMedia } from "../../../hooks/useMedia";
import {
  Item,
  ItemTitle,
  Nav,
  TitleWrap,
  Title,
  Underline,
} from "./InformBlockStyled";

export const FooterInformBlock = () => {
  const { isMobileScreen } = useMedia();
  return (
    <div>
      <TitleWrap>
        <Title>Клієнтам</Title>
        {!isMobileScreen && <Underline />}
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
      </Nav>
    </div>
  );
};
