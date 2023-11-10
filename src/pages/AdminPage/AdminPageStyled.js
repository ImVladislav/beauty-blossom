import styled from 'styled-components';

export const AdminBlock = styled.div`
padding: 0 20px;

`

export const StyledTr = styled.tr`
    border: 1px solid black;
    font-size: 18px;

            @media (max-width: 767px) {
    font-size: 12px;
}
    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 14px;
    }
    @media (min-width: 1024px) and (max-width: 1439px) {
        font-size: 16px;
    }
    @media (min-width: 1440px) {
        
        font-size: 18px;
    }        
    &.yellow-row  {
      background-color: yellow; 
    }
        &.selected-order {
          background-color: #FFE9C9; 
        }
`
export const FilterInput  = styled.input`
   border-radius: 50px;
    margin: 10px;

            @media (max-width: 767px) {
    font-size: 12px;
}
      @media (min-width: 768px) and (max-width: 1023px) {
  font-size: 14px;
}
    @media (min-width: 1024px) and (max-width: 1439px) {
  font-size: 16px;
}
      @media (min-width: 1440px) {
   
    font-size: 18px;
  
}

`

export const Table  = styled.table`
  width: 100%;
  border: 1px solid black;
`

export const Th = styled.th`
  
  border: 1px solid black;

        @media (max-width: 767px) {
    font-size: 12px;
}
        @media (min-width: 768px) and (max-width: 1023px) {
  font-size: 14px;
}
    @media (min-width: 1024px) and (max-width: 1439px) {
  font-size: 16px;
}
      @media (min-width: 1440px) {
   
    font-size: 18px;
  
}

`
export const Td = styled.td`
  
  border: 1px solid black;
  cursor: pointer;


        @media (max-width: 767px) {
    font-size: 12px;
}
      @media (min-width: 768px) and (max-width: 1023px) {
  font-size: 14px;
}
    @media (min-width: 1024px) and (max-width: 1439px) {
  font-size: 16px;
}
      @media (min-width: 1440px) {
   
    font-size: 18px;
  
}
`
