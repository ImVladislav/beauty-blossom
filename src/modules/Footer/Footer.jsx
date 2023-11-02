// import {
//   Colum,
//   ColumWrapper,
//   ColumWrapperLogo,
//   Colums,
//   FooterContainer,
//   LogoThumb,
//   PaymentBlock,
//   PaymentText,
//   Wrapper,
// } from "./FooterStyled";
import Logo from "../Header/Logo/Logo";
import PaymentLogo from "../../images/VisaMastercard.webp";
import menuItems from "../Header/menuItems.json";
import { FooterInformBlock } from "./FooterInformBlock/FooterInformBlock";
import { FooterMenu } from "./FooterMenu/FooterMenu";
import { FooterContacts } from "./FooterContacts/FooterContacts";
import styled from "styled-components";
import { Container } from "../../shared/styles/Container";
import { useMedia } from "../../hooks/useMedia";

export const FooterWrap = styled.div`
  padding: 10px 0 36px 0;
  background: ${(p) => p.theme.colors.topHeaderLine};
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const LogoWrap = styled.div`
  margin-left: 10px;
  margin-right: 50px;
  @media screen and (min-width: 768px) {
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Wrap = styled.div`
  /* background: ${(p) => p.theme.colors.topHeaderLine}; */
  max-width: 1440px;
  margin: 0 auto;
  align-items: flex-start;

  display: flex;
  justify-content: space-around;
  @media screen and (min-width: 768px) {
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const InfoWrap = styled.div`
  /* background: ${(p) => p.theme.colors.topHeaderLine}; */
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
  gap: 5px;
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 0;
    max-width: 900px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Footer = () => {
  const { isMobileScreen, isTabletScreen } = useMedia();
  return (
    // <FooterContainer>
    //   <Wrapper>
    //     <Colums>
    //       <div style={{ maxWidth: "300px", flex: "2 0 0", display: "flex" }}>
    //         <Colum>
    //           <ColumWrapperLogo>
    //             <LogoThumb>
    //               <Logo />
    //               {/* <PaymentBlock>
    //               <PaymentText>Приймаємо до оплати</PaymentText>
    //               <a
    //                 href="https://www.liqpay.ua"
    //                 target="_blank"
    //                 rel="nofollow noreferrer"
    //               >
    //                 <img
    //                   alt="Приймаємо оплату Visa/Mastercard через Liqpay"
    //                   src={PaymentLogo}
    //                 />
    //               </a>
    //             </PaymentBlock> */}
    //             </LogoThumb>
    //           </ColumWrapperLogo>
    //         </Colum>
    //       </div>
    //       <div
    //         style={{ marginLeft: "130px", display: "flex", flex: "2 0 0px" }}
    //       >
    //         <Colum>
    //           <ColumWrapper>
    //             <FooterMenu
    //               menuItems={menuItems}
    //               listStyle={{ display: "block", margin: "5px" }}
    //             />
    //           </ColumWrapper>
    //         </Colum>
    //         <Colum>
    //           <ColumWrapper>
    //             <FooterInformBlock />
    //           </ColumWrapper>
    //         </Colum>
    //         <Colum>
    //           <ColumWrapper>
    //             <FooterContacts />
    //           </ColumWrapper>
    //         </Colum>
    //       </div>
    //     </Colums>
    //   </Wrapper>
    // </FooterContainer>
    <FooterWrap>
      <Wrap>
        <LogoWrap>
          <Logo />
        </LogoWrap>
        <InfoWrap>
          <FooterMenu menuItems={menuItems} />

          {isMobileScreen || isTabletScreen ? (
            <div>
              <FooterInformBlock />
              <FooterContacts />
            </div>
          ) : (
            <>
              <FooterInformBlock />
              <FooterContacts />
            </>
          )}
        </InfoWrap>
      </Wrap>
    </FooterWrap>
  );
};
