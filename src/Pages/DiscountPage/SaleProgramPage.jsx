import React, { useState } from "react";
import { Container } from "../../modules/components/Container";
import {
  ConditionsList,
  ConditionsTitle,
  ModalBackground,
  ModalContent,
  OpenModal,
  SubTitle,
  Title,
} from "./SaleProgramPageStyled";
import { CloseButton } from "../../modules/components/ReusebleCompoments/ModalCloseBTN/CloseButton";

const SaleProgramPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <div>
        <section>
          <Title>Корейська косметика оптом в Україні</Title>
        </section>

        <section>
          <SubTitle>Компанія Beauty Blossom – запрошує до співпраці</SubTitle>
          <p>
            Компанія Beauty Blossom запрошує до співпраці великі та малі гуртові
            магазини, салони краси та інстаграм сторінки. З нами ви отримуєте
            найвигідніші умови для співпраці:
          </p>
          <ConditionsList>
            <li>Мінімальна сума замовлення 2500 грн</li>
            <li>Безкоштовна доставка від 10 тис грн</li>
            <li>Доставка протягом 1-2 робочих днів з моменту оформлення</li>
            <li>
              Готівкова або безготівкова (ФОП) форма оплати. Все офіційно!
            </li>
            <li>
              Часте оновлення товарів: Daeng Gi Meo Ri, Medi-peel, Lador та інші
            </li>
          </ConditionsList>
        </section>

        <section>
          <ConditionsTitle>Відправка</ConditionsTitle>
          <p>
            Відправляємо Новою Поштою щоденно (крім неділі). При оплаті до 14:30
            замовлення відправляємо в день оплати. При оплаті після 14:30
            замовлення відправляється на наступний робочий день.
          </p>
        </section>

        <section>
          <ConditionsTitle>Оплата</ConditionsTitle>
          <p>
            Накладний платіж без передоплати або повна оплата на ФОП. При
            потребі, надаємо всі потрібні документи в друкованому або
            електронному вигляді.
          </p>
        </section>

        <section>
          <ConditionsTitle>Обмін та повернення</ConditionsTitle>
          <p>
            Протягом 14-ти днів з моменту отримання замовлення ви можете
            повернути або обміняти товар на інший, при умові якщо товар в
            належному вигляді та не був у використанні. Рекомендуємо вам уважно
            перевіряти замовлення перед оформленням для запобігання
            непорозуміння. Якщо ви отримали товар в неналежному вигляді або не в
            повному складі – обов’язково зв’яжіться з нашим менеджером для
            найшвидшого вирішення ситуації.
          </p>
        </section>

        <section>
          <ConditionsTitle>Контакти</ConditionsTitle>
          <p>З усіх питань ви можете зв’язатись з нами:</p>
          <ul>
            <li>Телефон: +38 (050) 052 91 00</li>
            <li>
              Електронна пошта:{" "}
              <a href="mailto:beautyblossom.opt@gmail.com">
                beautyblossom.opt@gmail.com
              </a>
            </li>
          </ul>
        </section>

        <section>
          <ConditionsTitle>Графік роботи</ConditionsTitle>
          <p>Понеділок – субота з 9:30 по 18:00</p>
        </section>

        <section>
          <ConditionsTitle>Бажаєте стати оптовим покупцем?</ConditionsTitle>
          <p>
            Щоб стати оптовим покупцем, вам потрібно виконати наступні кроки:
          </p>
          <ol>
            <li>Заповніть анкету</li>
            <li>
              Надішліть менеджеру в телеграмі свою електронну пошту, яку
              вказували при реєстрації
            </li>
            <li>Ми переведемо ваш акаунт в статус оптового покупця</li>
          </ol>
          <p>
            Готово! Тепер ви можете оформляти замовлення на сайті та бачити
            історію своїх покупок.
          </p>
          <OpenModal onClick={openModal}>Стати оптовим покупцем</OpenModal>
        </section>
      </div>
      {isModalOpen && (
        <ModalBackground>
          <ModalContent>
            <CloseButton close={() => setIsModalOpen(false)} />
            <h2>Стати оптовим покупцем</h2>
            <form>
              <label>
                Ваше ім'я*:
                <input type="text" required />
              </label>
              <label>
                Ваше прізвище*:
                <input type="text" required />
              </label>
              <label>
                Країна*:
                <input type="text" required />
              </label>
              <label>
                Місто*:
                <input type="text" required />
              </label>
              <label>
                Онлайн магазин:
                <input type="checkbox" />
              </label>
              <label>
                Сторінка у соцмережах:
                <input type="checkbox" />
              </label>
              <label>
                Посилання (myshop.com):
                <input type="text" placeholder="myshop.com" />
              </label>
              <button>Далі</button>
            </form>
            <button onClick={closeModal}>Закрити</button>
          </ModalContent>
        </ModalBackground>
      )}
    </Container>
  );
};

export default SaleProgramPage;
