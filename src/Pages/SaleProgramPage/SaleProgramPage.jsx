import React, { useState } from "react";
import { Container } from "../../shared/styles/Container";
import {
  CheckBox,
  ConditionsList,
  ConditionsTitle,
  FormLavelBloks,
  Input,
  Label,
  ListItems,
  ModalBackground,
  ModalContent,
  ModalForm,
  ModalShopTypeItem,
  ModalShopTypeText,
  ModalText,
  OpenModal,
  ReqStar,
  SubTitle,
  Text,
  Title,
} from "./SaleProgramPageStyled";
import { CloseButton } from "../../shared/components/ReusebleCompoments/ModalCloseBTN/CloseButton";
import Button from "../../shared/components/Button/Button";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operation";

const SaleProgramPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [number, setNumber] = useState('');
  const [onlineShop, setOnlineShop] = useState(false);
  const [offlineShop, setOfflineShop] = useState(false); // Поправлено назву змінної
  const [socialMedia, setSocialMedia] = useState(false);
  const [link, setLink] = useState('');

  const dispatch = useDispatch();
  
  const registerDispatch = () => {
    dispatch(register({ email, password, firstName, lastName, country, number, onlineShop, offlineShop, socialMedia, link }))
      .then(response => {
        if (response.status === 200) {
          setIsRegistered(true);
        } else {
          setIsRegistered(false);
        }
      })
      .catch(error => {
        setIsRegistered(false);
      });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsRegistered(false);
  };

  const subForm = (e) => {
    e.preventDefault();
    registerDispatch();
  };

  const isPasswordValid = (password) => {
    const trimmedPassword = password.trim();
    return trimmedPassword.length >= 6;
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Використовуємо регулярний вираз для перевірки номеру телефону
    const phoneRegex = /^\+380\d{9}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <Container>
      <div>
        <section>
          <Title>Корейська косметика оптом в Україні</Title>
        </section>

        <section>
          <SubTitle>Компанія Beauty Blossom – запрошує до співпраці</SubTitle>
          <Text>
            Компанія Beauty Blossom запрошує до співпраці великі та малі гуртові
            магазини, салони краси та інстаграм сторінки. З нами ви отримуєте
            найвигідніші умови для співпраці:
          </Text>
          <ConditionsList>
            <ListItems>Мінімальна сума замовлення 2500 грн</ListItems>
            <ListItems>Безкоштовна доставка від 10 тис грн</ListItems>
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

        <section>
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

        <section>
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
              Телефон: +38 (050) 052 91 00
            </ListItems>
            <ListItems style={{ listStyle: "none" }}>
              Електронна пошта:{" "}
              <a href="mailto:beautyblossom.opt@gmail.com">
                beautyblossom.opt@gmail.com
              </a>
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
              {" "}
              Ми переведемо ваш акаунт в статус оптового покупця
            </ListItems>
          </ConditionsList>
          <Text>
            Готово! Тепер ви можете оформляти замовлення на сайті та бачити
            історію своїх покупок.
          </Text>
          <OpenModal onClick={openModal}>Стати оптовим покупцем</OpenModal>
        </section>
      </div>
      {isModalOpen && (
        <ModalBackground>
          <ModalContent>
            <CloseButton close={() => setIsModalOpen(false)} />
            {isRegistered ? (
              "Ви успішно зареєструвалися як оптовий клієнт"
            ) : (
              <ModalForm onSubmit={subForm}>
                <FormLavelBloks>
                  <Label>
                    <ModalText>
                      Пошта<ReqStar>*</ReqStar>
                    </ModalText>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Пошта"
                      className={email.trim() === "" ? "error" : ""}
                      onChange={(e) => {
                        const inputEmail = e.target.value;
                        if (isEmailValid(inputEmail)) {
                          setEmail(inputEmail);
                        }
                      }}
                      required
                    />
                  </Label>
                  <Label>
                    <ModalText>
                      Пароль<ReqStar>*</ReqStar>
                    </ModalText>
                    <Input
                      type="password"
                      placeholder="Пароль"
                      className={password.trim() === "" ? "error" : ""}
                      onChange={(e) => {
                        const inputPassword = e.target.value;
                        if (isPasswordValid(inputPassword)) {
                          setPassword(inputPassword);
                        }
                      }}
                      required
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </span>
                  </Label>
                </FormLavelBloks>
                <FormLavelBloks>
                  <Label>
                    <ModalText>
                      Ваше ім'я<ReqStar>*</ReqStar>
                    </ModalText>
                    <Input
                      type="text"
                      placeholder="Ваше ім'я"
                      value={firstName}
                      onChange={(e) =>
                        setFirstName(e.target.value)
                      }
                      required
                    />
                  </Label>
                  <Label>
                    <ModalText>
                      Ваше прізвище<ReqStar>*</ReqStar>
                    </ModalText>
                    <Input
                      type="text"
                      placeholder="Ваше прізвище"
                      value={lastName}
                      onChange={(e) =>
                        setLastName(e.target.value)
                      }
                      required
                    />
                  </Label>
                </FormLavelBloks>
                <FormLavelBloks>
                  <Label>
                    <ModalText>
                      Номер телефону<ReqStar>*</ReqStar>
                    </ModalText>
<Input
  type="tel" // Змінив тип на "tel" для номеру телефону
  placeholder="Номер телефону"
  value={number}
  onChange={(e) => {
    const inputNumber = e.target.value;
    setNumber(inputNumber); // Змінив тут, щоб зберігати всі зміни в змінну `number`
  }}
  required
/>
                  </Label>
                  <Label>
                    <ModalText>
                      Місто<ReqStar>*</ReqStar>
                    </ModalText>
                    <Input
                      type="text"
                      placeholder="Місто" // Змінив "Країна" на "Місто"
                      value={country} // Змінив "city" на "country"
                      onChange={(e) =>
                        setCountry(e.target.value)
                      }
                      required
                    />
                  </Label>
                </FormLavelBloks>
                <FormLavelBloks>
                  <Label>
                    <ModalText>Тип магазину</ModalText>
                    <ul>
                      <ModalShopTypeItem>
                        <CheckBox
                          type="checkbox"
                          checked={onlineShop}
                          onChange={(e) =>
                            setOnlineShop(e.target.checked)
                          }
                        />
                        <ModalShopTypeText> Онлайн магазин</ModalShopTypeText>
                      </ModalShopTypeItem>
                      <ModalShopTypeItem>
                        <CheckBox
                          type="checkbox"
                          checked={offlineShop}
                          onChange={(e) =>
                            setOfflineShop(e.target.checked)
                          }
                        />
                        <ModalShopTypeText>
                          Офлайн точка продажу:
                        </ModalShopTypeText>
                      </ModalShopTypeItem>
                      <ModalShopTypeItem>
                        <CheckBox
                          type="checkbox"
                          checked={socialMedia}
                          onChange={(e) =>
                            setSocialMedia(e.target.checked)
                          }
                        />
                        <ModalShopTypeText>
                          Сторінка у соцмережах:
                        </ModalShopTypeText>
                      </ModalShopTypeItem>
                    </ul>
                  </Label>
                  <Label>
                    <ModalText>Посилання:</ModalText>
                    <Input
                      type="text"
                      placeholder="myshop.com"
                      value={link}
                      onChange={(e) =>
                        setLink(e.target.value)
                      }
                    />
                  </Label>
                </FormLavelBloks>
                <FormLavelBloks>
                  <Button
                    text={"Зареєструватись"}
                    onClick={subForm}
                  />
                  <Button text={"Закрити"} onClick={closeModal} />
                </FormLavelBloks>
              </ModalForm>
            )}
          </ModalContent>
        </ModalBackground>
      )}
    </Container>
  );
};

export default SaleProgramPage;