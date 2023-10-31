import React, { useEffect, useState } from 'react';
import {
    CostumerStatus,
    CostumerStatusItem,
    CostumerStatusinput,
    DeliveryInfoBlock,
    Description,
    FirstOrdersHeaderItem,
    Form,
    HeaderBlock,
    LastOrdersHeaderItem,
    OrderDetails,
    OrderForm,
    OrderSummary,
    OrderThumb,
    OrdersHeaderItem,
    OrdersHeaders,
    OrdersImage,
    OrdersItem,
    OrdersItemBlock,
    OrdersThumb,
    Select,
    SubmitButton,
    Textarea,
    Title,
    Titles,
} from './OrderPlacementStyled';
import { useSelector } from 'react-redux';
import { loggedInSelector, userSelectorEmail, userSelectorNumber, userSelectorfirstName, userSelectorlastName } from '../../redux/auth/selectors';
import LoginForm from '../Header/LogIn/LoginForm';
import RegisterForm from '../Header/LogIn/RegisterForm';
import { selectCart } from '../../redux/cart/selectors';
import { Amount, AmountBlock, CounterBlock, DescriptionBlock, GoodsBlock, ImageBlock, ItemNameLink, PriceBlock, Thumb } from '../Header/ShopingList/ShopingListStyled';
import axios from 'axios';
import { nanoid } from '@reduxjs/toolkit';


const OrderPlacement = () => {
    const isLogin = useSelector(loggedInSelector);
    const [customerType, setCustomerType] = useState("without-registered");
    const [warehouses, setWarehouses] = useState([]); // Список відділень
    const [searchCities, setSearchCities] = useState([]); // Список населених пунктів (складів) для обраного міста
    const [searchText, setSearchText] = useState(""); // Текст для пошуку міст
    const [searchWarehouses, setSearchWarehouses] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [courierDelivery, setCourierDelivery] = useState(false);
    const userFirstName = useSelector(userSelectorfirstName);
    const userLastName = useSelector(userSelectorlastName);
    const userNumber = useSelector(userSelectorNumber);
    const userEmail = useSelector(userSelectorEmail);


        const [formData, setFormData] = useState({
        email: userEmail || '',
        firstName: userFirstName || '',
        lastName: userLastName || '',
        number: userNumber || null,
        city: '',
        warehouse: '',
        paymentMethod: "",
        deliveryMethod:"Доставка на відділення",
        comments: "",
        address: "", 
        building: "", 
        apartment: "" 
    });
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

const showOrderPlacedModal = () => {
  setIsOrderPlaced(true);
};

const hideOrderPlacedModal = () => {
  setIsOrderPlaced(false);
};
    const cartItems = useSelector(selectCart);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(formData.deliveryMethod);
        if (formData.deliveryMethod === 'Курєрська доставка') {
            setCourierDelivery(false)
        } else if(formData.deliveryMethod === 'Доставка на відділення') {
            setCourierDelivery(true)
        }
        console.log(courierDelivery);
    };

    let firstWord = ''
    const words = searchText.trim().split(" ");

    if (words.length > 1) {
        firstWord = words[0];
    }

    const apiKey = 'c9cfd468abe7e624f872ca0e59a29184';

    const handleCityChange = () => {
        
        const requestData = {
            apiKey: apiKey,
            modelName: "Address",
            calledMethod: "getSettlements",
            methodProperties: {
                Page: "1",
                FindByString: searchText,
                Limit: "60"
            }
        };

        fetch("https://api.novaposhta.ua/v2.0/json/", {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data.success) {
                    setSearchCities(data.data);
                    
                }
            })
            .catch((error) => {
                console.error("Помилка запиту до API Нової Пошти для населених пунктів", error);
            });
    };
    const handleWarehousesChange = () => {

        const requestData = {
            apiKey: apiKey,
            modelName: "Address",
            calledMethod: "getWarehouses",
            methodProperties: {
                CityName: firstWord,
                Page: "1",
                Limit: "4105",
                WarehouseId: searchWarehouses,
            }
        };
         if (searchWarehouses) {
        requestData.methodProperties.WarehouseRef = searchWarehouses;
    }
        fetch('https://api.novaposhta.ua/v2.0/json/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    const dataWarehouses = data.data
                    setWarehouses(dataWarehouses);
                    console.log(data.data);
                    console.log(warehouses);
                    console.log(warehouses.length);
                }

            })
            .catch(error => {
                console.error("Помилка запиту до API Нової Пошти для населених пунктів", error);
            });
    }
    
    useEffect(() => {

    setSearchWarehouses('')
  
    if (words.length > 1) {
        firstWord = words[0];
        }
        

        handleCityChange();
        console.log(formData);
}, [ searchText, ]);

