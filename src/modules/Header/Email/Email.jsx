import { ContactsElips, ContactsIcon, Link, Wrap } from "./EmailStyled";

const Email = () => {
  return (
    <Wrap>
      <ContactsElips>
        <ContactsIcon />
      </ContactsElips>
      <Link href="mailto:beautyblossom.opt@gmail.com">
        beautyblossom.opt@gmail.com
      </Link>
    </Wrap>
  );
};

export default Email;
