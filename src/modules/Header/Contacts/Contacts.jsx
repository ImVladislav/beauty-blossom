import React from "react";

import {
  // ContactsElips,
  // IconPhone,
  // IconEmail,
  // InstagramIcon,
  // TelegramIcon,
  Link,
  Wrap,
} from "./contacts.styled";

const Contacts = ({ title, to, icon, head, burger }) => {
  if (icon === "telegram") {
    return (
      <Wrap>
        <Link
          href={to}
          target="_blank"
          rel="noreferrer"
          className={(head && "head") || (burger && "burger")}
        >
          {/* <TelegramIcon /> */}

          {title}
        </Link>
      </Wrap>
    );
  } else if (icon === "instagram") {
    return (
      <Wrap>
        <Link
          href={to}
          target="_blank"
          rel="noreferrer"
          className={(head && "head") || (burger && "burger")}
        >
          {/* <InstagramIcon /> */}

          {title}
        </Link>
      </Wrap>
    );
  } else if (icon === "phone") {
    return (
      <Wrap>
        <Link href={to} className={(head && "head") || (burger && "burger")}>
          {/* <ContactsElips className={burger && "burger"}>
            <IconPhone className={head && "head"} />
          </ContactsElips> */}
          {title}
        </Link>
      </Wrap>
    );
  } else
    return (
      <Wrap>
        <Link href={to} className={(head && "head") || (burger && "burger")}>
          {/* <ContactsElips className={burger && "burger"}>
            <IconEmail />
          </ContactsElips> */}
          {title}
        </Link>
      </Wrap>
    );
};

export default Contacts;
