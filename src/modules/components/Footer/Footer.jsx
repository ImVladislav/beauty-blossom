import { Colum, ColumWrapper, Colums, FooterContainer, LogoThumb, PaymentBlock, PaymentText, Wrapper,  } from "./FooterStyled";
import Logo from "../Header/Logo/Logo";
import PaymentLogo from "../Images/VisaMastercard.webp"
import menuItems from "../Header/menuItems.json"
import { FooterInformBlock } from "./FooterInformBlock/FooterInformBlock";
import { FooterMenu } from "./FooterMenu/FooterMenu";
import { FooterContacts } from "./FooterContacts/FooterContacts";


export const Footer = () => {

    return (
        <FooterContainer>
            <Wrapper>
                <Colums>
                    <Colum>
                        <ColumWrapper>
                            <LogoThumb>
                                <Logo />
                                <PaymentBlock>
                                    <PaymentText>Приймаємо до оплати</PaymentText>
                                    <a href="https://www.liqpay.ua" target="_blank" rel="nofollow noreferrer">
                                        <img alt="Приймаємо оплату Visa/Mastercard через Liqpay" src={PaymentLogo} />
                                    </a>
                                </PaymentBlock>
                            </LogoThumb>
                        </ColumWrapper>
                    </Colum>
                    <Colum>
                        <ColumWrapper>
                            <FooterMenu menuItems={menuItems} listStyle={{ display: 'block', margin: '5px' }} />
                        </ColumWrapper>
                    </Colum>
                    <Colum>
                        <ColumWrapper>
                            <FooterInformBlock/>
                        </ColumWrapper>
                    </Colum>
                    <Colum>
                        <ColumWrapper>
                            <FooterContacts/>
                        </ColumWrapper>
                    </Colum>
                </Colums>
            </Wrapper>
        </FooterContainer>
    );
}
