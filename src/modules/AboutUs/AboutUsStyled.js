import styled from "styled-components";

export const AboutUsContainer = styled.div`
 max-width: 1440px;
padding: 20px;
 margin-left: auto;
 margin-right: auto;
 font-size: 33px;
`

export const Title = styled.h3`
 margin-bottom: 15px;
 color: ${(p) => p.theme.colors.accentColor};
    display: flex;
    justify-content: center;
    text-decoration: underline;
 font-size: 100%;

`

export const SubTitle = styled.h4`
  margin-bottom: 15px;
  color: ${(p) => p.theme.colors.textColor};
  display: flex;
  justify-content: center;

  font-size: 80%;
  text-align: center;
`;
export const Text= styled.p`
    font-size: 70%;
    margin: 0px 20px 10px;
    
`
export const BenefitsList= styled.ul`
padding-left: 20px;
margin-bottom: 50px;
margin-top: 40px;
    
`
export const BenefitsItem= styled.li`
    position: relative;
  padding-left: 30px;
  margin: 2px 0px;
   font-weight: bold;
 font-size: 70%;
    list-style: inside;
    
`
// export const Text= styled.p`
//     font-weight: bold;
//     margin: 0px 20px 10px;
    
// `

