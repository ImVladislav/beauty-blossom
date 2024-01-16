import React, { useEffect, useState } from "react";
import {
  CityItem,
  CityitemsBlock,
  Citylist,
  CostumerStatus,
  CostumerStatusItem,
  CostumerStatusinput,
  DeliveryInfoBlock,
  Description,
  Form,
  HeaderBlocRight,
  HeaderBlock,
  HeaderBlockLeft,
  ItemNameItem,
  LoaderThumb,
  OrderDetails,
  OrderForm,
  OrdersImage,
  OrdersItem,
  OrdersItemlist,
  OrdersThumb,
  Select,
  SelectOpton,
  SubmitButton,
  TableThumb,
  Textarea,
  Title,
  Titles,
  ItemAmount,
  Amount,
  ItemNameLink,
} from "./OrderPlacementStyled";
import { useDispatch, useSelector } from "react-redux";
import {
  loggedInSelector,
  optUserSelector,
  userSelectorEmail,
  userSelectorNumber,
  userSelectorfirstName,
  userSelectorlastName,
} from "../../redux/auth/selectors";

import { selectCart } from "../../redux/cart/selectors";

import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { Container } from "../../shared/styles/Container";
import { Loader } from "../../shared/components/Loader/Loader";
import { OrderModalWindow } from "./OrderModal";
import { deleteAll } from "../../redux/cart/slice";
import Login from "../Login/Login";
import Register from "../Register/Register";

