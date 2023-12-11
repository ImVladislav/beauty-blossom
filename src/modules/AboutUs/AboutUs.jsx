import React from "react";

import {
  AboutUsContainer,
  BenefitsItem,
  BenefitsList,
  SubTitle,
  Text,
  TextSecond,
  TextItem,
  Title,
  TextLink,
  Link,
} from "./AboutUsStyled";

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Title>
        BEAUTY BLOSSOM – ТВІЙ НАЙКРАЩИЙ ПОСТАЧАЛЬНИК УЛЮБЛЕНОЇ КОРЕЙСЬКОЇ
        КОСМЕТИКИ
      </Title>
      <SubTitle>
        Наша ціль – зробити вас щасливими! Щодня ми працюємо для вас і для вашої
        краси, надаючи широкий асортимент <br />
        популярних корейських брендів:
      </SubTitle>
      <SubTitle>
        Medi-Peel, Laneige, Masil, Beauty Of Joseon, Daeng Gi Meo Ri та ін.
      </SubTitle>
      <Text>
        “Blossom” – процес розквітання квітів, яка символізує весну, початок
        нового, ніжного і квітучого. “Beauty Blossom” – підсилює красу та
        естетику жінки, яка користується косметикою.
      </Text>
      <TextSecond>
        Індивідуальний підхід, постійна онлайн підтримка менеджерів та їхня
        експертність – саме те, що є в нас! Ми гарантуємо високий та якісний
        сервіс.
      </TextSecond>
      <BenefitsList>
        <BenefitsItem>
          <TextItem>Швидка доставка</TextItem>
        </BenefitsItem>
        <BenefitsItem>
          <TextItem>Оригінальні товари</TextItem>
        </BenefitsItem>
        <BenefitsItem>
          <TextItem>Індивідуальний підхід</TextItem>
        </BenefitsItem>
        <BenefitsItem>
          <TextItem>Широкий асортимент та конкурентні ціни</TextItem>
        </BenefitsItem>
      </BenefitsList>
      <TextLink>
        Слідкуйте за нами в соціальних мережах: Instagram
        <Link
          href="https://www.instagram.com/beauty_blossom_opt"
          target="_blank"
          rel="noreferrer"
        >
          @beauty_blossom_opt
        </Link>
        та Telegram
        <Link
          href="https://t.me/+Eejgotzs-ktiMTIy"
          target="_blank"
          rel="noreferrer"
        >
          @beauty_blossom
        </Link>
        , щоб завжди залишатись в курсі новин та поповнення асортименту.
      </TextLink>
    </AboutUsContainer>
  );
};

export default AboutUs;
