import styled from "styled-components";

export const AboutUsContainer = styled.div`
  max-width: 1440px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  font-size: 33px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin-bottom: 30px;
  color: ${(p) => p.theme.colors.accentColor};
  display: flex;
  justify-content: center;
  text-decoration: underline;
  font-size: ${(p) => p.theme.fontSizes.xl}px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  text-align: center;
`;

export const SubTitle = styled.h4`
  margin-bottom: 15px;
  color: ${(p) => p.theme.colors.black};
  display: flex;
  justify-content: center;
  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.title};
  /* font-size: 80%; */
  text-align: center;
`;
export const Text = styled.p`
  font-size: ${(p) => p.theme.fontSizes.sm}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  color: ${(p) => p.theme.colors.black};
  /* font-size: 70%; */
  margin: 0px 20px 10px;
`;
export const TextSecond = styled.p`
  font-size: ${(p) => p.theme.fontSizes.sm}px;
  font-weight: ${(p) => p.theme.fontWeights.title};
  color: ${(p) => p.theme.colors.black};
  /* font-size: 70%; */
  margin: 0px 20px 10px;
`;
export const BenefitsList = styled.ul`
  padding-left: 60px;
  margin: 30px 0;

  list-style: outside;
`;
export const BenefitsItem = styled.li`
  font-size: ${(p) => p.theme.fontSizes.sm}px;
  color: ${(p) => p.theme.colors.black};
  /* position: relative;
  padding-left: 30px;
  margin: 2px 0px;
  font-weight: bold; */
  /* font-size: 70%; */
`;
export const TextItem = styled.p`
  font-size: ${(p) => p.theme.fontSizes.sm}px;
  font-weight: ${(p) => p.theme.fontWeights.title};
  color: ${(p) => p.theme.colors.black};
  /* font-size: 70%; */
  /* margin: 0px 20px 10px; */
`;

// export const Text= styled.p`
//     font-weight: bold;
//     margin: 0px 20px 10px;

// `
export const TextLink = styled.p`
  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.title};
  /* font-size: 70%; */
  color: ${(p) => p.theme.colors.accentColor};
  margin: 0px 20px 10px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.colors.accentColor};
  &:hover {
    color: ${(p) => p.theme.colors.textColor};
  }
`;
