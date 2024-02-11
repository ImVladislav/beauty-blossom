import { useMedia } from "../../hooks/useMedia";
import menuItems from "../Header/menuItems.json";
import { FooterInformBlock } from "./FooterInformBlock/FooterInformBlock";
import { FooterMenu } from "./FooterMenu/FooterMenu";
import { FooterContacts } from "./FooterContacts/FooterContacts";
import Logo from "../Header/Logo/Logo";
import { FooterWrap, InfoWrap, Wrap } from "./FooterStyled";

export const Footer = () => {
  const { isMobileScreen } = useMedia();

  return (
    <>
      <FooterWrap>
        <Wrap>
          <Logo />
          {!isMobileScreen && (
            <InfoWrap style={{ display: "flex" }}>
              <FooterMenu menuItems={menuItems} />
              <FooterInformBlock />
              <FooterContacts />
            </InfoWrap>
          )}
        </Wrap>
      </FooterWrap>
    </>
  );
};
