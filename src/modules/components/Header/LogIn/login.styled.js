import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";

export const Link = styled.a``;
export const LogInElips = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #d2b9a6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  &:hover,
  &:focus {
    border: 1px solid ${(p) => p.theme.colors.accentColor};
    & svg {
      color: ${(p) => p.theme.colors.accentColor};
    }
  }
`;

export const LogInIcon = styled(BsFillPersonFill)`
  width: 20px;
  height: 20px;
  color: #d2b9a6;
`;
