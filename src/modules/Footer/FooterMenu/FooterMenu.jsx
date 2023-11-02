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
  const { isDesktopScreen } = useMedia();

  const element = menuItems.map(({ to, text }) => (
    <ListItem key={to}>
      <LinkItem to={to}>{text}</LinkItem>
    </ListItem>
  ));
  return (
    <div>
      <TitleWrap>
        <Title>Iнформація</Title>
        {isDesktopScreen && <Underline />}
      </TitleWrap>
      <Wrap>
        <List>{element}</List>
      </Wrap>
    </div>
  );
};
