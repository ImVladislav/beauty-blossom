import styled from "styled-components";

import { BsFillTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const DeleteIcon = styled(BsFillTrash3Fill)`
  width: 15px;
  height: 15px;
  color: #80808061;
  cursor: pointer;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }
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
  justify-content: center;
  max-width: 900px;

  /* width: 800px; */
  /* margin-left: auto;
  margin-right: auto; */
  /* top: 100px; */

  width: 80vw;
  max-height: 80vh;

  overflow-y: auto;

  background-color: white;

  padding: 30px;

  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.75);
`;

export const ModalBackground = styled.div`
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

export const ModalTitle = styled.h2`
  font-size: 32px;
  font-weight: normal;
  margin: -6px 0 12px -2px;
`;

export const HeaderContent = styled.th`
  padding-bottom: 8px;
  color: #898989;
  font-size: 11px;
`;

export const GoodsBlock = styled.tbody`
  padding-bottom: 8px;
  color: #898989;
  font-size: 11px;
`;

export const ImageBlock = styled.td`
  color: #898989;
  font-size: 11px;
  /* border: 1px solid red; */
  border-bottom: 1px solid #f5f2ea;
  border-top: 1px solid #f5f2ea;
  border-left: 1px solid #f5f2ea;
  width: 106px;
`;
export const DescriptionBlock = styled.td`
  color: #898989;
  font-size: 11px;
  border-bottom: 1px solid #f5f2ea;
  border-top: 1px solid #f5f2ea;
  width: 392px;
  height: 113px;
  /* &::after{
        content: '';
    height: 5px;
    display: block;
    } */
`;
export const AmountBlock = styled.td`
  color: #898989;

  border-bottom: 1px solid #f5f2ea;
  border-top: 1px solid #f5f2ea;
  width: 100px;
`;
export const PriceBlock = styled.td`
  color: #898989;
  font-size: 18px;
  border-bottom: 1px solid #f5f2ea;
  border-top: 1px solid #f5f2ea;
  border-right: 1px solid #f5f2ea;
  width: 130px;
  text-align: center;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  right: 730px;
  top: 45px;
  border: none;
  background: transparent;
`;

export const Thumb = styled.tr`
  position: relative;

  /* Стилі для Thumb при наведенні */
  &:hover {
    /* Додайте бажані стилі для Thumb при наведенні тут */
    /* Наприклад, змінюємо фон або кольори тексту */
    background-color: #f0f0f0;
    color: #333;

    /* Застосовуємо стилі до внутрішнього DeleteBtn */
    ${DeleteIcon} {
      fill: red; /* Змінюємо колір DeleteBtn на червоний */
    }
  }

  /* Стилі для псевдоелемента ::before */
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

export const ItemNameLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export const DecIncBtn = styled.button`
  flex: 1 0 auto;
  height: 100%;
  position: relative;
  display: inline-block;
  vertical-align: top;

  cursor: pointer;
  color: #000;
  border: 0;
  padding: 0;
  background: none;
  font-size: 20px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }
`;

export const CounterBlock = styled.div`
  border: 1px solid #f5f2ea;
  width: 92px;
  height: 38px;
  display: flex;
  border-radius: 4px;
  border: 1px solid #acacac;
  position: relative;
  align-items: center;
  font-size: 18px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  display: inline-block;
  padding-bottom: 30px;
`;

export const Amount = styled.p`
  text-align: end;
  font-size: 24px;
  margin: 10px;
`;
export const TextNoProduckts = styled.p`
  margin: 30px;
  color: ${(p) => p.theme.colors.textColor};

  font-size: 30px;
  text-align: center;
`;
export const ReturnBTN = styled.button`
  flex: 1 0 auto;
  height: 100%;
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  color: #000;
  border: none;
  padding: 0;
  background: none;
  font-size: 18px;
  width: 258px;
  height: 36px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }
`;