const OrderPlacement = () => {
  const dispatch = useDispatch();

  const isLogin = useSelector(loggedInSelector);
  const [customerType, setCustomerType] = useState("without-registered");
  const [warehouses, setWarehouses] = useState([]); // Список відділень
  const [searchCities, setSearchCities] = useState([]); // Список населених пунктів (складів) для обраного міста
  const [searchText, setSearchText] = useState(""); // Текст для пошуку міст
  const [searchWarehouses, setSearchWarehouses] = useState("");
  const [isDropdownCityVisible, setDropdownCityVisible] = useState(false);
  const [isDropdownWarehouseVisible, setDropdownWarehouseVisible] =
    useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courierDelivery, setCourierDelivery] = useState(false);
  const [warehouseSearch, setWarehouseSearch] = useState(false);

  const [orderNumber, setOrderNumber] = useState("");
  const userFirstName = useSelector(userSelectorfirstName);
  const userLastName = useSelector(userSelectorlastName);
  const userNumber = useSelector(userSelectorNumber);
  const [courier, setCourier] = useState("Доставка на відділення");
  const userEmail = useSelector(userSelectorEmail);
  const isOptUser = useSelector(optUserSelector);

  const [formData, setFormData] = useState({
    email: userEmail || "",
    firstName: userFirstName || "",
    lastName: userLastName || "",
    number: userNumber || "+380",
    city: "",
    paymentMethod: "Оплата за реквізитами",
    deliveryMethod: courier,
    orderNumber: orderNumber,
    isOptUser: isOptUser,
  });

  const showOrderPlacedModal = () => {
    setIsModalOpen(true);
  };

  const cartItems = useSelector(selectCart);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const apiKey = "c9cfd468abe7e624f872ca0e59a29184";

  function logCurrentTime12HourFormat() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const milliseconds = currentTime.getMilliseconds();

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMilliseconds =
      milliseconds < 10
        ? `00${milliseconds}`
        : milliseconds < 100
        ? `0${milliseconds}`
        : milliseconds;

    setOrderNumber(
      `${hours}${formattedMinutes}${formattedSeconds}${formattedMilliseconds}`
    );
  }

  useEffect(() => {
    logCurrentTime12HourFormat();
  }, []);

  useEffect(() => {
    if (formData.deliveryMethod === "Доставка на відділення") {
      setCourierDelivery("1");
    }

    if (formData.deliveryMethod === "Доставка кур'єром") {
      setCourierDelivery("2");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleInputChange]);

  const handleCityChange = async () => {
    try {
      const requestData = {
        apiKey: apiKey,
        modelName: "Address",
        calledMethod: "searchSettlements",
        methodProperties: {
          Page: "1",
          CityName: searchText,
          Limit: "50",
        },
      };

      const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const addresses = data.data[0].Addresses;

      if (data.success) {
        setSearchCities(addresses);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleWarehousesChange = async () => {
    try {
      const requestData = {
        apiKey: apiKey,
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          CityRef: warehouseSearch,
          Limit: "4200",
        },
      };

      if (searchWarehouses) {
        requestData.methodProperties.WarehouseRef = searchWarehouses;
      }

      const response = await fetch(
        "https://api.novaposhta.ua/v2.0/json/Address",
        {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setWarehouses(data.data);
      }
    } catch (error) {
      console.error(
        "Помилка запиту до API Нової Пошти для населених пунктів",
        error
      );
    }
  };

  useEffect(() => {
    if (searchText) {
      handleCityChange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  useEffect(() => {
    if (warehouseSearch) {
      handleCityChange();
    }
    handleWarehousesChange();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWarehouses]);

  const totalCost = isOptUser
    ? cartItems.reduce(
        (total, item) => total + item.priceOPT * item.quantity,
        0
      )
    : cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (totalCost === 0) {
      toast.error("Для замовлення потрібно щось обрати!");
      setIsSubmitting(false);
      return;
    }
    if (isOptUser && totalCost < 2500) {
      toast.error("Мінімальна сума замовлення 2500 грн!");
      setIsSubmitting(false);
      return;
    } else {
      setIsSubmitting(true);
    }

    if (courierDelivery === "1") {
      if (!searchText || (!searchWarehouses && courierDelivery)) {
        toast.error("Будь ласка, виберіть місто та відділення");
        setIsSubmitting(false);

        return;
      }
    }
    if (orderNumber === "") {
      toast.error(
        "Щось пішло не так, спробуйте ще раз, або зверніться до адміністратора"
      );
      setIsSubmitting(false);
      return;
    }
    if (!formData.firstName) {
      toast.error("Введіть ім'я отримувача.");
      setIsSubmitting(false);
      return;
    }
    if (!formData.lastName) {
      toast.error("Введіть прізвище отримувача.");
      setIsSubmitting(false);
      return;
    }

    const phonePattern = /^\+380\d{9}$/;
    const trimedVlaue = formData.number;

    const isPhoneValid = phonePattern.test(trimedVlaue);

    if (!isPhoneValid) {
      toast.error("Введіть коректний номер телефону з 12 цифр, включаючи +380");
      setIsSubmitting(false);
      return;
    }
    if (!formData.number) {
      toast.error("Введіть номер телефону отримувача.");
      setIsSubmitting(false);
      return;
    }
    if (!formData.email) {
      toast.error("Введіть адресу вашої пошти.", {
        className: "custom-toast",
      });
      setIsSubmitting(false);
      return;
    }

    const orderedItems = cartItems.map((item) => ({
      productId: item.id || item.productId,
      images: item.images,
      name: item.name,
      code: item.code.toString(),
      quantity: item.quantity,
      amount: (isOptUser ? item.priceOPT : item.price) * item.quantity,
    }));

    const dataToSendCourier = {
      ...formData,
      email: userEmail || formData.email,
      firstName: userFirstName || formData.firstName,
      lastName: userLastName || formData.lastName,
      number: userNumber || formData.number,
      city: searchText,
      deliveryMethod: formData.deliveryMethod,
      comments: formData.comments,
      orderedItems: orderedItems,
      amount: totalCost,
      status: "Новий",
      address: formData.address,
      building: formData.house,
      apartment: formData.apartment,
      orderNumber: orderNumber,
      isOptUser: isOptUser,
    };

    const dataToSendWarehouse = {
      ...formData,
      email: userEmail || formData.email,
      firstName: userFirstName || formData.firstName,
      lastName: userLastName || formData.lastName,
      number: userNumber || formData.number,
      city: searchText,
      comments: formData.comments,
      deliveryMethod: formData.deliveryMethod,
      warehouse: searchWarehouses === "" ? "ewq" : searchWarehouses,
      orderedItems: orderedItems,
      amount: totalCost,
      status: "Новий",
      orderNumber: orderNumber,
      isOptUser: isOptUser,
    };
    const removeCartItem = async () => {
      try {
        await axios.delete(`/basket/`);
      } catch (error) {
        console.error("Помилка видалення товарів з кошика:", error);
      }
    };
    const ordersUrl = "https://beauty-blossom-backend.onrender.com/api/orders";

    axios
      .post(
        ordersUrl,
        courier === "no" ? dataToSendCourier : dataToSendWarehouse
      )
      .then((response) => {
        if (isLogin) {
          removeCartItem();
        }

        dispatch(deleteAll());
        showOrderPlacedModal();

        setFormData({
          email: userEmail || "",
          firstName: userFirstName || "",
          lastName: userLastName || "",
          number: userNumber || null,
          city: "",
          orderNumber: orderNumber,
          paymentMethod: "",
          deliveryMethod: "",
          comments: "",
          address: "",
          building: "",
          apartment: "",
          isOptUser: isOptUser,
        });
      })
      .then(setIsModalOpen(true))
      .catch((error) => {
        console.error("Сталася помилка:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  function throttle(func, delay) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;

      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), delay);
      }
    };
  }

  const handleSearchTextChange = throttle((e) => {
    const value = e.target.value;
    setSearchText(value);
    if (value.length > 2) {
      setDropdownCityVisible(searchCities.length < 40);
    }

    setDropdownCityVisible(value.length > 2);
  }, 300);

  const handleSearchTextChangeWarehose = throttle((e) => {
    const value = e.target.value;
    setSearchWarehouses(value);

    console.log(warehouses);
    if (value.length > 2) {
      setDropdownWarehouseVisible(searchWarehouses.length < 20);
    }
    setDropdownWarehouseVisible(value.length >= 1);
  }, 300);

  const handleCitySelect = (city, DeliveryCity) => {
    const selectedCityWithArea = `${city}`;
    setSearchText(selectedCityWithArea);
    setDropdownCityVisible(false);
    setSearchWarehouses("");
    handleWarehousesChange();
    setWarehouseSearch(DeliveryCity);
  };

  const handleWarehouseSelect = (warehouse) => {
    const selectedWarehouse = `${warehouse}`;
    setSearchWarehouses(selectedWarehouse);
    setDropdownWarehouseVisible(false);
  };
  const onRegisterSuccess = () => {
    setCustomerType("registered"); // Зміна на true при успішній реєстрації
    toast.info("Ви успішно зареєструвалися, авторизуйтеся");
  };

  return (
    <Container>
      <OrderForm>
        <OrderDetails>
          <Title>Оформлення замовлення</Title>
          {!isLogin && (
            <CostumerStatus>
              <CostumerStatusItem htmlFor="registered">
                <input
                  style={{ marginRight: "3px" }}
                  type="radio"
                  id="registered"
                  name="customer"
                  value="registered"
                  checked={customerType === "registered"}
                  onChange={() => setCustomerType("registered")}
                />
                Я зареєстрований
              </CostumerStatusItem>

              <CostumerStatusItem htmlFor="not-registered">
                <input
                  style={{ marginRight: "3px" }}
                  type="radio"
                  id="not-registered"
                  name="customer"
                  value="not-registered"
                  checked={customerType === "not-registered"}
                  onChange={() => setCustomerType("not-registered")}
                />
                Зареєструватись?
              </CostumerStatusItem>
              <CostumerStatusItem htmlFor="without-registered">
                <input
                  style={{ marginRight: "3px" }}
                  type="radio"
                  id="without-registered"
                  name="customer"
                  value="without-registered"
                  checked={customerType === "without-registered"}
                  onChange={() => setCustomerType("without-registered")}
                />
                Продовжити без реєстрації
              </CostumerStatusItem>
            </CostumerStatus>
          )}
          {customerType === "registered" && !isLogin && <Login />}
          {customerType === "not-registered" && !isLogin && (
            <Register onRegisterSuccess={onRegisterSuccess} />
          )}
          {customerType === "without-registered" || isLogin ? (
            <Form onSubmit={handleFormSubmit}>
              <DeliveryInfoBlock>
                <Titles>КОНТАКТНІ ДАННІ</Titles>
                <label htmlFor="firstName"></label>
                <CostumerStatusinput
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Введіть імя отримувача*"
                  value={formData.firstName || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="lastName"></label>
                <CostumerStatusinput
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Введіть прізвище отримувача*"
                  value={formData.lastName || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="number"></label>
                <CostumerStatusinput
                  type="text"
                  id="number"
                  name="number"
                  placeholder="Введіть номер телефону починаючи з +380 *"
                  value={formData.number || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="email"></label>
                <CostumerStatusinput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Введіть адресу вашої пошти*"
                  value={formData.email || ""}
                  onChange={handleInputChange}
                />
                <Titles>ДАННІ ДОСТАВКИ</Titles>
                <Select
                  id="deliveryMethod"
                  name="deliveryMethod"
                  value={formData.deliveryMethod}
                  onChange={(e) => {
                    handleInputChange(e);
                    if (e.target.value === "Доставка на відділення") {
                      setCourier("Доставка на відділення");
                    } else if (e.target.value === "Доставка кур'єром") {
                      setCourier("Доставка кур'єром");
                    }
                  }}
                >
                  <option value="Доставка на відділення">
                    Доставка на відділення
                  </option>
                  <option value="Доставка кур'єром">Доставка кур'єром</option>
                </Select>

                <div>
                  <div style={{ position: "relative" }}>
                    <CostumerStatusinput
                      autoComplete="none"
                      type="text"
                      id="city"
                      name="city"
                      value={searchText}
                      onClick={() => {
                        setDropdownCityVisible(searchCities.length <= 40);
                        setDropdownWarehouseVisible(false);
                        setDropdownCityVisible(searchCities.length !== 0);
                      }}
                      onChange={handleSearchTextChange}
                      placeholder="Введіть назву міста"
                      onBlur={() => {
                        setTimeout(() => {
                          setDropdownCityVisible(false);
                        }, 500);
                      }}
                    />
                    {isDropdownCityVisible && (
                      <Citylist>
                        <CityitemsBlock>
                          {searchCities.length === 0 ? (
                            <LoaderThumb>
                              <Loader size="60px" pageHeight="60px" />
                            </LoaderThumb>
                          ) : (
                            searchCities.map((searchCity) => (
                              <li
                                key={nanoid()}
                                onClick={() => {
                                  handleCitySelect(
                                    searchCity.Present,
                                    searchCity.DeliveryCity
                                  );
                                }}
                              >
                                <CityItem>{searchCity.Present},</CityItem>
                              </li>
                            ))
                          )}
                        </CityitemsBlock>
                      </Citylist>
                    )}
                  </div>
                </div>
                {courierDelivery === "2" ? (
                  <OrderDetails>
                    <label htmlFor="address"></label>
                    <CostumerStatusinput
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Адреса*"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="building"></label>
                    <CostumerStatusinput
                      type="text"
                      id="building"
                      name="building"
                      placeholder="Будинок*"
                      value={formData.building}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="apartment"></label>
                    <CostumerStatusinput
                      type="text"
                      id="apartment"
                      name="apartment"
                      placeholder="Квартира*"
                      value={formData.apartment}
                      onChange={handleInputChange}
                    />
                  </OrderDetails>
                ) : (
                  <OrderDetails>
                    <div>
                      <div style={{ position: "relative" }}>
                        <CostumerStatusinput
                          autoComplete="none"
                          type="text"
                          id="warehouse"
                          name="warehouse"
                          value={searchWarehouses}
                          onChange={handleSearchTextChangeWarehose}
                          placeholder="Введіть адресу відділення"
                          onClick={() => {
                            setDropdownWarehouseVisible(
                              searchCities.length <= 20
                            );
                            handleWarehousesChange();
                          }}
                          onBlur={() => {
                            setTimeout(() => {
                              setDropdownWarehouseVisible(false);
                            }, 500);
                          }}
                        />
                        {warehouses.length < 4199 &&
                          isDropdownWarehouseVisible && (
                            <Citylist>
                              <CityitemsBlock>
                                {warehouses.length === 0 ? (
                                  <LoaderThumb>
                                    <Loader size="60px" pageHeight="60px" />
                                  </LoaderThumb>
                                ) : (
                                  warehouses
                                    .filter((warehouse) =>
                                      warehouse.Description.toLowerCase().includes(
                                        searchWarehouses.toLowerCase()
                                      )
                                    )
                                    .map((warehouse) => (
                                      <li
                                        key={nanoid()}
                                        onClick={() =>
                                          handleWarehouseSelect(
                                            warehouse.Description
                                          )
                                        }
                                      >
                                        <CityItem>
                                          {warehouse.Description}
                                        </CityItem>
                                      </li>
                                    ))
                                )}
                              </CityitemsBlock>
                            </Citylist>
                          )}
                      </div>
                    </div>
                  </OrderDetails>
                )}
                <DeliveryInfoBlock>
                  <Titles>СПОСІБ ОПЛАТИ</Titles>
                  <Select
                    id="paymentMethod"
                    name="paymentMethod"
                    onChange={handleInputChange}
                  >
                    <SelectOpton value="Оплата за реквізитами">
                      Оплата за реквізитами
                    </SelectOpton>

                    <SelectOpton value="Післяплата">Післяплата</SelectOpton>
                  </Select>
                  <Titles>КОМЕНТАР ДО ЗАМОВЛЕННЯ</Titles>
                  <label htmlFor="comments"></label>
                  <Textarea
                    id="comments"
                    name="comments"
                    rows="4"
                    value={formData.comments} // Встановлюємо значення з formData
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        comments: e.target.value, // Оновлюємо лише поле "comments"
                      });
                    }}
                  ></Textarea>
                </DeliveryInfoBlock>

                <label htmlFor="deliveryMethod"> </label>
              </DeliveryInfoBlock>

              <TableThumb>
                <Titles>Замовлення</Titles>
                <OrdersThumb>
                  <table
                    cols="5"
                    style={{
                      borderCollapse: "separate",
                      borderSpacing: "unset",
                    }}
                  >
                    <thead style={{ bordeRadius: "25px" }}>
                      <tr>
                        <HeaderBlockLeft></HeaderBlockLeft>
                        <HeaderBlock>Найменування товару</HeaderBlock>
                        <HeaderBlock>Кількість</HeaderBlock>
                        <HeaderBlock>Ціна</HeaderBlock>
                        <HeaderBlocRight>Сума</HeaderBlocRight>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <OrdersItemlist key={item._id}>
                          <OrdersItem>
                            <OrdersImage src={item.images} alt="itemImage" />
                          </OrdersItem>
                          <ItemNameItem>
                            <ItemNameLink>
                              {item.name} <br /> Код товару: {item.code}
                            </ItemNameLink>
                          </ItemNameItem>
                          <OrdersItem>
                            <ItemAmount>{item.quantity}</ItemAmount>
                          </OrdersItem>
                          <OrdersItem>
                            <ItemAmount>
                              {isOptUser ? item.priceOPT : item.price} грн
                            </ItemAmount>
                          </OrdersItem>
                          <OrdersItem>
                            <ItemAmount>
                              {(isOptUser ? item.priceOPT : item.price) *
                                item.quantity}
                              грн
                            </ItemAmount>
                          </OrdersItem>
                        </OrdersItemlist>
                      ))}
                    </tbody>
                  </table>
                  <Amount style={{ fontWeight: "bold" }}>
                    Загальна сума: {totalCost} грн
                  </Amount>
                  <Description>
                    *Вартість доставки здійснюється за рахунок покупця
                  </Description>
                  <Description>
                    *Щоб змінити кількість товарів, поверніться назад до корзини
                  </Description>
                </OrdersThumb>

                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting
                    ? "Замовлення в обробці..."
                    : "Оформити замовлення"}
                </SubmitButton>
              </TableThumb>
            </Form>
          ) : null}
        </OrderDetails>
      </OrderForm>
      <OrderModalWindow orderNumber={orderNumber} isOpen={isModalOpen} />
    </Container>
  );
};

export default OrderPlacement;

//411
//430
//619
//792
