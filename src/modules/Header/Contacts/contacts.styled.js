import styled from "styled-components";
import { ReactComponent as PhoneIcon } from "../../../images/newPhone.svg";

export const ContactsElips = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const ContactsIcon = styled(PhoneIcon)`
  width: 28px;
  height: 28px;
  fill: ${(p) => p.theme.colors.color504056};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.colors.color504056};
  font-size: 20px;
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};

    & ${Link}, & ${ContactsElips} {
      color: ${(p) => p.theme.colors.accentColor};
    }

    & ${ContactsIcon} {
      fill: ${(p) => p.theme.colors.accentColor};
    }
  }
`;