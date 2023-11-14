import { useMedia } from "../../hooks/useMedia";
import menuItems from "../Header/menuItems.json";
import { FooterInformBlock } from "./FooterInformBlock/FooterInformBlock";
import { FooterMenu } from "./FooterMenu/FooterMenu";
import { FooterContacts } from "./FooterContacts/FooterContacts";
import Logo from "../Header/Logo/Logo";
import { FooterWrap, InfoWrap, LogoWrap, Wrap } from "./FooterStyled";

export const Footer = () => {
  const { isMobileScreen } = useMedia();
  return (
    <>
      {!isMobileScreen && (
        <FooterWrap>
          <Wrap>
            <LogoWrap>
              <Logo />
            </LogoWrap>
            <InfoWrap>
              <FooterMenu menuItems={menuItems} />
              <FooterInformBlock />
              <FooterContacts />
            </InfoWrap>
          </Wrap>
        </FooterWrap>
      )}
    </>
  );
};
