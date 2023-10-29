import styled from "styled-components";

export const OrderSummary = styled.div`

`

export const CustomerDetails = styled.div`

`

export const CostumerStatus = styled.div`
    display: flex;
    /* flex-direction: column; */
`

export const OrderForm = styled.div`
display: flex;
`
export const OrderDetails = styled.div`

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

 `
 export const CostumerStatusinput = styled.input`
       border-radius: 50px;
       border: 1px solid black;
       padding: 5px 10px;
       background: transparent;
       margin: 10px 0px ;
`

export const Select = styled.select`
border-radius: 50px; 

 `

export const Textarea = styled.textarea`
  border-radius: 50px;
  resize: none;
  background: transparent;
  width: 100%;
  height: 40px; /* Початкова висота 100px */

  &:not(:focus)::after {
    content: "${(props) => props.value || ' '}";
    visibility: hidden;
    white-space: pre-wrap;
  }

  &:focus {
    height: auto; /* Змінюємо висоту на "auto" при фокусі */
  }
`;