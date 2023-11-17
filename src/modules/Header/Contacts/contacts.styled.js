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
  .burger {
    padding: 0;
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-right: 10px;
  }
`;

export const IconPhone = styled(PhoneIcon)`
 width: 14px;
  height: 14px;
  fill: ${(p) => p.theme.colors.textColor};
  &.head {
    width: 19px;
    height: 19px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 28px;
    height: 28px;
  }
`;
export const IconEmail = styled(EmailIcon)`
  width: 14px;
  height: 14px;
  fill: ${(p) => p.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 28px;
    height: 28px;
  }
`;
export const InstagramIcon = styled(AiOutlineInstagram)`
 width: 14px;
  height: 14px;
  fill: ${(p) => p.theme.colors.textColor};
  margin-right: 3px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 28px;
    height: 28px;
  }
`;
export const TelegramIcon = styled(RiTelegramLine)`
 width: 14px;
  height: 14px;
  fill: ${(p) => p.theme.colors.textColor};
  margin-right: 3px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 28px;
    height: 28px;
  }
`;

export const Link = styled.a`
  display: flex;
  text-decoration: none;
  color: ${(p) => p.theme.colors.textColor};
  font-size: ${(p) => p.theme.fontSizes.xl}px;
  align-items: center;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.body};
  line-height: 103.312%;
  &.head {
    font-size: ${(p) => p.theme.fontSizes.xs}px;
  }
  &.burger {
    text-decoration: none;

    font-size: ${(p) => p.theme.fontSizes.s}px;

    font-style: normal;
    font-weight: 300;
    line-height: 118.9%; /* 23.78px */
    letter-spacing: -0.3px;
    text-decoration: none;
    color: ${(p) => p.theme.colors.textColor};
    padding: 3px 10px;
    margin: 3px 0;
    &:hover,
    &:focus {
      border-radius: 27px;
      background: ${(p) => p.theme.colors.hoverBurger};
      box-shadow: 0px 2.16058px 2.16058px 0px rgba(0, 0, 0, 0.25);
    }
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xs}px;
    &.head {
      font-size: ${(p) => p.theme.fontSizes.xs}px;
    }
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
    &.head {
      font-size: ${(p) => p.theme.fontSizes.xs}px;
    }
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;

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
