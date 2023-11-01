import styled from "styled-components";
import { ReactComponent as PhoneIcon } from "../../../images/newPhone.svg";
import { ReactComponent as EmailIcon } from "../../../images/newEmail.svg";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";

export const ContactsElips = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-right: 10px;
  }
`;

export const IconPhone = styled(PhoneIcon)`
  width: 19px;
  height: 19px;
  fill: ${(p) => p.theme.colors.textColor};
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    width: 28px;
    height: 28px;
  }
`;
export const IconEmail = styled(EmailIcon)`
  width: 28px;
  height: 28px;
  fill: ${(p) => p.theme.colors.textColor};
`;
export const InstagramIcon = styled(AiOutlineInstagram)`
  width: 28px;
  height: 28px;
  fill: ${(p) => p.theme.colors.textColor};
  margin-right: 10px;
`;
export const TelegramIcon = styled(RiTelegramLine)`
  width: 28px;
  height: 28px;
  fill: ${(p) => p.theme.colors.textColor};
  margin-right: 10px;
`;

export const Link = styled.a`
  display: flex;
  text-decoration: none;
  color: ${(p) => p.theme.colors.textColor};
  font-size: 11px;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 5px;
  }

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};

    & ${Link}, & ${ContactsElips} {
      color: ${(p) => p.theme.colors.accentColor};
    }

    & ${IconPhone} {
      fill: ${(p) => p.theme.colors.accentColor};
    }
    & ${IconEmail} {
      fill: ${(p) => p.theme.colors.accentColor};
    }
    & ${InstagramIcon} {
      fill: ${(p) => p.theme.colors.accentColor};
    }
    & ${TelegramIcon} {
      fill: ${(p) => p.theme.colors.accentColor};
    }
  }
`;
