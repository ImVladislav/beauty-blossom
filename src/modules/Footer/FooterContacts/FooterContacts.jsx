import Contacts from "../../Header/Contacts/Contacts";

import {
  TitleWrap,
  ContactGroup,
  Title,
  ContactWraper,
  Wrap,
} from "./FooterContactsStyled";

export const FooterContacts = () => {
  return (
    <Wrap>
      <TitleWrap>
        <Title>Контакти:</Title>
      </TitleWrap>
      <ContactWraper>
        <ContactGroup>
          <Contacts title="+380500529100" to="tel:+380500529100" icon="phone" />
        </ContactGroup>
        <ContactGroup>
          <Contacts
            title="beauty_blossom_opt"
            to="https://www.instagram.com/beauty_blossom_opt"
            icon="instagram"
          />
          <Contacts
            title="beauty_blossom"
            to="https://t.me/+Eejgotzs-ktiMTIy"
            icon="telegram"
          />
        </ContactGroup>
      </ContactWraper>
    </Wrap>
  );
};
