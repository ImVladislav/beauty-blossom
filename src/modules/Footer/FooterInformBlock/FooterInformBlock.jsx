
import { useSelector } from "react-redux";
import { useMedia } from "../../../hooks/useMedia";
import {
  Item,
  ItemTitle,
  Nav,
  TitleWrap,
  Title,
  Underline,
} from "./InformBlockStyled";
import { loggedInSelector } from "../../../redux/auth/selectors";

export const FooterInformBlock = () => {
  const { isMobileScreen } = useMedia();
  const isLogin = useSelector(loggedInSelector)


 
  return (
    <div>
      <TitleWrap>
        <Title>Клієнтам</Title>
        {!isMobileScreen && <Underline />}
      </TitleWrap>
      <Nav>
        {isLogin &&
          <Item to="/cabinet">Особистий кабінет</Item>
        }
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
