import styled from "styled-components";
import { ReactComponent as EmailIcon } from "../../../images/newEmail.svg";

export const ContactsElips = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const ContactsIcon = styled(EmailIcon)`
  width: 24px;
  height: 24px;
  fill: ${(p) => p.theme.colors.textColor};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.colors.textColor};
  font-size: ${(p) => p.theme.fontSizes.l}px;
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
