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
} from "./SaleProgramPageStyled";
import { CloseButton } from "../../shared/components/ReusebleCompoments/ModalCloseBTN/CloseButton";

import Register from "../../modules/Register/Register";
import { toast } from "react-toastify";
import Button from "../../shared/components/Button/Button";

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
      <div>
        <section id="about">
          <Title>Корейська косметика оптом в Україні</Title>
        </section>

        <section>
          <ConditionsTitle>
            Компанія Beauty Blossom – запрошує до співпраці
          </ConditionsTitle>
          <Text>
            Компанія Beauty Blossom запрошує до співпраці великі та малі гуртові
            магазини, салони краси та інстаграм сторінки. З нами ви отримуєте
            найвигідніші умови для співпраці:
          </Text>
          <ConditionsList>
            <ListItems>Мінімальна сума замовлення 2500 грн</ListItems>
            <ListItems>
              Доставка протягом 1-2 робочих днів з моменту оформлення
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
            Відправляємо Новою Поштою щоденно (крім неділі). При оплаті до 14:30
            замовлення відправляємо в день оплати. При оплаті після 14:30
            замовлення відправляється на наступний робочий день.
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
          <Text>Понеділок – субота з 9:30 по 18:00</Text>
        </section>

        <section>
          <ConditionsTitle>Бажаєте стати оптовим покупцем?</ConditionsTitle>
          <Text>
            Щоб стати оптовим покупцем, вам потрібно виконати наступні кроки:
          </Text>
          <ConditionsList>
            <ListItems> Заповніть анкету</ListItems>
            <ListItems>
              Надішліть менеджеру в телеграмі свою електронну пошту, яку
              вказували при реєстрації
            </ListItems>
            <ListItems>
              Ми переведемо ваш акаунт в статус оптового покупця
            </ListItems>
          </ConditionsList>
          <Text>
            Готово! Тепер ви можете оформляти замовлення на сайті та бачити
            історію своїх покупок.
          </Text>

          <ButtonWrapper>
            <Button
              opt
              text={"Стати оптовим покупцем"}
              type="submit"
              onClick={openModal}
            />
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
