import React from "react";

import {
  ContactsElips,
  ContactsIcon,
  IconEmail,
  IconPhone,
  InstagramIcon,
  Link,
  TelegramIcon,
  Wrap,
} from "./contacts.styled";

const Contacts = ({ title, to, icon }) => {
  if (icon === "telegram") {
    return (
      <Wrap>
        <Link href={to}>
          <TelegramIcon />

          {title}
        </Link>
      </Wrap>
    );
  } else if (icon === "instagram") {
    return (
      <Wrap>
        <Link href={to}>
          <InstagramIcon />

          {title}
        </Link>
      </Wrap>
    );
  } else if (icon === "phone") {
    return (
      <Wrap>
        <Link href={to}>
          <ContactsElips>
            <IconPhone />
          </ContactsElips>
          {title}
        </Link>
      </Wrap>
    );
  } else
    return (
      <Wrap>
        <Link href={to}>
          <ContactsElips>
            <IconEmail />
          </ContactsElips>
          {title}
        </Link>
      </Wrap>
    );
};

export default Contacts;
