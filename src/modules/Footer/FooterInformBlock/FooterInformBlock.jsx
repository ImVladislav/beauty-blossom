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
        <Item>
          <LinkStyledSecond href="/wholesaleProgram#return">
            Контактна інформація
          </LinkStyledSecond>
        </Item>
        {/* <Item>
          <LinkStyledSecond href="/wholesaleProgram#about">
          Про нас
          </LinkStyledSecond>
          </Item> */}
        {isLogin && (
          <ul>
            <Item>
              <LinkStyledSecond href="/cabinet/history">
                Історія замовлень
              </LinkStyledSecond>
            </Item>
            <Item>
              <LinkStyled to="/cabinet">Особистий кабінет</LinkStyled>
            </Item>
          </ul>
        )}
        <Item>
          <LinkStyledSecond href="feedback">Залишити відгук</LinkStyledSecond>
        </Item>
      </List>
    </Wrap>
  );
};
