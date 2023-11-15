
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
        <Item to="/cabinet">Особистий кабінет</Item>
        <ItemTitle href="/wholesaleProgram#return" >
          Повернення та обмін
        </ItemTitle>
        <ItemTitle href="/wholesaleProgram#payment" >
          Оплата і доставка
        </ItemTitle>
        <ItemTitle href="/wholesaleProgram#about" >
          Про нас
        </ItemTitle>
        <ItemTitle href="feedback">
          Залишити відгук
        </ItemTitle>
      </Nav>
    </div>
  );
};
