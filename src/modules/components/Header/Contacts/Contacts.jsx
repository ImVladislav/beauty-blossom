import React from "react";
import { ContactsElips, ContactsIcon, Link, Wrap } from "./contacts.styled";

const Contacts = () => {
  console.log();
  return (
    <Wrap>
      <ContactsElips>
        <ContactsIcon />
      </ContactsElips>
      <Link href="tel:+380440000000">044 000-00-00</Link>
    </Wrap>
  );
};

export default Contacts;
