import styled from "styled-components";
import { Link } from "react-router-dom";

export const ItemStyle = styled.li`
  /* vertical-align: top; */
  width: 350px;
  /* width: 25%; */
  &.unavailable {
    /* filter: blur(2px); Додавання блюру */

    opacity: 0.5; /* Зменшення прозорості, щоб позначити відсутність товару */
    /* pointer-events: none; Вимкнення можливості кліку на відсутній товар */
  }
`;

export const ProductTags = styled.div`
  display: grid;
  justify-content: space-between;
  position: absolute;
  bottom: 3px;
`;
export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: transform 0.2s;
  position: relative;
  height: 100%;
  border-radius: 0;
  /* margin: 6px; */
  border: 1px solid ${(p) => p.theme.colors.borderCard};
  /* height: calc(100% - calc(12px + 1 * 2px)); */
  background: ${(p) => p.theme.colors.white};
  &:hover {
    transform: translateY(-4px);
    background-color: ${(p) => p.theme.colors.white};
    border: 1px solid ${(p) => p.theme.colors.menuBg};
    box-shadow: 0 7px 15px rgba(59, 55, 43, 0.25);

    .buy-button {
      visibility: visible;
    }
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  /* display: inline-block; */
  max-width: 240px;
  max-height: 240px;
  margin-top: 5px;
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  height: auto;
  width: auto;
  font-size: ${(p) => p.theme.fontSizes.s}px;
`;

export const Content = styled.div`
  padding: 20px 24px;
`;

export const Name = styled.h2`
  background-color: transparent;
  margin: 0 0 6px;
  padding-bottom: 2px;
  font-size: ${(p) => p.theme.fontSizes.sm}px;
  line-height: 1.2;
  font-weight: ${(p) => p.theme.fontWeights.body};
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4em;
`;

export const Price = styled.p`
  align-self: center;
  color: ${(p) => p.theme.colors.textColor};
  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.textColor};
  line-height: 1.2;
  text-align: center;
  display: flex;
  align-items: center;
  margin-top: 9px;
  justify-content: center;
  /*  */
`;

export const ButtonWrap = styled.div`
  position: absolute;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
export const ButtonIncDec = styled.button`
  flex: 1 0 auto;
  height: 100%;
  position: relative;
  display: inline-block;
  vertical-align: top;

  cursor: pointer;
  color: ${(p) => p.theme.colors.textColor};
  border: 0;
  padding: 0;
  background: none;
  font-size: ${(p) => p.theme.fontSizes.m}px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const CounterBlock = styled.div`
  position: relative;
  /* bottom: 0; */
  width: 103px;
  height: 38px;
  display: flex;
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.colors.textColor};

  align-items: center;
  font-size: ${(p) => p.theme.fontSizes.s}px;
  margin-bottom: 10px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const InputIncDec = styled.input`
  text-align: center;

  outline: none;

  color: ${(p) => p.theme.colors.textColor};
  border: 0;
  padding: 0;
  background-color: none;
  font-size: ${(p) => p.theme.fontSizes.xs}px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  &[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
