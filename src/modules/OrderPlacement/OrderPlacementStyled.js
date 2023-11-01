import styled from "styled-components";

export const CostumerStatus = styled.div`
    display: flex;
`

export const OrderForm = styled.div`
display: flex;
`

export const OrderDetails = styled.div`
width: 100%;
`

export const CostumerStatusItem = styled.label`  
    padding: 5px;
`

export const Form = styled.form`
    display: flex;
`

export const DeliveryInfoBlock = styled.div`
 display: flex;
    flex-direction: column;
    margin-right: 80px;
    min-width: 510px;
 `


export const CostumerStatusinput = styled.input`
  border-radius: 50px;
  border: 1px solid black;
  padding: 5px 10px;
  background: transparent;
  margin: 10px 0px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const Citylist = styled.div`
  top: 100%;
  left: 0;
  right: 0;
 z-index: 2;
  position: absolute;
`;

export const CityItem = styled.span`
  cursor: pointer;

  &:hover {
    background: ${(p) => p.theme.colors.textColor};
    color: white;
  }
`;

export const CityitemsBlock = styled.ul`
  border: 1px solid ${(p) => p.theme.colors.textColor};
  border-radius: 12px;
  padding: 14px;
  position: relative;
  background: #FFF6E9;
  overflow-y: auto;
  
  max-height: 256px;
  scrollbar-width: thin; /* Товщина смуги прокрутки */
  scrollbar-color: ${(p) => p.theme.colors.textColor} transparent; /* Колір смуги прокрутки */
  
  /* Стилізація смуги прокрутки для WebKit (Chrome, Safari) */
  &::-webkit-scrollbar {
    padding: 10px;
    width: 8px; /* Товщина смуги прокрутки */
  }
  &::-webkit-scrollbar-thumb {
    padding: 10px;
    background-color: ${(p) => p.theme.colors.textColor}; /* Колір смуги прокрутки */
    border-radius: 8px; /* Круглий вигляд смуги прокрутки */
  }
  &::-webkit-scrollbar-track {
    background-color: transparent; /* Колір фону смуги прокрутки */
  }

`;

export const Select = styled.select`
border-radius: 50px; 
height: 41px;
 `

export const Textarea = styled.textarea`
  border-radius: 50px;
  resize: none;
  background: transparent;
  width: 100%;
  height: 41px; /* Початкова висота 100px */
  padding: 14px 20px;
  overflow-y: hidden;

  &:not(:focus)::after {
    content: "${(props) => props.value || ' '}";
    visibility: hidden;
    white-space: pre-wrap;
  }

  &:focus {
    height: auto; /* Змінюємо висоту на "auto" при фокусі */
  }
`;

export const Titles = styled.h3`
    display: flex;
    white-space: nowrap;
 margin-bottom: 12px;
 margin-top: 12px;
 width: 26px;
 font-weight:bold;
`
export const Title = styled.h2`
    display: flex;
    justify-content: center;
    
    border-bottom: 1px solid #C7C7C7;
    margin: 0px 180px 18px 180px;
    white-space: nowrap;
     font-weight:bold;
`

export const OrdersThumb = styled.div`
    border: 1px solid ${(p) => p.theme.colors.textColor};
    border-radius: 50px;
    padding: 14px;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #FFF6E9; 
        opacity: 0.5; 
        pointer-events: none;
        z-index: -1; 
        
    border-radius: 50px;
    }
`

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
  background: #FFF6E9;
  padding: 8px;  
 border-top: 1px solid ${(p) => p.theme.colors.textColor};
    border-bottom: 1px solid ${(p) => p.theme.colors.textColor};
 border-collapse: collapse;
`;
export const FirstOrdersHeaderItem = styled.p`

     border-bottom-left-radius: 20px;
border-top-left-radius: 20px;
    border-top: 1px solid ${(p) => p.theme.colors.textColor};
    border-bottom: 1px solid ${(p) => p.theme.colors.textColor};
    border-left: 1px solid ${(p) => p.theme.colors.textColor};
    padding: 8px;
    background: #FFF6E9;
     border-collapse: collapse;
     color: #FFF6E9;
`
export const LastOrdersHeaderItem = styled.p`

    border-right: 1px solid ${(p) => p.theme.colors.textColor};
    border-top: 1px solid ${(p) => p.theme.colors.textColor};
    border-bottom: 1px solid ${(p) => p.theme.colors.textColor};
        border-bottom-right-radius: 20px;
     border-top-right-radius: 20px;
     padding: 8px;
background: #FFF6E9;
 overflow: hidden;
 border-collapse: collapse;
     
`
export const HeaderBlock = styled.th`
  /* border-top: 1px solid ${(p) => p.theme.colors.textColor};
    border-bottom: 1px solid ${(p) => p.theme.colors.textColor}; */
background: #FFF6E9;
`


export const OrdersItem = styled.td`
    color: black;
    text-decoration: none;
    font-size: 18px;
    text-align: center;
    min-width: 90px;
  
`



export const OrdersImage = styled.img`
    width: 80px;
    padding: 0px;

    margin: 6px;
    border: 1px solid ${(p) => p.theme.colors.textColor};
`
export const OrdersItemBlock = styled.tr`
    display: flex;
    justify-content: space-between;
     border-bottom: 1px solid #c7c7c7;
    `
    
export const OrdersItemlist = styled.tr`
     border-bottom: 1px solid #c7c7c7;
    `

export const Description = styled.p`
   display: flex;
    justify-content: flex-end;
    `

export const SubmitButton = styled.button`
    background: transparent;
    border: 3px solid ${(p) => p.theme.colors.textColor};
    border-radius: 50px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    text-decoration: none;
    font-size: 18px;
    padding: 7px 30px;
    transition: all 250ms ease-in-out;
    color: ${(p) => p.theme.colors.textColor};
    margin-left: auto;
    margin-right: 15px;
    margin-top: 30px;
    &:hover{
        color: white;
    background: ${(p) => p.theme.colors.textColor};
    }
    `
    export const Text = styled.p`
overflow: hidden;
    text-overflow: ellipsis;
    height: 2.4em;
    max-width: 480px;
    `






