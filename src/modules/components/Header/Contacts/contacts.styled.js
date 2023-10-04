import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
    & a {
      color: ${(p) => p.theme.colors.accentColor};
    }
    & div {
      background: ${(p) => p.theme.colors.accentColor};
      border: 1px solid ${(p) => p.theme.colors.accentColor};
    }
  }
`;

export const ContactsElips = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #d2b9a6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background: #d2b9a6;
`;

export const ContactsIcon = styled(BsFillTelephoneFill)`
  width: 14px;
  height: 14px;
  color: #fff;
`;
export const Link = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 20px;
`;
