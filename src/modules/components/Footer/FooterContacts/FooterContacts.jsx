import PhoneSVG from "../../Images/phone.svg";
import { useState } from "react";
import { ContactGroup, ContactItem, ContactTitle, ContactWraper, Phone } from "./FooterContactsStyled";
import {ModalWindow} from "../ModalWindow/ModalWindow"

export const FooterContacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return (<div>
        <ContactTitle>Контактна інформація</ContactTitle>
        <ContactWraper>
                    
            <ContactGroup>
                <Phone src={PhoneSVG} alt="Phone Icon" />
                <ContactItem href="tel:+380440000000">044 000-00-00</ContactItem>
                <ContactItem href="#" onClick={openModal}>
                    Перезвонить вам?
                </ContactItem>
            </ContactGroup>
                
            <ContactGroup>
                <ContactItem href="https://www.instagram.com/" >
                    Інстаграм
                </ContactItem>
                <ContactItem href="https://web.telegram.org/">
                    Телеграм
                </ContactItem>
                <ContactItem  href="mailto:mail%40mail.com" >
                    mail@mail.com
                </ContactItem>
        


            </ContactGroup>


            <ModalWindow isOpen={isModalOpen} onRequestClose={closeModal} /> {/* Відобразити модальне вікно */}
        </ContactWraper>
    </div>
    );
};
