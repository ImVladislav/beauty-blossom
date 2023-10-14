import React from 'react';
import { AboutUsContainer, BenefitsItem, BenefitsList, SubTitle, Text, Title } from './AboutUsStyled';

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Title>
       BEAUTY BLOSSOM – ТВІЙ НАЙКРАЩИЙ ПОСТАЧАЛЬНИК УЛЮБЛЕНОЇ КОРЕЙСЬКОЇ КОСМЕТИКИ 
          </Title>
          <SubTitle>
              Наша ціль – зробити вас щасливими!
        Щодня ми працюємо для вас і для вашої краси, надаючи широкий асортимент популярних корейських брендів:
        </SubTitle>
          <SubTitle>
        Medi-Peel, Laneige, Masil, Beauty Of Joseon, Daeng Gi Meo Ri та ін.
          </SubTitle>
      <Text>
        “Blossom” – процес розквітання квітів, яка символізує весну, початок нового, ніжного і квітучого. “Beauty Blossom” – підсилює красу та естетику жінки, яка користується косметикою.
      </Text>
      <Text style={{ fontWeight: 'bold', fontSize: '65%' }}>
        Індивідуальний підхід, постійна онлайн підтримка менеджерів та їхня експертність – саме те, що є в нас! Ми гарантуємо високий та якісний сервіс.
      </Text>
      <BenefitsList>
        <BenefitsItem>Швидка доставка</BenefitsItem>
        <BenefitsItem>Оригінальні товари</BenefitsItem>
        <BenefitsItem>Індивідуальний підхід</BenefitsItem>
        <BenefitsItem>Експертність</BenefitsItem>
        <BenefitsItem>Широкий асортимент та конкурентні ціни</BenefitsItem>
      </BenefitsList>
      <Text style={{ fontWeight: 'bold', color:'#833989',  fontSize: '76%' }}>
        Слідкуйте за нами в соціальних мережах: Instagram @beauty_blossom_opt та Telegram @beauty_blossom, щоб завжди залишатись в курсі новин та поповнення асортименту.
      </Text>
    </AboutUsContainer>
  );
};

export default AboutUs;