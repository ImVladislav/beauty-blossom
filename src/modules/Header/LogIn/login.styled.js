import styled from "styled-components";
import { ReactComponent as userIcon } from "../../../images/newUser.svg";

export const Link = styled.a`
  padding: 3px;
`;

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

export const LogInIcon = styled(userIcon)`
  width: 28px;
  height: 28px;
  fill: ${(p) => p.theme.colors.color504056};
  &:hover {
    fill: ${(p) => p.theme.colors.accentColor};
  }
`;

export const DropDown = styled.div`
  position: absolute;
  top: 70%;
  right: 1%;
  display: block;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px;
  z-index: 1;

  ${LogInElips}:hover & {
    display: block;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ${LogInElips}:hover & ul {
    display: block;
  }
`;

export const ListItem = styled.li`
  a {
    display: block;
    color: #333;
    text-decoration: none;
    padding: 8px 0;

    &:hover {
      background-color: ${(p) => p.theme.colors.accentColor};
      color: #fff;
    }
  }
`;