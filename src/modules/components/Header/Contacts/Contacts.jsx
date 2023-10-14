import React from "react";

import { ContactsElips, ContactsIcon, Link, Wrap } from "./contacts.styled";

const Contacts = () => {
  return (
    <Wrap>
      <ContactsElips >
        <ContactsIcon/>
      </ContactsElips >
      <Link href="tel:+380500529100">+380500529100</Link>
    </Wrap>
  );
};

export default Contacts;