useEffect(() => {
        handleWarehousesChange(); 
}, [ firstWord]);

const handleSearchTextChange = async(e) => {
     const text = await e.target.value;
    console.log(text);
    setSearchText(text);
    }
    
      const [itemQuantities, setItemQuantities] = useState(
    cartItems.reduce((quantities, item) => {
      quantities[item.id] = item.quantity; // Використовуємо кількість із cartItems або 1, якщо вона не вказана
      return quantities;
    }, {})
  );
     const totalCost = cartItems.reduce(
    (total, item) => total + item.price * itemQuantities[item.id],
    0
  );
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        if (!searchText || (!searchWarehouses && courierDelivery)) {
            alert('Будь ласка, виберіть місто та відділення');
            setIsSubmitting(false);
            return;
        }

        if (courierDelivery && (!formData.address || !formData.building || !formData.apartment)) {
            alert('Будь ласка, заповніть адресу, будинок та квартиру для курєрської доставки');
            setIsSubmitting(false);
            return;
        }
    

        const orderedItems = cartItems.map((item) => ({
            productId: item.id,
            images: item.images,
            name: item.name,
            code: item.code.toString(),
            quantity: itemQuantities[item.id],
            amount: item.price * itemQuantities[item.id],
        }));

        const dataToSend = {
            ...formData,
            email: userEmail || formData.email,
            firstName: userFirstName || formData.firstName,
            lastName: userLastName || formData.lastName,
            number: userNumber || formData.number,
            city: searchText,
            deliveryMethod: formData.deliveryMethod,
            warehouse: searchWarehouses,
            orderedItems: orderedItems,
            amount: totalCost,
            status: "Новий",
            address: "", 
            building: "", 
            apartment: "" 
        };

        const ordersUrl = 'https://beauty-blossom-backend.onrender.com/api/orders';

        axios.post(ordersUrl, dataToSend)
            .then(response => {
                console.log('Відповідь від сервера:', response.data);

                // Показати модальне вікно "Товари замовлено"
                showOrderPlacedModal();

                // Очистити дані відповідно до вашого стейту
                setFormData({
                    email: userEmail || '',
                    firstName: userFirstName || '',
                    lastName: userLastName || '',
                    number: userNumber || null,
                    city: '',
                    warehouse: '',
                    paymentMethod: '',
                    deliveryMethod: '',
                    comments: '',
                    address: '',
                    building: '',
                    apartment: '',
                })})
            .catch(error => {
                console.error('Сталася помилка:', error);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <OrderForm>
            <OrderDetails>
                <Title>Оформлення замовлення</Title>
                {!isLogin &&
                    <CostumerStatus>
                        <CostumerStatusItem htmlFor="registered">
                            <input
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
                                type="radio"
                                id="without-registered"
                                name="customer"
                                value="without-registered"
                                checked={customerType === "without-registered"}
                                onChange={() => setCustomerType("without-registered")}
                            />
                            Продовжити без реєстрації
                        </CostumerStatusItem>
                    </CostumerStatus>}
                {customerType === "registered" && !isLogin && <LoginForm />}
                {customerType === "not-registered" && !isLogin && <RegisterForm />}
                {customerType === "without-registered" || isLogin ? (
                    <Form onSubmit={handleFormSubmit}>
                        <DeliveryInfoBlock>
                            <Titles>КОНТАКТНІ ДАННІ</Titles>
                            <label htmlFor="firstName"></label>
                            <CostumerStatusinput
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder='Введіть імя отримувача*'
                                value={formData.firstName || ''}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="lastName"></label>
                            <CostumerStatusinput
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder='Введіть прізвище отримувача*'
                                value={formData.lastName || ''}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="number"></label>
                            <CostumerStatusinput
                                type="text"
                                id="number"
                                name="number"
                                placeholder='Введіть номер телефону отримувача*'
                                value={formData.number || ''}
                                onChange={handleInputChange}
                            />
                            <Titles>ДАННІ ДОСТАВКИ</Titles>
                            <Select
  id="deliveryMethod"
  name="deliveryMethod"
  value={formData.deliveryMethod} // Bind to formData
  onChange={handleInputChange}
>
                                
                                <option value="Доставка на відділення">Доставка на відділення</option>
                                <option value="Курєрська доставка">Курєрська доставка</option>
                                
                            </Select>
                            
                            <label htmlFor="city"></label>
                            <CostumerStatusinput
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city || searchText}
                                onChange={handleSearchTextChange}
                                list="citiesList"
                                placeholder="Введіть назву міста"
                            />
                            <datalist id="citiesList">
                                <label htmlFor="searchCities">Оберіть населений пункт (склад)</label>
                                <option value="">Оберіть населений пункт</option>
                                {searchCities.filter((searchCity) =>
                                    searchCity.Description.toLowerCase().includes(formData.city.toLowerCase())).map(searchCity => (
                                        <option key={nanoid()} value={`${searchCity.Description} ${searchCity.RegionsDescription} ${searchCity.AreaDescription}`} >{searchCity.Description} </option>
                                    ))}
                            </datalist>
                            {courierDelivery ? (
                                
                                    
                                <OrderDetails>
                                    <label htmlFor="address"></label>
                                    <CostumerStatusinput
                                        type="text"
                                        id="address"
                                        name="address"
                                        placeholder='Адреса*'
                                        value={formData.address || ''}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="house"></label>
                                    <CostumerStatusinput
                                        type="text"
                                        id="house"
                                        name="house"
                                        placeholder='Будинок*'
                                        value={formData.house || ''}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="apartment"></label>
                                    <CostumerStatusinput
                                        type="text"
                                        id="apartment"
                                        name="apartment"
                                        placeholder='Квартира*'
                                        value={formData.apartment || ''}
                                        onChange={handleInputChange}
                                    />
                                </OrderDetails>
                                    
                                
                            ) : (

                                    
                                <OrderDetails>
                                    <label htmlFor="searchWarehouses"></label>
                                    <CostumerStatusinput
                                        type="text"
                                        id="warehouse"
                                        name="warehouse"
                                        value={searchWarehouses}
                                        placeholder="відділення*"
                                        list="warehousesList"
                                        onChange={(e) => setSearchWarehouses(e.target.value)}
                                    />
                                    <datalist id="warehousesList">
                                        <option value="">Оберіть відділення</option>
                                        {warehouses.filter((warehouse) =>
                                            warehouse.Description.toLowerCase().includes(searchWarehouses.toLowerCase())).map(warehouse => (
                                                <option key={nanoid()} value={warehouse.Description}>
                                                    {warehouse.Description}
                                                </option>
                                            ))}
                                    </datalist>
                                    
                                </OrderDetails>

                            )}
                            <DeliveryInfoBlock>
                                
                                <Titles>СПОСІБ ОПЛАТИ</Titles>
                                <Select id="paymentMethod" name="paymentMethod" onChange={handleInputChange}>
                                    <option value="Оплата за реквізитами">Оплата за реквізитами</option>
                                    
                                    <option value="Післяплата">Післяплата</option>
                                </Select>
                                <Titles>КОМЕНТАР ДО ЗАМОВЛЕННЯ</Titles>
                                <label htmlFor="comments"></label>
<Textarea
  id="comments"
  name="comments"
  rows="4"
  value={formData.comments || ''} // Встановлюємо значення з formData
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
                
                        <div>
                            <h3>Замовлення</h3>
                            <OrdersThumb>

<table cols ="5">
  <thead style={{bordeRadius: "25px" }}>
    <tr>
      <HeaderBlock><FirstOrdersHeaderItem> s</FirstOrdersHeaderItem></HeaderBlock>
      <HeaderBlock><OrdersHeaderItem><p>Найменування товару</p></OrdersHeaderItem></HeaderBlock>
      <HeaderBlock><OrdersHeaderItem>Кількість</OrdersHeaderItem></HeaderBlock>
      <HeaderBlock><OrdersHeaderItem>Ціна</OrdersHeaderItem></HeaderBlock>
      <HeaderBlock><LastOrdersHeaderItem>Сума</LastOrdersHeaderItem></HeaderBlock>
    </tr>
  </thead>
  <tbody>
    {cartItems.map((item) => (
      <tr key={item.id}>
        <OrdersItem>
          <OrdersImage src={item.images} alt="itemImage" />
        </OrdersItem>
        <OrdersItem>
          <ItemNameLink>{item.name} <br/> Код товару: {item.code}</ItemNameLink>
        </OrdersItem>
        <OrdersItem>
          {itemQuantities[item.id]}
        </OrdersItem>
        <OrdersItem>
          {item.price} грн
        </OrdersItem>
        <OrdersItem>
          {item.price * itemQuantities[item.id]} грн
        </OrdersItem>
      </tr>
    ))}
  </tbody>
</table>
                                <Amount style={{ fontWeight: 'bold', }} >Загальна сума: {totalCost} грн</Amount>
                                <Description>*вартість доставки здійснюється за рахунок покупця</Description>
                                
                            </OrdersThumb>

                               
                                <SubmitButton type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Замовлення в обробці...' : 'Оформити замовлення'}
                                </SubmitButton>

                        </div>
                    </Form>) : (null)}
            </OrderDetails>
        </OrderForm>
    );
};

export default OrderPlacement;

//411
//430