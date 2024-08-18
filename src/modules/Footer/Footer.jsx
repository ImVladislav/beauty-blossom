import { useMedia } from "../../hooks/useMedia";
import menuItems from "../Header/menuItems.json";
import { FooterInformBlock } from "./FooterInformBlock/FooterInformBlock";
import { FooterMenu } from "./FooterMenu/FooterMenu";
import { FooterContacts } from "./FooterContacts/FooterContacts";
import Logo from "../Header/Logo/Logo";
import {
  FooterWrap,
  InfoWrap,
  ScheduleBlock,
  ScheduleText,
  ScheduleTitle,
  Wrap,
} from "./FooterStyled";

export const Footer = () => {
  const { isMobileScreen } = useMedia();

  return (
    <>
      <FooterWrap>
        <Wrap>
          <Logo />
          {isMobileScreen && <FooterContacts />}
          {!isMobileScreen && (
            <InfoWrap>
              <FooterInformBlock />
              <FooterMenu menuItems={menuItems} />
              <FooterContacts />
            </InfoWrap>
          )}
        </Wrap>
        <ScheduleBlock>
          <ScheduleTitle>графік роботи</ScheduleTitle>
          <ScheduleText>пн - пт з 9:30 до 18:00</ScheduleText>
          <ScheduleText>сб - нд вихідні</ScheduleText>
        </ScheduleBlock>
      </FooterWrap>
    </>
  );
};
