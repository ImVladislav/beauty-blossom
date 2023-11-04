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
  /* padding: 4px 0; */
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
  width: 10px;
  height: 10px;
  fill: ${(p) => p.theme.colors.textColor};
  /* margin-right: 5px; */
  &.head {
    width: 19px;
    height: 19px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    width: 28px;
    height: 28px;
  }
`;
export const IconEmail = styled(EmailIcon)`
  width: 10px;
  height: 10px;
  fill: ${(p) => p.theme.colors.textColor};
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    width: 28px;
    height: 28px;
  }
`;
export const InstagramIcon = styled(AiOutlineInstagram)`
  width: 10px;
  height: 10px;
  fill: ${(p) => p.theme.colors.textColor};
  margin-right: 3px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    width: 28px;
    height: 28px;
  }
`;
export const TelegramIcon = styled(RiTelegramLine)`
  width: 10px;
  height: 10px;
  fill: ${(p) => p.theme.colors.textColor};
  margin-right: 3px;
  @media screen and (min-width: 768px) {
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
  font-size: 7.008px;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  line-height: 103.312%;
  &.head {
    font-size: 11px;
  }
  &.burger {
    text-decoration: none;
    font-size: 9px;
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
      border-radius: 26.467px;
      background: #ffecd2;
      box-shadow: 0px 2.16058px 2.16058px 0px rgba(0, 0, 0, 0.25);
    }
  }
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

// color: #461C49;

// font-variant-numeric: lining-nums proportional-nums;
// font-family: Alegreya Sans;
// font-size: 7.008px;
// font-style: normal;
// font-weight: 400;
// line-height: 103.312%;
