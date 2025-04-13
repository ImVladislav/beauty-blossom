import React, { useEffect, useState } from "react";

import {
  AboutUsContainer,
  // BenefitsItem,
  // BenefitsList,
  SubTitle,
  Text,
  // TextSecond,
  // TextItem,
  Title,
  // TextLink,
  // Link,
  SubTitleSpan,
  SubTitleBold,
  LinkToSaleProgram,
  OpenOptRegisterWindow,
} from "./AboutUsStyled";
import {
  ModalBackground,
  ModalContent,
} from "../../pages/SaleProgramPage/SaleProgramPageStyled";
import { CloseButton } from "../../shared/components/ReusebleCompoments/ModalCloseBTN/CloseButton";
import Register from "../Register/Register";
import { toast } from "react-toastify";
// import Button from "../../shared/components/Button/Button";
import Benefits from "./Benefits";

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handelDropClose = (e) => {
    if (e.target.tagName === "SECTION") {
      setIsModalOpen(false);
    }
  };

  const onRegisterSuccess = () => {
    toast.info("Ви успішно зареєструвалися як оптовий клієнт, авторизуйтеся");
  };
  return (
    <AboutUsContainer>
      <Title>інформація для оптових покупців</Title>
      <Text>
        маєте свій власний магазин косметики / салон краси чи лише плануєте
        відкривати?
      </Text>
      <SubTitle>
        <SubTitleSpan> BEAUTY BLOSSOM </SubTitleSpan> – ТВІЙ НАЙКРАЩИЙ
        ПОСТАЧАЛЬНИК УЛЮБЛЕНОЇ КОРЕЙСЬКОЇ КОСМЕТИКИ
      </SubTitle>
      <Text>Наша ціль – зробити вас щасливими!</Text>
      <Text>
        Щодня ми працюємо для вас і для вашої краси, надаючи широкий асортимент
        <br />
        популярних корейських брендів:
      </Text>
      <SubTitleBold>
        Medi-Peel, Laneige, Masil, Beauty Of Joseon, Daeng Gi Meo Ri та ін.
      </SubTitleBold>
      {/* <Text>
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
      </TextLink> */}
      <Benefits />
      <LinkToSaleProgram href="https://beautyblossom.com.ua/kliientam">
        дізнатися більше про умови для оптових покупців
      </LinkToSaleProgram>
      <OpenOptRegisterWindow onClick={openModal}>
        реєстрація оптового покупця
      </OpenOptRegisterWindow>

      {isModalOpen && (
        <ModalBackground onClick={handelDropClose}>
          <ModalContent>
            <CloseButton close={() => setIsModalOpen(false)} />
            <Register onRegisterSuccess={onRegisterSuccess} opt />
          </ModalContent>
        </ModalBackground>
      )}
    </AboutUsContainer>
  );
};

export default AboutUs;
