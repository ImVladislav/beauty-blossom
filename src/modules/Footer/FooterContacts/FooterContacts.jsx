import { useState } from "react";
import {
  TitleWrap,
  Underline,
  ContactGroup,
  Title,
  ContactWraper,
} from "./FooterContactsStyled";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import Contacts from "../../Header/Contacts/Contacts";

export const FooterContacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <TitleWrap>
        <Title>Контакти:</Title>
        <Underline />
      </TitleWrap>
      <ContactWraper>
        <ContactGroup>
          <Contacts title="+380500529100" to="tel:+380500529100" icon="phone" />

          {/* <ContactItem href="#" onClick={openModal}>
              Перетелефонувати вам?
            </ContactItem> */}
        </ContactGroup>
        <ContactGroup>
          {/* <ContactItem href="mailto:beautyblossom.opt@gmail.com">
              beautyblossom.opt@gmail.com
            </ContactItem> */}
          <Contacts
            title="beauty_blossom_opt"
            to="https://www.instagram.com/"
            icon="instagram"
          />
          {/* <ContactItem href="https://www.instagram.com/">
              beauty_blossom_opt
            </ContactItem> */}
          <Contacts
            title="beauty_blossom"
            to="https://web.telegram.org/"
            icon="telegram"
          />
          {/* <ContactItem href="https://web.telegram.org/">
              beauty_blossom
            </ContactItem> */}

          {/* <ContactItem href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A5%D1%80%D0%B5%D1%89%D0%B0%D1%82%D0%B8%D0%BA,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/data=!4m2!3m1!1s0x40d4ce56b2456d3b:0xd062ae171b57e947?sa=X&ved=2ahUKEwij09G04tuBAxXPwAIHHbvZBEkQ8gF6BAhZEAA&ved=2ahUKEwij09G04tuBAxXPwAIHHbvZBEkQ8gF6BAheEAE">
              Київ
            </ContactItem> */}
        </ContactGroup>
        <ModalWindow isOpen={isModalOpen} onRequestClose={closeModal} />{" "}
        {/* Відобразити модальне вікно */}
      </ContactWraper>
    </div>
  );
};
