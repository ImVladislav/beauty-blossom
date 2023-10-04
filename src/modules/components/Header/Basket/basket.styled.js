import styled from "styled-components";
import { BsBasket3 } from "react-icons/bs";

export const Link = styled.a`
  & svg {
    &:hover,
    &:focus {
      color: ${(p) => p.theme.colors.accentColor};
    }
  }
`;
export const BasketIcon = styled(BsBasket3)`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  color: #d2b9a6;
`;
