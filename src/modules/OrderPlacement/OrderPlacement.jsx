import React, { useEffect, useState } from 'react';
import {
    CityItem,
    CityitemsBlock,
    Citylist,
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
    OrdersHeaderItem,
    OrdersImage,
    OrdersItem,
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
import { Amount, ItemNameLink } from '../Header/ShopingList/ShopingListStyled';
import axios from 'axios';
import { nanoid } from '@reduxjs/toolkit';


const OrderPlacement = () => {
    const isLogin = useSelector(loggedInSelector);
    const [customerType, setCustomerType] = useState("without-registered");
    const [warehouses, setWarehouses] = useState([]); // Список відділень
    const [searchCities, setSearchCities] = useState([]); // Список населених пунктів (складів) для обраного міста
    const [searchText, setSearchText] = useState(""); // Текст для пошуку міст
    const [searchWarehouses, setSearchWarehouses] = useState("");
    const [isDropdownCityVisible, setDropdownCityVisible] = useState(false);
    const [isDropdownWarehouseVisible, setDropdownWarehouseVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [courierDelivery, setCourierDelivery] = useState(false);
    const userFirstName = useSelector(userSelectorfirstName);
    const userLastName = useSelector(userSelectorlastName);
    const userNumber = useSelector(userSelectorNumber);
    const userEmail = useSelector(userSelectorEmail);
  
  
  const [selectedCity, setSelectedCity] = useState('');

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
        };
    };

    let firstWord = ''
    const words = searchText.trim().split(" ");
        firstWord = words[0];

    const apiKey = 'c9cfd468abe7e624f872ca0e59a29184';

const handleCityChange = async () => {
  try {
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

    const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    if (data.success) {
      setSearchCities(data.data);
    }
  } catch (error) {
    console.error("Помилка при запиті до API Нової Пошти для населених пунктів", error);
  }
};
const handleWarehousesChange = async () => {
  try {
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

    const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.success) {
      setWarehouses(data.data);

    }
  } catch (error) {
    console.error("Помилка запиту до API Нової Пошти для населених пунктів", error);
  }
};
    
    useEffect(() => {
        
    if (words.length > 1) {
        firstWord = words[0];
        }
        handleCityChange();
}, [ searchText ]);



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

                showOrderPlacedModal();

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

const handleSearchTextChange = throttle( (e) => {
console.log(searchCities.length);
    const value = e.target.value;
    setSearchText(value);
    if (value.length > 2) {
        setDropdownCityVisible(searchCities.length < 40) 
        
    } 

    setDropdownCityVisible(value.length > 2);
}, 300); 
    

    const handleSearchTextChangeWarehose = throttle( (e) => {

    const value = e.target.value;
        setSearchWarehouses(value);
        
    if (value.length > 2) {
      setDropdownWarehouseVisible (searchWarehouses.length < 40) 
    }
    setDropdownWarehouseVisible(value.length > 2);
}, 300); 

    

const handleCitySelect = (city, areaDescription) => {
  const selectedCityWithArea = `${city} ${areaDescription}`;
  setSearchText(selectedCityWithArea);
    setDropdownCityVisible(false);
    setSearchWarehouses('')
    handleWarehousesChange()
    console.log(searchCities);
    };
    
    const handleWarehouseSelect = (warehouse) => {
        const selectedWarehouse = `${warehouse}`;
        setSearchWarehouses(selectedWarehouse);
        setDropdownWarehouseVisible(false);

       
    }

const handleCityBlur = () => {
  // Код, який виконується, коли інпут втрачає фокус
  setDropdownCityVisible(false);
    };
    const handleWarehouseBlur = () => {
  // Код, який виконується, коли інпут втрачає фокус
  setDropdownWarehouseVisible(false);
    };
    console.log(searchCities.length);

    useEffect(() => {
        

        (searchCities.length === 0) &&  setDropdownCityVisible(false);
          
    }, [searchCities]);
    
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
                                value={formData.deliveryMethod}
                                onChange={handleInputChange}
                            >
                                <option value="Доставка на відділення">Доставка на відділення</option>
                                <option value="Курєрська доставка">Курєрська доставка</option>
                                
                            </Select>
                            <div>
      
                                <div style={{ position: 'relative' }}>

                                    <CostumerStatusinput
                                        autoComplete="off"
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={searchText}
                                        onChange={handleSearchTextChange}
                                        placeholder="Введіть назву міста"
                                        // onBlur={handleCityBlur} 
                                        onClick={() => { setDropdownCityVisible(searchCities.length <= 40); setDropdownWarehouseVisible(false); setDropdownCityVisible(searchCities.length !== 0 )}}
                                    />
                                    {isDropdownCityVisible && (
                                        <Citylist>
                                            <CityitemsBlock>
                                                {searchCities.map((searchCity) => (
                                                    <li
                                                        key={nanoid()}
                                                        onClick={() => {
                                                            handleCitySelect(searchCity.Description , searchCity.AreaDescription);
                                                        }}
                                                    >
                                                        <CityItem>
                                                            {searchCity.Description} , {searchCity.AreaDescription}
                                                        </CityItem>
                                                    </li>
                                                ))}
                                            </CityitemsBlock>
                                        </Citylist>
                                    )}
                                </div>
                            </div>
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
                                   
                       <div>
                                <div style={{ position: 'relative' }}>


                                     <CostumerStatusinput
                                        autoComplete="off"
                                        type="text"
                                        id="warehouse"
                                        name="warehouse"
                                        value={searchWarehouses}
                                        onChange={handleSearchTextChangeWarehose}
                                                    placeholder="Введіть адресу відділення"
                                                    // onBlur={handleWarehouseBlur} 
                                                    onClick={() => { setDropdownWarehouseVisible(searchCities.length <= 40); setDropdownCityVisible(false); handleWarehousesChange() }}
                                    />
                            {isDropdownWarehouseVisible && (
                                    <Citylist>
                                            <CityitemsBlock >
                                        
                                        {warehouses.filter((warehouse) =>
                                            warehouse.Description.toLowerCase().includes(searchWarehouses.toLowerCase())).map(warehouse => (
                                                <li
                                                    key={nanoid()}
                                                    onClick={() => {
                                                            handleWarehouseSelect(warehouse.Description);
                                                    }}>
                                                    <CityItem>
                                                        {warehouse.Description}
                                                        </CityItem>
                                                 </li>
                                            ))}
                                        </CityitemsBlock>
                                        </Citylist>
   
                                        )}
                                </div>
                            </div>  
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

                                <table cols="5">
                                    <thead style={{ bordeRadius: "25px" }}>
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
                                                    <ItemNameLink>{item.name} <br /> Код товару: {item.code}</ItemNameLink>
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
//619