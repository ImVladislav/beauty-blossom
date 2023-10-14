import React from 'react';
import { AboutUsContainer, BenefitsItem, BenefitsList, Text, Title } from './AboutUsStyled';

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Title>
        Beauty Blossom – твій найкращий постачальник улюбленої корейської косметики. 
          </Title>
          <Title>
              Наша ціль – зробити вас щасливими!
        Щодня ми працюємо для вас і для вашої краси, надаючи широкий асортимент популярних корейських брендів: Medi-Peel, Laneige, Masil, Beauty Of Joseon, Daeng Gi Meo Ri та ін.
          </Title>
      <Text>
        “Blossom” – процес розквітання квітів, яка символізує весну, початок нового, ніжного і квітучого. “Beauty Blossom” – підсилює красу та естетику жінки, яка користується косметикою.
      </Text>
      <Text>
        Індивідуальний підхід, постійна онлайн підтримка менеджерів та їхня експертність – саме те, що є в нас! Ми гарантуємо високий та якісний сервіс.
      </Text>
      <BenefitsList>
        <BenefitsItem>Швидка доставка</BenefitsItem>
        <BenefitsItem>Оригінальні товари</BenefitsItem>
        <BenefitsItem>Індивідуальний підхід</BenefitsItem>
        <BenefitsItem>Експертність</BenefitsItem>
        <BenefitsItem>Широкий асортимент та конкурентні ціни</BenefitsItem>
      </BenefitsList>
      <Text>
        Слідкуйте за нами в соціальних мережах: Instagram @beauty_blossom_opt та Telegram @beauty_blossom, щоб завжди залишатись в курсі новин та поповнення асортименту.
      </Text>
    </AboutUsContainer>
  );
};

export default AboutUs;