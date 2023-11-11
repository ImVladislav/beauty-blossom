import { Link } from "react-router-dom"
import styled from "styled-components"

export const Nav = styled.nav`
    display: grid;
    padding: 0px 20px;
    margin-right: auto;
    margin-bottom: auto;
`

export const StyledLink = styled(Link)`

margin: 10px 0px;
`
export const CabinetLink = styled(Link)`
    border: 1px solid ${(p) => p.theme.colors.textColor};
    border-radius: 75px;
    padding: 0px 65px;
    text-decoration: none;
    height: 66px;
    color: ${(p) => p.theme.colors.textColor};
    text-align: center;
    white-space: nowrap; /* Замість 'text-wrap' */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    font-size: 20px;
    position: relative; /* Додайте 'position: relative' */
        overflow: hidden;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #FFF6E9; /* Колір фону, до якого буде застосована opacity */
        opacity: 0; /* Початкова прозорість 0, а не 0.4 */
        pointer-events: none;
        z-index: -1; /* Помістіть псевдоелемент позаду контенту */
    }

    &:hover {
        opacity: 1; /* Змінити прозорість фону при наведенні */
        color: ${(p) => p.theme.colors.black}; /* Змінити колір тексту при наведенні */
    }

    &:hover::before {
        opacity: 1; /* Змінити прозорість фону при наведенні */
    }


     @media (min-width: 1440px) {
        
 }

  @media (min-width: 1024px) and (max-width: 1439px) {
      
 }
 @media (min-width: 768px) and (max-width: 1023px) {
padding: 0px 20px;
 } 
 @media (max-width: 768px) {
  padding: 0px 30px;
 }
`;
export const UserPageBlock = styled.div`
display: flex;

     @media (min-width: 1440px) {
       width: 1400px ;
    padding: 0px 20px;
    margin-right: auto;
    margin-bottom: auto;
 }

  @media (min-width: 1024px) and (max-width: 1439px) {
      
 }
 @media (min-width: 768px) and (max-width: 1023px) {

 } 
 @media (max-width: 768px) {
      display: flex;
    flex-direction: column;
    align-items: center;
 }



`
export const Title = styled.h2`
display: flex;
justify-content: center;
border-bottom: 1px solid #C7C7C7;
margin: 40px 0px;

`
export const RedStar = styled.span`
color:red;
`

export const ContactInformInputBlock = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 15px;



 @media (max-width: 768px) {

    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    flex-direction: column;
    align-items: center;
}
`

export const ContactInformInput = styled.input`
border-radius: 50px;
padding: 4px 10px;
width: 480px;

 @media (min-width: 1440px) {
        width: 480px;
 }

  @media (min-width: 1024px) and (max-width: 1439px) {
        width: 380px;
 }
 @media (min-width: 768px) and (max-width: 1023px) {
  width: 280px;
 } 
 @media (max-width: 768px) {
    width: 350px;
 }

`

export const ContactInformForm = styled.form`
margin-left: 50px;
 @media (max-width: 768px) {
    margin-left: 0px;
 }
`

export const ContactInformSubButton = styled.button`
    border: 1px solid ${(p) => p.theme.colors.textColor};
    border-radius: 75px;
    padding: 0px 85px;
    text-decoration: none;
    height: 50px;
    color: ${(p) => p.theme.colors.textColor};
    text-align: center;
    white-space: nowrap; /* Замість 'text-wrap' */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    position: relative; /* Додайте 'position: relative' */
    background: transparent;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #FFF6E9; /* Колір фону, до якого буде застосована opacity */
        opacity: 0; /* Початкова прозорість 0, а не 0.4 */
        pointer-events: none;
        z-index: -1; /* Помістіть псевдоелемент позаду контенту */
    }

    &:hover {
        opacity: 1; /* Змінити прозорість фону при наведенні */
        color: ${(p) => p.theme.colors.black}; /* Змінити колір тексту при наведенні */
    }

    &:hover::before {
        opacity: 1; /* Змінити прозорість фону при наведенні */
    }

     @media (max-width: 768px) {
    margin-bottom: 50px;
 }


