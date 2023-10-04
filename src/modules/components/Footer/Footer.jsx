import { Colum, ColumWrapper, Colums, FooterContainer, LogoThumb, PaymentBlock, PaymentText, Wrapper,  } from "./FooterStyled";
import Logo from "../Header/Logo/Logo";
import PaymentLogo from "../Images/VisaMastercard.webp"
import menuItems from "../Header/menuItems.json"
import { FooterInformBlock } from "./FooterInformBlock/FooterInformBlock";
import { FooterMenu } from "./FooterMenu/FooterMenu";
import { FooterContacts } from "./FooterContacts/FooterContacts";


export const Footer = () => {
    console.log(menuItems);
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



        //                 <div className="footer__col footer__col--double">
        //                     <div className="footer__col-wrap">
        //                         <div className="footer__heading">Контактная информация</div>
        //                         <div className="footer__contacts footer__contacts--columns">
        //                             <div className="footer__contacts-group">
        //                                 <svg className="icon icon--phone">
        //                                     <use xlinkHref="#icon-phone"></use>
        //                                 </svg>
        //                                 <div className="footer__contacts-item">
        //                                     <a className="footer__contacts-item-link j-phone-item" data-index="1" href="tel:%2B380440000000">
        //                                         044 000-00-00
        //                                     </a>
        //                                 </div>
        //                                 <div className="footer__contacts-item">
        //                                     <a className="footer__contacts-item-link j-phone-item" data-index="2" href="tel:%2B380950000000">
        //                                         095 000-00-00
        //                                     </a>
        //                                 </div>
        //                                 <a className="footer__link" href="#" data-modal="#call-me">Перезвонить вам?</a>
        //                             </div>
        //                             <div className="footer__contacts-group">
        //                                 <div className="footer__contacts-item">
        //                                     <svg className="icon icon--whatsapp">
        //                                         <use xlinkHref="#icon-whatsapp"></use>
        //                                     </svg>
        //                                     <a className="footer__link" href="https://api.whatsapp.com/send?phone=whats-app">
        //                                         whats-app
        //                                     </a>
        //                                 </div>
        //                                 <div className="footer__contacts-item">
        //                                     <svg className="icon icon--telegram">
        //                                         <use xlinkHref="#icon-telegram"></use>
        //                                     </svg>
        //                                     <a className="footer__link" href="tg://resolve?domain=telegram">
        //                                         telegram
        //                                     </a>
        //                                 </div>
        //                                 <div className="footer__contacts-item">
        //                                     <svg className="icon icon--skype">
        //                                         <use xlinkHref="#icon-skype"></use>
        //                                     </svg>
        //                                     <a className="footer__link" href="skype:skype?call">
        //                                         skype
        //                                     </a>
        //                                 </div>
        //                                 <div className="footer__contacts-item">
        //                                     <svg className="icon icon--email">
        //                                         <use xlinkHref="#icon-email"></use>
        //                                     </svg>
        //                                     <a className="footer__link" href="mailto:mail%40mail.com">
        //                                         mail@mail.com
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                             <div className="footer__contacts-group">
        //                                 <svg className="icon icon--location">
        //                                     <use xlinkHref="#icon-location"></use>
        //                                 </svg>
        //                                 <div className="footer__address">Киев, ул. Крещатик</div>
        //                                 <a className="footer__link" href="/contacts/">Карта проезда</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
