import styled from "styled-components";

import { BsFillTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const ModalBackground = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Півпрозорий чорний фон */
  display: flex;
  justify-content: center; /* Центруємо горизонтально */
  align-items: center; /* Центруємо вертикально */
  z-index: 3;
`;

export const OpenModal = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  & svg {
    &:hover,
    &:focus {
      color: ${(p) => p.theme.colors.accentColor};
    }
  }
`;

export const ModalShopingList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 900px;
  max-width: 100vw;
  max-height: 100vh;
  background-color: white;
  padding: 30px;
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.75);

  @media screen and (min-width: 768px) {
    justify-content: start;
    max-width: 80vw;
    max-height: 70vh;
  }
`;

export const ModalTitle = styled.h2`
  margin: -6px 0 12px -2px;
  font-size: ${(p) => p.theme.fontSizes.s}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xl}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.authxl}px;
  }
`;

export const TableWrap = styled.div`
  overflow-y: auto;
  max-height: 800px;
  scrollbar-width: thin; /* Товщина смуги прокрутки */
  scrollbar-color: ${(p) => p.theme.colors.textColor} transparent; /* Колір смуги прокрутки */

  /* Стилізація смуги прокрутки для WebKit (Chrome, Safari) */
  &::-webkit-scrollbar {
    padding: 10px;
    width: 8px; /* Товщина смуги прокрутки */
  }
  &::-webkit-scrollbar-thumb {
    padding: 10px;
    background-color: ${(p) =>
      p.theme.colors.textColor}; /* Колір смуги прокрутки */
    border-radius: 8px; /* Круглий вигляд смуги прокрутки */
  }
  &::-webkit-scrollbar-track {
    background-color: transparent; /* Колір фону смуги прокрутки */
  }
`;

export const HeaderContent = styled.th`
  padding-bottom: 8px;
  color: ${(p) => p.theme.colors.cartColor};
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xs}px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
`;

export const GoodsBlock = styled.tbody`
  padding-bottom: 8px;
  /* color: ${(p) => p.theme.colors.cartColor};
  font-size: ${(p) => p.theme.fontSizes.xxs}px; */
`;
export const DeleteBtn = styled.button`
  top: 50%;
  border: none;
  background: transparent;
  @media screen and (min-width: 1440px) {
    top: 50%;
    border: none;
    background: transparent;
  }
`;
export const DeleteIcon = styled(BsFillTrash3Fill)`
  width: 10px;
  height: 10px;
  color: #80808061;
  cursor: pointer;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
    width: 15px;
    height: 15px;
  }
`;
export const Thumb = styled.tr`
  position: relative;
  &:hover {
    background-color: #f0f0f0;
    color: #333;
    ${DeleteIcon} {
      fill: ${(p) => p.theme.colors.accentColor};
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;

    cursor: pointer;
    background-image: url("data:image/svg+xml;utf8,<BsFillTrash3Fill/>");
    background-repeat: no-repeat;
    background-size: cover;
    transition: color 0.3s ease-in-out;
  }
`;

export const ImageBlock = styled.td`
  border-bottom: 1px solid #f5f2ea;
  border-top: 1px solid #f5f2ea;
  border-left: 1px solid #f5f2ea;
  width: 106px;
`;
export const DescriptionBlock = styled.td`
  color: #898989;
  font-size: ${(p) => p.theme.fontSizes.xxxs}px;
  border-bottom: 1px solid #f5f2ea;
  border-top: 1px solid #f5f2ea;
  width: 392px;
  @media screen and (min-width: 1440px) {
    width: 392px;
    height: 113px;
  }
`;

export const ItemNameLink = styled(Link)`
  color: ${(p) => p.theme.colors.black};
  text-decoration: none;
  font-size: ${(p) => p.theme.fontSizes.xxxs}px;
  line-height: 0.9;

  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: ${(p) => p.theme.fontSizes.xxs}px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: ${(p) => p.theme.fontSizes.xs}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
  }
`;
export const AmountBlock = styled.td`
  color: ${(p) => p.theme.colors.cartColor};

  border-bottom: 1px solid #f5f2ea;
  border-top: 1px solid #f5f2ea;
  width: 100px;
`;

export const PriceBlock = styled.td`
  color: ${(p) => p.theme.colors.cartColor};
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  border-bottom: 1px solid #f5f2ea;
  border-top: 1px solid #f5f2ea;
  border-right: 1px solid #f5f2ea;
  width: 130px;
  text-align: center;

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
`;

export const DecIncBtn = styled.button`
  flex: 1 0 auto;
  height: 100%;
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  color: ${(p) => p.theme.colors.accentColor};
  border: 0;
  padding: 0;
  background: none;
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  &:hover {
    color: ${(p) => p.theme.colors.black};
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
`;

export const CounterBlock = styled.div`
  width: 50px;
  height: 22px;
  display: flex;
  border-radius: 4px;
  border: 1px solid #acacac;
  position: relative;
  align-items: center;
  font-size: ${(p) => p.theme.fontSizes.xs + 1}px;

  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }
  @media screen and (min-width: 1024px) {
    width: 60px;
    height: 30px;
    font-size: ${(p) => p.theme.fontSizes.s}px;
  }
  @media screen and (min-width: 1440px) {
    width: 92px;
    height: 38px;

    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
`;

export const ButtonContainer = styled.div`
  display: inline-block;
  @media screen and (min-width: 1440px) {
    padding-bottom: 30px;
  }
`;

export const Amount = styled.p`
  text-align: end;
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  margin: 10px;
  font-weight: ${(p) => p.theme.fontWeights.subtitle};

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: ${(p) => p.theme.fontSizes.l + 2}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.xl}px;
  }
`;
export const TextNoProduckts = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xs}px;

  @media screen and (min-width: 1440px) {
    margin: 30px;
    color: ${(p) => p.theme.colors.textColor};

    font-size: ${(p) => p.theme.fontSizes.authxl + 2}px;
    text-align: center;
  }
`;
export const ReturnBTN = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(p) => p.theme.colors.textColor};
  border: none;
  padding: 0;
  background: none;
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  margin-right: 10px;

  &:hover {
    color: ${(p) => p.theme.colors.accentColor};

    & svg {
      color: ${(p) => p.theme.colors.accentColor};
    }
  }

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xs}px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
  @media screen and (min-width: 1440px) {
    width: 258px;
    height: 36px;
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
`;

export const ReturnIcon = styled(FaArrowLeft)`
  width: 10px;
  height: 10px;
  color: ${(p) => p.theme.colors.textColor};
  margin-right: 5px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
  @media screen and (min-width: 1024px) {
    width: 14px;
    height: 14px;
  }
  @media screen and (min-width: 1440px) {
    width: 16px;
    height: 16px;
  }
`;
export const ButtonThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column-reverse;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AboutResetBasketText = styled.p`
  /* text-align: end; */
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  margin: 10px;
  font-weight: ${(p) => p.theme.fontWeights.subtitle};
`;

export const RedStar = styled.span`
  /* text-align: end; */
  color: red;
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  margin: 10px;
  font-weight: ${(p) => p.theme.fontWeights.subtitle};
`;
