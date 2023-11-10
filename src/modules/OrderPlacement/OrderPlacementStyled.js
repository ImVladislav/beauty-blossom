import styled from 'styled-components';
import { Link } from "react-router-dom";

export const CostumerStatus = styled.div`
    display: flex;
    justify-content: space-evenly;

        @media (max-width: 767px) {
      display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
`

export const OrderForm = styled.div`
display: flex;
padding: 0 20px;

`

export const OrderDetails = styled.div`
width: 100%;
`

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
`

export const Form = styled.form`
    display: flex;


@media (max-width: 768px) {
  display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
}


`

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
  @media (max-width: 1440px) {
    font-size: 14px;
}
@media (min-width: 1024px) and (max-width: 1439px) {
  font-size: 12px;
}
@media (min-width: 768px) and (max-width: 1023px) {
  font-size: 12px;
}

.custom-toast{
  font-size: 20px; /* Ваш розмір шрифту */
  background-color: #ff0000;
  color: #ffffff; /* Ваш колір тексту */
  /* Додайте інші стилі за потреби */
}
 /* #ff0000;  */
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
`

export const Textarea = styled.textarea`
  border-radius: 50px;
  resize: none;
  background: transparent;
  width: 100%;
  height: 41px; /* Початкова висота 100px */
  padding: 14px 20px;
  overflow-y: hidden;
  margin-bottom: 20px;
  &:not(:focus)::after {
    content: "${(props) => props.value || ' '}";
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
 font-weight:bold;
 font-size: 22px;
 @media (min-width: 1024px) and (max-width: 1439px) {
  font-size: 20px;

}

     @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
}
`
export const Title = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 32px;
    border-bottom: 1px solid #C7C7C7;
    margin: 20px 320px 20px 320px;
    white-space: nowrap;
     font-weight:bold;

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
`

export const OrdersThumb = styled.div`
    border: 1px solid ${(p) => p.theme.colors.textColor};
    border-radius: 50px;
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
        background: #FFF6E9; 
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
           @media  (max-width: 767px) {

 margin-left: 0px;
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
    font-size: 10px;

}
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
    font-size: 10px;

}
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
    font-size: 10px;

}
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
    /* min-width: 90px; */
  
`

export const ItemNameItem = styled.td`
    color: black;
    text-decoration: none;
    font-size: 18px;
    text-align: center;
   @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 300px;
  }

  @media (min-width: 1220px) and (max-width: 1439px) {
     max-width: 100%
  }

    @media (min-width: 1024px) and (max-width: 1219px) {
     max-width: 400px
  }

       @media (max-width: 767px) {
    max-width: 250px;

}
`

export const OrdersImage = styled.img`
  width: 80px;
  padding: 0px;
  margin: 6px;
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
    `

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

    `
export const LoaderThumb = styled.li`
width: 60px;
height: 60px;
position: relative;

    margin-left: auto;
    margin-right: auto;

`


export const LinkThumb = styled.div`
 display: flex;
 justify-content: space-around;
 margin: 24px 0;
`
export const LinkButton = styled(Link)`
  cursor: pointer;
  background: #FFF0DA;
  color: ${(p) => p.theme.colors.textColor};
  border-radius: 46px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  text-decoration: none;
  padding: 6px 40px;
  margin-top: 20px;
  &:hover {
    background: #FFE9C9;
  }
`;

export const ModalText = styled.p`
color: ${(p) => p.theme.colors.textColor};
  color: ${(p) => p.theme.colors.textColor};
font-size: 20px;
display: flex;
justify-content: center;
`

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
`

