import React from "react";
import {
  LinkStyled,
  List,
  Item,
  Title,
  Wrap,
  TitleWrap,
  ListWrap,
} from "./FooterMenuStyled";

export const FooterMenu = ({ menuItems }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const filteredMenuItems = menuItems.filter(
    (item) =>
      item.text !== "контакти" &&
      item.text !== "Новинки" &&
      item.text !== "Акції"
  );
  const element = filteredMenuItems.map(({ to, text }) => (
    <Item key={to}>
      <LinkStyled onClick={scrollToTop} to={to}>
        {text === ("контакти" && "") ? null : text}
      </LinkStyled>
    </Item>
  ));
  return (
    <Wrap>
      <TitleWrap>
        <Title>Iнформація</Title>
      </TitleWrap>
      <ListWrap>
        <List>{element}</List>
      </ListWrap>
    </Wrap>
  );
};
