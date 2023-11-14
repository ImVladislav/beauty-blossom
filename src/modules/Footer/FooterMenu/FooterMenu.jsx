import React from "react";
import {
  LinkItem,
  List,
  ListItem,
  Title,
  Underline,
  TitleWrap,
  Wrap,
} from "./FooterMenuStyled";
import { useMedia } from "../../../hooks/useMedia";

export const FooterMenu = ({ menuItems }) => {
  const { isMobileScreen } = useMedia();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Додає плавність прокрутки
    });
  };

  const element = menuItems.map(({ to, text }) => (
    <ListItem key={to}>
      <LinkItem onClick={scrollToTop} to={to}>{text}</LinkItem>
    </ListItem>
  ));
  return (
    <div>
      <TitleWrap>
        <Title>Iнформація</Title>
        {!isMobileScreen && <Underline />}
      </TitleWrap>
      <Wrap>
        <List>{element}</List>
      </Wrap>
    </div>
  );
};
