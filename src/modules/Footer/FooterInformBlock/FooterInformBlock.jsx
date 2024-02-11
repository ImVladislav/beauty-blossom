import { useSelector } from "react-redux";

import {
  LinkStyled,
  LinkStyledSecond,
  List,
  Item,
  TitleWrap,
  Title,
  Wrap,
} from "./InformBlockStyled";
import { loggedInSelector } from "../../../redux/auth/selectors";

export const FooterInformBlock = () => {
  const isLogin = useSelector(loggedInSelector);

  return (
    <Wrap>
      <TitleWrap>
        <Title>Клієнтам</Title>
      </TitleWrap>
      <List>
        {isLogin && (
          <Item>
            <LinkStyled to="/cabinet">Особистий кабінет</LinkStyled>
          </Item>
        )}
        <Item>
          <LinkStyledSecond href="/wholesaleProgram#return">
            Повернення та обмін
          </LinkStyledSecond>
        </Item>
        <Item>
          <LinkStyledSecond href="/wholesaleProgram#payment">
            Оплата і доставка
          </LinkStyledSecond>
        </Item>
        <Item>
          <LinkStyledSecond href="/wholesaleProgram#about">
            Про нас
          </LinkStyledSecond>
        </Item>
        <Item>
          <LinkStyledSecond href="feedback">Залишити відгук</LinkStyledSecond>
        </Item>
      </List>
    </Wrap>
  );
};
