import styled from "styled-components";
import { Link } from "react-router-dom";

export const CostumerStatus = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 40px 0;
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const OrderForm = styled.div`
  display: flex;
  padding: 0 20px;
`;

export const OrderDetails = styled.div`
  width: 100%;
`;

export const CostumerStatusItem = styled.label`
  padding: 5px;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 14px;
  }
`;

export const Form = styled.form`
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
  }
`;

export const DeliveryInfoBlock = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 400px;
  @media (min-width: 1024px) and (max-width: 1439px) {
    min-width: 300px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    min-width: 250px;
  }
  @media (max-width: 768px) {
    min-width: 200px;
  }
`;

export const CostumerStatusinput = styled.input`
  border: 1.91px solid #9a9a9a;
  border-radius: 3px;
  width: 290px;
  height: 30px;
  padding: 5px 10px;
  background: transparent;
  margin: 10px 0px;
  width: 100%;

  &:focus {
    outline: none;
  }
  @media (max-width: 1440px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`;

export const Citylist = styled.div`
  top: 100%;
  left: 0;
  right: 0;
  z-index: 2;
  position: absolute;
`;
export const LIstItem = styled.li`
  padding: 2px;
  &:hover {
    background: ${(p) => p.theme.colors.textColor};
    color: white;
  }
`;
export const CityItem = styled.span`
  cursor: pointer;

  &:hover {
    color: white;
  }
  @media (min-width: 1440px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`;

export const CityitemsBlock = styled.ul`
  border: 1px solid ${(p) => p.theme.colors.textColor};
  border-radius: 12px;
  padding: 8px;
  position: relative;
  background: white;
  overflow-y: auto;

  max-height: 256px;
  scrollbar-width: thin; /* Товщина смуги прокрутки */
  scrollbar-color: ${(p) => p.theme.colors.textColor} transparent; /* Колір смуги прокрутки */

  &::-webkit-scrollbar {
    padding: 10px;
    width: 8px;
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

export const Select = styled.select`
  border: 1.91px solid #9a9a9a;
  border-radius: 3px;
  /* width: 290px;
  height: 30px; */

  width: 100%;
  padding: 5px 25px 5px 10px;
  font-size: 14px;
  margin: 10px 0px;
  @media (min-width: 1440px) {
    padding: 5px 25px 5px 10px;
    font-size: 14px;
    margin: 10px 0px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 12px;
    padding: 5px 25px 5px 10px;
    margin: 10px 0px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
    padding: 5px 25px 5px 10px;
    margin: 10px 0px;
  }
`;

export const Textarea = styled.textarea`
  border: 1.91px solid #9a9a9a;
  border-radius: 3px;
  resize: none;
  background: transparent;
  width: 100%;
  height: 51px;
  padding: 14px 20px;
  overflow-y: hidden;
  margin-bottom: 20px;
  &:not(:focus)::after {
    content: "${(props) => props.value || " "}";
    visibility: hidden;
    white-space: pre-wrap;
  }

  @media (min-width: 1440px) {
    padding: 5px 10px;
    font-size: 14px;
    height: 31px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`;

export const Titles = styled.h3`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  margin-bottom: 12px;
  margin-top: 12px;
  width: 100%;
  /* font-weight: bold; */
  /* font-size: 22px; */

  font-family: "Century Gothic", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.02312;
  text-transform: lowercase;
  text-align: center;
  color: #616161;

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 22px;
  }
`;
export const Title = styled.h2`
  display: flex;
  justify-content: center;
  /* font-size: 32px; */
  border-bottom: 1px solid #c7c7c7;
  margin: 20px 320px 20px 320px;
  white-space: nowrap;
  /* font-weight: bold; */

  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.02312;
  text-transform: uppercase;
  text-align: center;
  color: #616161;

  @media (min-width: 1240px) and (max-width: 1439px) {
    font-size: 28px;
    margin: 20px 400px 20px 400px;
  }

  @media (min-width: 1024px) and (max-width: 1239px) {
    font-size: 22px;
    margin: 16px 280px 16px 280px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 20px;
    margin: 16px 28px 16px 28px;
  }

  @media (max-width: 767px) {
    font-size: 20px;
    margin: 16px 5px 16px 5px;
  }
`;

export const DivInfoBlock = styled.div`
  display: flex;
  justify-content: center;
  border: 2.52px solid #13a03a;
  border-radius: 378px;
  padding: 8px 12px;
  flex-direction: column;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  background-color: #31aa53;
`;
export const InfoTextP = styled.p`
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.5;
  text-transform: uppercase;
  text-align: center;
  color: #fff;

  @media (min-width: 1024px) {
    /* margin-left: 20px; */
  }
`;
// export const InfoTextSpan = styled.span`
//   font-family: "Mulish", sans-serif;
//   font-weight: 700;
//   font-size: 10px;
//   line-height: 1.02312;
//   text-transform: uppercase;
//   text-align: center;
//   color: #fff;
//   @media (min-width: 1024px) {
//     /* margin-left: 20px; */
//   }
// `;

export const OrdersThumb = styled.div`
  border: 1px solid ${(p) => p.theme.colors.textColor};
  border-radius: 8px;
  padding: 14px;
  overflow-x: auto;
  position: relative;
  margin-left: 80px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    pointer-events: none;
    z-index: -1;

    border-radius: 50px;
  }

  @media (min-width: 1240px) and (max-width: 1439px) {
    margin-left: 80px;
  }

  @media (min-width: 1024px) and (max-width: 1239px) {
    margin-left: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 10px;
  }
  @media (max-width: 767px) {
    margin-left: 0px;
  }
`;

export const OrdersHeaders = styled.thead`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid ${(p) => p.theme.colors.textColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.textColor};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const OrdersHeaderItem = styled.p`
  padding: 8px;
  border-top: 1px solid ${(p) => p.theme.colors.textColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.textColor};
  border-collapse: collapse;
  @media (min-width: 1440px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    font-size: 8px;
  }
`;
export const FirstOrdersHeaderItem = styled.p`
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  border-top: 1px solid ${(p) => p.theme.colors.textColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.textColor};
  border-left: 1px solid ${(p) => p.theme.colors.textColor};
  padding: 8px;
  border-collapse: collapse;

  @media (min-width: 1440px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
  @media (max-width: 767px) {
    font-size: 8px;
  }
`;
export const LastOrdersHeaderItem = styled.p`
  border-right: 1px solid ${(p) => p.theme.colors.textColor};
  border-top: 1px solid ${(p) => p.theme.colors.textColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.textColor};
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  padding: 8px;
  overflow: hidden;
  border-collapse: collapse;
  @media (min-width: 1440px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    font-size: 8px;
  }
`;

export const HeaderBlock = styled.th`
  border-top: 1px solid ${(p) => p.theme.colors.textColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.textColor};
  background-color: #ffb4d8;
  padding: 8px;
  overflow: hidden;

  border-spacing: 2px;
  @media (min-width: 1440px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    font-size: 8px;
  }
`;
export const HeaderBlockLeft = styled.th`
  border-left: 1px solid ${(p) => p.theme.colors.textColor};
  border-top: 1px solid ${(p) => p.theme.colors.textColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.textColor};
  padding: 8px;
  overflow: hidden;
  border-spacing: 2px;
  background-color: #ffb4d8;
  @media (min-width: 1440px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    font-size: 8px;
  }
`;
export const HeaderBlocRight = styled.th`
  border-right: 1px solid ${(p) => p.theme.colors.textColor};
  border-top: 1px solid ${(p) => p.theme.colors.textColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.textColor};
  background-color: #ffb4d8;
  padding: 8px;
  overflow: hidden;
  border-spacing: 2px;
  @media (min-width: 1440px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    font-size: 8px;
  }
`;

export const OrdersItem = styled.td`
  border-bottom: 1px solid #c7c7c7;
  color: black;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  /* min-width: 90px; */
`;

export const ItemNameItem = styled.td`
  border-bottom: 1px solid #c7c7c7;
  color: black;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  line-height: 1;
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 300px;
  }

  @media (min-width: 1220px) and (max-width: 1439px) {
    max-width: 100%;
  }

  @media (min-width: 1024px) and (max-width: 1219px) {
    max-width: 400px;
  }

  @media (max-width: 767px) {
    max-width: 250px;
  }
`;

export const OrdersImage = styled.img`
  max-width: 80px;
  padding: 0px;
  margin: 6px 0;
  border: 1px solid ${(p) => p.theme.colors.textColor};

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 60px;
  }

  @media (min-width: 1439px) {
    width: 80px;
  }
`;

export const OrdersItemBlock = styled.tr`
  display: flex;
  justify-content: space-between;
`;

export const OrdersItemlist = styled.tr``;

export const Description = styled.p`
  display: flex;
  justify-content: flex-end;
  @media (min-width: 1440px) {
    font-size: 12px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 10px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 10px;
  }

  @media (max-width: 767px) {
    font-size: 10px;
  }
`;

export const SelectOpton = styled.option`
  @media (min-width: 1440px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`;

export const SubmitButton = styled.button`
  border: 1.91px solid #9a9a9a;
  border-radius: 3px;
  background: transparent;
  /* border: 3px solid ${(p) => p.theme.colors.textColor}; */
  /* border-radius: 50px; */
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  text-decoration: none;

  padding: 7px 30px;
  transition: all 250ms ease-in-out;
  color: ${(p) => p.theme.colors.textColor};
  margin: 30px auto 30px;

  @media (min-width: 1440px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 16px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
    border: 2px solid ${(p) => p.theme.colors.textColor};
    padding: 4px 12px;
  }

  &:hover {
    color: white;
    background: ${(p) => p.theme.colors.textColor};
  }
`;
export const Text = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4em;
  max-width: 480px;
  @media (min-width: 1440px) {
    font-size: 12px;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 16px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
    border: 2px solid ${(p) => p.theme.colors.textColor};
    padding: 4px 12px;
  }
`;
export const LoaderThumb = styled.li`
  width: 60px;
  height: 60px;
  position: relative;

  margin-left: auto;
  margin-right: auto;
`;

export const LinkThumb = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 24px 0;

  @media (min-width: 1240px) {
    width: 700px;
  }

  @media (min-width: 1024px) and (max-width: 1239px) {
    width: 500px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 500px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const LinkButton = styled(Link)`
  cursor: pointer;
  background: #fff0da;
  /* color: ${(p) => p.theme.colors.textColor}; */
  border-radius: 46px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  text-decoration: none;
  padding: 6px 20px;
  margin: 20px 5px 0px 5px;
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.02312;
  text-transform: lowercase;
  text-align: center;
  color: #ff96cf;
  background: #fff;
  &:hover {
    scale: 1.05;
    transition: 0.5s;
  }
  @media (min-width: 768px) {
    font-size: 18px;
    padding: 6px 14px;

    @media (min-width: 1240px) {
      /* padding: 6px 40px; */
      /* font-size: 12px; */
    }

    @media (min-width: 1024px) and (max-width: 1239px) {
      font-size: 14px;
      padding: 6px 30px;
    }
    /* 
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 16px;
      padding: 6px 20px;
    } */
  }
`;

export const ModalText = styled.p`
  color: ${(p) => p.theme.colors.textColor};
  color: ${(p) => p.theme.colors.textColor};
  font-size: 20px;
  display: flex;
  justify-content: center;

  @media (min-width: 1240px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) and (max-width: 1239px) {
    font-size: 16px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const TableThumb = styled.div`
  @media (min-width: 1240px) {
    width: 100%;
  }

  @media (min-width: 1024px) and (max-width: 1239px) {
    width: 685px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 500px;
  }
`;

export const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 370px;
  height: 370px;
  /* max-width: 800px; */
  /* max-height: 500px; */
  margin: auto;
  padding: 30px;
  border: 1px solid #504056;

  background: #ffa5d6;

  z-index: 6;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-size: 9px;
  line-height: 1.02312;
  text-transform: lowercase;
  text-align: center;
  color: #ff96cf;
  border-radius: 100%;
  stroke-width: 0.61px;
  stroke: #616161;

  @media (min-width: 540px) {
    width: 460px;
    height: 460px;
  }
  /* @media (min-width: 1240px) {
    width: 80%;
  }

  @media (min-width: 1024px) and (max-width: 1239px) {
    width: 50%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 70%;
  } */
`;
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 5; /* Ensure the backdrop is behind the modal but above other content */
  display: ${(props) => (props.$isOpen ? "block" : "none")};
`;

export const ItemAmount = styled.p`
  color: black;
  text-decoration: none;
  font-size: 11px;
  white-space: pre;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 10px;
    white-space: pre;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    white-space: pre;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 12px;
    white-space: pre;
  }
`;

export const Amount = styled.p`
  text-align: end;
  font-size: 12px;
  margin: 10px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
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
