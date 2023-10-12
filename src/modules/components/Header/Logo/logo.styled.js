import styled from "styled-components";

export const LogoImg = styled.img`
  width: 235px;
  transition: width 0.5s ease; /* Додали перехід для властивості width */
  &:hover{
    z-index: 9;
    width: 280px;
  }
`
export const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
`;
