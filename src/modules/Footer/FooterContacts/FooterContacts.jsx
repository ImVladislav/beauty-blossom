import Contacts from "../../Header/Contacts/Contacts";
import { useMedia } from "../../../hooks/useMedia";
import {
  TitleWrap,
  Underline,
  ContactGroup,
  Title,
  ContactWraper,
  Wrap,
} from "./FooterContactsStyled";

export const FooterContacts = () => {
  const { isMobileScreen } = useMedia();

  return (
    <Wrap>
      <TitleWrap>
        <Title>Контакти:</Title>
        {!isMobileScreen && <Underline />}
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