`;


export const PaymentHistoryTd = styled.td`
border: 1px solid #C7C7C7;
text-align: center;

 @media (min-width: 1440px) {
    font-size: 18px;  
 }

  @media (min-width: 1024px) and (max-width: 1439px) {
      font-size: 16px;
 }
 @media (min-width: 768px) and (max-width: 1023px) {
  font-size: 14px;
 } 
 @media (max-width: 768px) {
   font-size: 12px;
 }


`

export const PaymentHistoryTh = styled.th`
  border: 1px solid #C7C7C7;
  background-color: #FFF6E9 !important;
  text-align: center;
  white-space: nowrap;

  @media (min-width: 1440px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: 16px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const PaymentPagination = styled.div`
display: flex;
justify-content: end;

`

export const PaymentPaginationButton = styled.button`
border: 1px solid #C7C7C7;
    text-align: center;

    align-items: center;
    position: relative; /* Додайте 'position: relative' */
    background: transparent;



    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #FFF6E9; /* Колір фону, до якого буде застосована opacity */
        opacity: 1; /* Початкова прозорість 0, а не 0.4 */
        pointer-events: none;
        z-index: -1; /* Помістіть псевдоелемент позаду контенту */
    }

    &.current{
        font-weight: bold;
        background: #FFF6E9;
    }
`
export const CabinetContainer = styled.div`

 @media (min-width: 1440px) {
      /* width: 1400px; */
      /* padding: 0 20px;
      display: flex; */
 }

  @media (min-width: 1024px) and (max-width: 1439px) {
      
 }
 @media (min-width: 768px) and (max-width: 1023px) {
  
 } 
 @media (max-width: 768px) {
   
 }


`
export const CabinetBlock = styled.div`
padding: 0, 20px;
margin-right: auto;
`
export const DetailTableThumb = styled.div`


 @media (min-width: 1440px) {
      width: 905px;
 }

  @media (min-width: 1024px) and (max-width: 1439px) {
      width: 705px;
 }
 @media (min-width: 768px) and (max-width: 1023px) {
  
 } 
 @media (max-width: 768px) {
   
 }

`
export const Table = styled.table`
width: 100%;

 @media (min-width: 1440px) {
      
 }

  @media (min-width: 1024px) and (max-width: 1439px) {
      
 }
 @media (min-width: 768px) and (max-width: 1023px) {
  
 } 
 @media (max-width: 768px) {
   
 }

`

export const ShowDetailButton = styled.button`
width: 100%;
height: 100%;
background: transparent;
border: none;
`

export const PaymentHistoryTr = styled.tr`
  &.selected {
    background-color: #FFE9C9; 
  }
`;


export const FeedbackText = styled.p`
display: flex;
justify-content: center;
padding: 20px;
`


export const FeedbackTextArea = styled.textarea`
padding: 12px;
border-radius: 50px;
margin: 20px;
width: 90%;
resize: none;
`

export const FeedbackThumb =  styled.div`
display: flex;
justify-content: center;
flex-direction: column;

 @media (min-width: 1440px) {
      width: 905px;
 }

  @media (min-width: 1024px) and (max-width: 1439px) {
       width: 505px;
 }
 @media (min-width: 768px) and (max-width: 1023px) {
  width: 373px;
 } 
 @media (max-width: 768px) {
   
 }

`

export const SubmitFeedback = styled.button`

background: transparent;
border: 1px solid ${(p) => p.theme.colors.textColor};
border-radius: 75px;
padding: 0px 65px;
text-decoration: none;
height: 66px;
color: ${(p) => p.theme.colors.textColor};
text-align: center;
white-space: nowrap; /* Замість 'text-wrap' */
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10px;
font-size: 20px;
`