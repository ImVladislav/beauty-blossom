import React, { useEffect, useState } from "react";
import { Container } from "../../shared/styles/Container";
import {
  Title,
  ConditionsTitle,
  Text,
  ConditionsList,
  ListItems,
  ButtonWrapper,
  ModalBackground,
  ModalContent,
  Link,
  SubText,
  Red,
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
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Корейська косметика оптом в Україні</title>
        <meta
          name="description"
          content="Компанія Beauty Blossom запрошує до співпраці великі та малі гуртові
            магазини, салони краси та інстаграм сторінки. З нами ви отримуєте
            найвигідніші умови для співпраці:"
        />
      </Helmet>
      <div>
        <section id="about">
          <Title>Корейська косметика оптом в Україні</Title>
        </section>

        <section>
          <ConditionsTitle>
          Умови співпраці
          </ConditionsTitle>
          <Text style={{ fontWeight: "bold" }}>
          для роздрібних клієнтів : 
          </Text>
          <ol>
            <ListItems>мінімальної суми замовлення немає</ListItems>
            <ListItems>оплата накладним платежем здійснюється по передоплаті 100 грн ( випадку не забору товару з пошти , передоплата не повертається )</ListItems>
            <ListItems>безкоштовна доставка від 2000 грн </ListItems>
            <ListItems>відправка 1-3 дні з моменту оплати замовлення на ФОП, якщо оплата накладним платежем , відправка здійснюється протягом 1-2 днів з моменту оформлення замовлення.</ListItems>
          </ol>
          <Text style={{ fontWeight: "bold" }}>
          для роздрібних клієнтів : 
          </Text>
          <ConditionsList>
            <ListItems>Мінімальна сума замовлення 2500 грн</ListItems>
            <ListItems>
              Відправка замовлень відбувається протягом 1-3 робочих днів з
              моменту оформлення.
              <p style={{ marginTop: "4px" }}>
                *Замовлення здійсненні на вихідних обробляються в понеділок
              </p>
            </ListItems>
            <ListItems>
              Готівкова або безготівкова (ФОП) форма оплати. Все офіційно!
            </ListItems>
            <ListItems>
              Часте оновлення товарів: Daeng Gi Meo Ri, Medi-peel, Lador та інші
            </ListItems>
          </ConditionsList>
        </section>

        <section id="payment">
          <ConditionsTitle>Відправка</ConditionsTitle>
          <Text>
            Відправка здійснюється Новою поштою в будні дні з пн-пт (в суботу за
            вимогою)
          </Text>
        </section>

        <section>
          <ConditionsTitle>Оплата</ConditionsTitle>
          <Text>
            Накладний платіж без передоплати або повна оплата на ФОП. При
            потребі, надаємо всі потрібні документи в друкованому або
            електронному вигляді.
          </Text>
        </section>

        <section id="return">
          <ConditionsTitle>Обмін та повернення</ConditionsTitle>
          <Text>
            Протягом 14-ти днів з моменту отримання замовлення ви можете
            повернути або обміняти товар на інший, при умові якщо товар в
            належному вигляді та не був у використанні. Рекомендуємо вам уважно
            перевіряти замовлення перед оформленням для запобігання
            непорозуміння. Якщо ви отримали товар в неналежному вигляді або не в
            повному складі – обов’язково зв’яжіться з нашим менеджером для
            найшвидшого вирішення ситуації.
          </Text>
        </section>

        <section>
          <ConditionsTitle>Контакти</ConditionsTitle>
          <Text>З усіх питань ви можете зв’язатись з нами:</Text>
          <ConditionsList>
            <ListItems style={{ listStyle: "none" }}>
              Телефон:
              <Link href="tel:+380500529100">+38 (050) 052 91 00</Link>
            </ListItems>
            <ListItems style={{ listStyle: "none" }}>
              Електронна пошта:{" "}
              <Link href="mailto:beautyblossom.opt@gmail.com">
                beautyblossom.opt@gmail.com
              </Link>
            </ListItems>
          </ConditionsList>
        </section>

        <section>
          <ConditionsTitle>Графік роботи</ConditionsTitle>
          <Text>Понеділок — п'ятниця з 9:30 по 18:00</Text>
          <Text>Субота, неділя — вихідні </Text>
        </section>

        <section>
          <ConditionsTitle>Бажаєте стати оптовим покупцем?</ConditionsTitle>
          <Text>
            Щоб стати оптовим покупцем, вам потрібно виконати наступні кроки:
          </Text>
          <ConditionsList>
            <ListItems>
              Реєструйтесь по кнопці "Стати оптовим покупцем"
            </ListItems>
            <ListItems>
              Поверніться на верх сторінки та увійдіть в свій акаунт, вказавши
              свій логін та пароль
            </ListItems>
          </ConditionsList>
          <SubText>
            <Red>*</Red>важливо : на електронну пошту , яку вказували при
            реєстрації , вам прийшов лист з логіном та паролем. Рекомендуємо
            його зберегти , аби в майбутньому завжди мати змогу увійти за своїми
            даними на сайт
          </SubText>
          <SubText>
            Готово! Ви стали оптовим покупцем та можете бачити оптові ціни.
          </SubText>
          <Text>
            <Red>*</Red>якщо виникли труднощі з входом на сайт - напишіть нашому
            менеджеру в телеграмі
          </Text>

          {/* // <Button
            //   opt
            //   text={"Стати оптовим покупцем"}
            //   type="submit"
            //   onClick={openModal}
            реєстрація оптового покупця
            // /> */}
          <ButtonWrapper>
            <OpenOptRegisterWindow onClick={openModal}>
              реєстрація оптового покупця
            </OpenOptRegisterWindow>
          </ButtonWrapper>
        </section>
      </div>
      {isModalOpen && (
        <ModalBackground onClick={handelDropClose}>
          <ModalContent>
            <CloseButton close={() => setIsModalOpen(false)} />
            <Register onRegisterSuccess={onRegisterSuccess} opt />
          </ModalContent>
        </ModalBackground>
      )}
    </Container>
  );
};

export default SaleProgramPage;
