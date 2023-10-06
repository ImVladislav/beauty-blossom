import styled from "styled-components";

export const AboutUsContainer = styled.div`
 max-width: 1440px;
padding: 20px;
 margin-left: auto;
 margin-right: auto;
`

export const Title = styled.h3`
 margin-bottom: 15px;
 color: #FF49AB;
 margin-left: 20px;


`
export const Text= styled.p`
    font-weight: bold;
    margin: 0px 20px 10px;
    
`
export const BenefitsList= styled.ul`

  padding-left: 20px;
margin-bottom: 20px;
margin-top: 10px;
    
`
export const BenefitsItem= styled.li`
    position: relative;
  padding-left: 30px;
  margin: 5px 0px;
  &::before{
      content: '●'; /* Додаємо символ кружка */
  position: absolute;
  left: 0;
  color: #FF49AB; /* Колір рожевого кружка */
  }
    
`
// export const Text= styled.p`
//     font-weight: bold;
//     margin: 0px 20px 10px;
    
// `

