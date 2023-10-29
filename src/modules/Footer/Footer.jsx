import {
  Colum,
  ColumWrapper,
  ColumWrapperLogo,
  Colums,
  FooterContainer,
  LogoThumb,
  PaymentBlock,
  PaymentText,
  Wrapper,
} from "./FooterStyled";

import Logo from "../Header/Logo/Logo";
import PaymentLogo from "../../images/VisaMastercard.webp";
import menuItems from "../Header/menuItems.json";
import { FooterInformBlock } from "./FooterInformBlock/FooterInformBlock";
import { FooterMenu } from "./FooterMenu/FooterMenu";
import { FooterContacts } from "./FooterContacts/FooterContacts";

export const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <Colums>
          <div style={{ maxWidth: "300px", flex: "2 0 0", display: "flex" }}>
            <Colum>
              <ColumWrapperLogo>
                <LogoThumb>
                  <Logo />
                  {/* <PaymentBlock>
                  <PaymentText>Приймаємо до оплати</PaymentText>
                  <a
                    href="https://www.liqpay.ua"
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    <img
                      alt="Приймаємо оплату Visa/Mastercard через Liqpay"
                      src={PaymentLogo}
                    />
                  </a>
                </PaymentBlock> */}
                </LogoThumb>
              </ColumWrapperLogo>
            </Colum>
          </div>
          <div
            style={{ marginLeft: "130px", display: "flex", flex: "2 0 0px" }}
          >
            <Colum>
              <ColumWrapper>
                <FooterMenu
                  menuItems={menuItems}
                  listStyle={{ display: "block", margin: "5px" }}
                />
              </ColumWrapper>
            </Colum>
            <Colum>
              <ColumWrapper>
                <FooterInformBlock />
              </ColumWrapper>
            </Colum>
            <Colum>
              <ColumWrapper>
                <FooterContacts />
              </ColumWrapper>
            </Colum>
          </div>
        </Colums>
      </Wrapper>
    </FooterContainer>
  );
};
