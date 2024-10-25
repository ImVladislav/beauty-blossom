import React, { useEffect, useState } from "react";
import { Container } from "../../shared/styles/Container";
import {
  SectionTitle,
  InfoTitle,
  Text,
  ConditionsList,
  ConditionsItem,
  ButtonWrapper,
  ModalBackground,
  ModalContent,
  Link,
  SubText,
  Red,
  Wrap,
  TextPink,
  ImportantList,
  ImportantItem,
  InfoWrap,
} from "./SaleProgramPageStyled";
import { CloseButton } from "../../shared/components/ReusebleCompoments/ModalCloseBTN/CloseButton";

import Register from "../../modules/Register/Register";
import { toast } from "react-toastify";
import Button from "../../shared/components/Button/Button";
import { Helmet } from "react-helmet";
import { OpenOptRegisterWindow } from "../../modules/AboutUs/AboutUsStyled";

const SaleProgramPage = () => {
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
    <main>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Корейська косметика в роздріб та опт в Україні</title>
          <meta
            name="description"
            content="Компанія Beauty Blossom запрошує до співпраці великі та малі гуртові
            магазини, салони краси та інстаграм сторінки. З нами ви отримуєте
            найвигідніші умови для співпраці:"
          />
        </Helmet>
        <Wrap>
          <section id="about">
            <SectionTitle>
              Корейська косметика в роздріб та опт в Україні
            </SectionTitle>

            <InfoWrap>
              <InfoTitle id="payment">Умови співпраці</InfoTitle>
              <Text>для роздрібних клієнтів:</Text>
              <ConditionsList>
                <ConditionsItem>
                  <Text>мінімальної суми замовлення немає</Text>
                </ConditionsItem>
                <ConditionsItem>
                  <Text>
                    оплата накладним платежем здійснюється по передоплаті 100
                    грн ( випадку не забору товару з пошти , передоплата не
                    повертається )
                  </Text>
                </ConditionsItem>
                <ConditionsItem>
                  <Text>безкоштовна доставка від 2000 грн</Text>
                </ConditionsItem>
                <ConditionsItem>
                  <Text>
                    відправка 1-3 дні з моменту оплати замовлення на ФОП, якщо
                    оплата накладним платежем , відправка здійснюється протягом
                    1-2 днів з моменту оформлення замовлення.
                  </Text>
                </ConditionsItem>
              </ConditionsList>
              <Text>як оформити замовлення?</Text>
              <ConditionsList>
                <ConditionsItem>
                  <Text>
                    обираєте потрібний товар , додаєте в корзину потрібну
                    кількість
                  </Text>
                </ConditionsItem>
                <ConditionsItem>
                  <Text>
                    оформлюєте замовлення , вказуючи ваші дані для відправки та
                    спосіб оплати
                  </Text>
                </ConditionsItem>
                <ConditionsItem>
                  <Text>очікуєте на зворотній зв’язок нашого менеджера</Text>
                </ConditionsItem>
              </ConditionsList>
              <TextPink>
                ● переходьте в Instagram на нашу сторінку та дізнавайся, як
                отримати знижку на перше замовлення по промокоду
              </TextPink>
            </InfoWrap>

            <InfoWrap>
              <Text>для оптових клієнтів:</Text>
              <ConditionsList>
                <ConditionsItem>
                  <Text>мінімальна сума замовлення 2500 грн</Text>
                </ConditionsItem>
                <ConditionsItem>
                  <Text>оплата накладним платежем або за реквізитами ФОП</Text>
                </ConditionsItem>
                <ConditionsItem>
                  <Text>
                    відправка протягом 1-3 днів з моменту оплати замовлення,
                    якщо спосіб оплати накладний платіж, відправка відбувається
                    протягом 1-2 днів з моменту оформлення замовлення
                  </Text>
                </ConditionsItem>
                <ConditionsItem>
                  <Text>доставка за рахунок покупця</Text>
                </ConditionsItem>
              </ConditionsList>
              <Text>як оформити замовлення?</Text>
              <ConditionsList>
                <ConditionsItem>
                  <Text>
                    щоб мати доступ до оптових цін, вам потрібно зареєструватись
                    на сайті. Для цього, перейдіть вниз сторінки та натисніть на
                    велику рожеву кнопку “реєстрація оптового покупця”
                  </Text>
                </ConditionsItem>
                <ConditionsItem>
                  <Text>
                    після реєстрації оновіть сторінку та по потребі увійдіть за
                    вашими даними
                  </Text>
                </ConditionsItem>
                <ConditionsItem>
                  <Text>
                    обираєте потрібний товар , додаючи в корзину потрібну
                    кількість
                  </Text>
                </ConditionsItem>
                <ConditionsItem>
                  <Text>
                    оформлюєте замовлення, вказуючи ваші дані для відправки та
                    спосіб оплати
                  </Text>
                </ConditionsItem>
                <ConditionsItem>
                  <Text>очікуєте на зворотній зв’язок нашого менеджера</Text>
                </ConditionsItem>
              </ConditionsList>
              <TextPink>
                ● напишіть нашому менеджеру та дізнавайся, як отримати знижку на
                перше замовлення по промокоду
              </TextPink>
            </InfoWrap>

            <InfoTitle>Важлива інформація </InfoTitle>

            <ImportantList>
              <ImportantItem>
                <TextPink>
                  промокоди та знижки не сумуються з іншими акційними
                  пропозиціями на сайті , тобто на товари з позначками SALE
                </TextPink>
              </ImportantItem>
              <ImportantItem>
                <TextPink id="return">
                  Протягом 14-ти днів з моменту отримання замовлення ви можете
                  повернути або обміняти товар на інший, при умові якщо товар в
                  належному вигляді та не був у використанні. Рекомендуємо вам
                  уважно перевіряти замовлення перед оформленням для запобігання
                  непорозуміння. Якщо ви отримали товар в неналежному вигляді
                  або не в повному складі – обов’язково зв’яжіться з нашим
                  менеджером для найшвидшого вирішення ситуації.
                </TextPink>
              </ImportantItem>
              <ImportantItem>
                <TextPink>
                  на електронну пошту , яку вказували при реєстрації , вам
                  прийшов лист з логіном та паролем. Рекомендуємо його зберегти
                  , аби в майбутньому завжди мати змогу увійти за своїми даними
                  на сайт
                </TextPink>
              </ImportantItem>
            </ImportantList>
            <Text style={{ marginTop: "4px", fontStyle: "italic" }}>
              * якщо виникли труднощі з входом на сайт - напишіть нашому
              менеджеру в телеграмі
            </Text>

            <ButtonWrapper>
              <OpenOptRegisterWindow onClick={openModal}>
                реєстрація оптового покупця
              </OpenOptRegisterWindow>
            </ButtonWrapper>
          </section>
        </Wrap>
        {isModalOpen && (
          <ModalBackground onClick={handelDropClose}>
            <ModalContent>
              <CloseButton close={() => setIsModalOpen(false)} />
              <Register onRegisterSuccess={onRegisterSuccess} opt />
            </ModalContent>
          </ModalBackground>
        )}
      </Container>
    </main>
  );
};

export default SaleProgramPage;
