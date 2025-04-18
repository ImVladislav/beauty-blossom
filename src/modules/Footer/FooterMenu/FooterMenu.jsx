import React from "react";
import {
  LinkStyled,
  List,
  Item,
  Title,
  Wrap,
  TitleWrap,
  ListWrap,
  CategoryLink,
} from "./FooterMenuStyled";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { href: "#category", text: "категорії" },
  { to: "/brands", text: "бренди" },
  { to: "/novynky", text: "новинки" },
  { to: "/aktsiji", text: "акції" },
  { to: "/kliientam", text: "клієнтам" },
];
export const FooterMenu = () => {
  const navigate = useNavigate();

  const handleAnchorScroll = (anchorId) => {
    const target = document.querySelector(anchorId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickCategory = () => {
    navigate("/");
    setTimeout(() => {
      handleAnchorScroll("#category");
    }, 700);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const element = menuItems.map((item) => (
    <Item key={item.text}>
      {item.href ? (
        <CategoryLink onClick={handleClickCategory} href={item.href}>
          {item.text}
        </CategoryLink>
      ) : (
        <LinkStyled onClick={scrollToTop} to={item.to}>
          {item.text}
        </LinkStyled>
      )}
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
