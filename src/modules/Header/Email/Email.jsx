import { EmailIcon } from "../../../shared/components/ReusebleCompoments/StyleSVGIcons";
import { ContactsElips, ContactsIcon, Link, Wrap } from "./EmailStyled";

const Email = () => {
  return (
    <Wrap>
      <ContactsElips>
        <ContactsIcon />
      </ContactsElips>
      <Link href="beautyblossom.opt@gmail.com">
        beautyblossom.opt@gmail.com
      </Link>
    </Wrap>
  );
};

export default Email;
