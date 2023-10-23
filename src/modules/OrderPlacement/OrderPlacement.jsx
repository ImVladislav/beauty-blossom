import React, { useEffect, useState } from 'react';
import {
    CostumerStatus,
    CostumerStatusItem,
    OrderDetails,
    OrderForm,
    OrderSummary,
} from './OrderPlacementStyled';
import { useSelector } from 'react-redux';
import { loggedInSelector } from '../../redux/auth/selectors';
import RegisterForm from '../Header/LogIn/RegisterForm';
import LoginForm from '../Header/LogIn/LoginForm';
import WithOutRegForm from '../Header/LogIn/WithOutRegForm';
import axios from 'axios';



const OrderPlacement = () => {
    const isLogin = useSelector(loggedInSelector);
    const [selectedWarehouse, setSelectedWarehouse] = useState("");
    const [customerType, setCustomerType] = useState("registered");
    const [responceCities, setResponceCities] = useState([]); // Список міст для вибору
    const [warehouses, setWarehouses] = useState([]); // Список відділень
    const [searchCities, setSearchCities] = useState([]); // Список населених пунктів (складів) для обраного міста
    const [responceWarehouses, setResponceWarehouses] = useState([]); // Обраний населений пункт (склад)
    const [searchText, setSearchText] = useState(""); // Текст для пошуку міст
    const [searchWarehouses, setSearchWarehouses] = useState("");
    const [formData, setFormData] = useState({
        customerType: "registered",
        deliveryMethod: "deliveryNP",
        city: "",
        selectedWarehouse: "choose",
        paymentMethod: "paymentDetails",
        comments: "",
    });
    
    const handleFormSubmit = () => {
        console.log("Форма була відправлена з наступними даними:", formData);
    };

        const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };



let firstWord = ''
    
const words = searchText.split(" "); // Розділити рядок за пробілами

if (words.length > 1) {
  firstWord = words[0]; // Перше слово
  console.log(firstWord); // Вивести перше слово
}

    const apiKey = 'c9cfd468abe7e624f872ca0e59a29184';
    
const handleCityChange = () => {
    const allCity = [];
    const requestData = {
        apiKey: apiKey,
        modelName: "Address",
        calledMethod: "getSettlements",
        methodProperties: {
            Page: "1",
            FindByString: searchText,
            Limit: "20"
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
            data.data.forEach((searchCity) => {
                allCity.push(searchCity);
            });
            setResponceCities(allCity);
        }
    })
    .catch((error) => {
        console.error("Помилка запиту до API Нової Пошти для населених пунктів", error);
    });
};
    const handleWarehousesChange = (e) => {
        const allWarehouses = [];
        const requestData = {
            apiKey: apiKey,
            modelName: "Address",
            calledMethod: "getWarehouses",
            methodProperties: {
                CityName: firstWord,
                Page: "1",
                Limit: "30",
                Language: "UA",
                WarehouseId: searchWarehouses,
            }
        };

     
        const ewq = {
            Accept: "application/json, text/plain, */*",
            // [Content-Type]: "application/json",
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
                    // Оновити стан warehouses з отриманими даними
                    setWarehouses(data.data);
                }
                console.log(data.data);
                console.log(warehouses); // Тут він дорівнюватиме попередньому значенню warehouses
                const allWarehouses = data.data.map(warehouse => warehouse);
                setResponceWarehouses(allWarehouses);
                console.log(responceWarehouses);
            })
            .catch(error => {
                console.error("Помилка запиту до API Нової Пошти для населених пунктів", error);
            });
    }
    
useEffect(() => {
    handleCityChange();
    console.log(responceCities);
    console.log(responceCities.map(responceCity => responceCity.Description));
    handleWarehousesChange()
}, [searchText]);

useEffect(() => {
    // Оновити стан warehouses після завантаження даних
    setResponceWarehouses(warehouses);
    console.log(responceWarehouses);
}, [warehouses]);



        const handleSearchTextChange = (e) => {
            const text = e.target.value;
            setSearchText(text);
        }

    return (
        <OrderForm>
            <OrderDetails>
                <h2>Оформлення замовлення</h2>
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
                {customerType === "not-registered" && <RegisterForm />}
                {customerType === "without-registered" && <WithOutRegForm />}
                <label htmlFor="deliveryMethod"> Доставка здійснюється перевізником нова пошт</label>

                <OrderDetails>
                    <label htmlFor="city">Оберіть місто</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={searchText}
                        onChange={handleSearchTextChange}
                        list="citiesList" // Вказуємо ідентифікатор <datalist> для цього інпуту
                        placeholder="Введіть назву міста"
                    />
                        {responceCities && responceCities.length  > 0 && searchText.length > 2 &&
                            <>
                        <datalist id="citiesList">
                                <label htmlFor="responceCities">Оберіть населений пункт (склад)</label>
                                
                                    <option value="">Оберіть населений пункт</option>
                                    {responceCities.map(responceCity => (
                                        <option key={responceCity.Index1} value={`${responceCity.Description} ${responceCity.RegionsDescription} ${responceCity.AreaDescription}`} >{responceCity.Description} </option>
                                    ))}
                                    <label htmlFor="responceWarehouses"></label>
                            </datalist>
                    </>  }
                </OrderDetails>

                {responceWarehouses.length > 0 && (
    <OrderDetails>
        <label htmlFor="responceWarehouses">Оберіть відділення</label>
<select
    id="responceWarehouses"
    name="responceWarehouses"
    value={selectedWarehouse}
    onChange={(e) => setSelectedWarehouse(e.target.value)}
>
    <option value="choose">Оберіть відділення</option>
    {responceWarehouses.map(warehouse => (
        <option key={warehouse.WarehouseIndex} value={warehouse.Description}>
            {warehouse.Description}
        </option>
    ))}
</select>
    </OrderDetails>
)}
                <div>
                    <label htmlFor="paymentMethod">Способ оплаты</label>
                    <select id="paymentMethod" name="paymentMethod">
                        <option value="paymentDetails">Оплата по реквизитам</option>
                        <option value="monobank">MONOBANK VISA/MasterCard</option>
                        <option value="cashOnDelivery">Наложенный платеж (для заказов от 300 грн)</option>
                    </select>
                </div>
                
            </OrderDetails>
            <OrderSummary>
                <h3>Замовлення</h3>
                <ul>
                    
                </ul>
                <div className="order-total">
                    <p>Итого: 235.00 грн</p>
                    <p>Всего: 235.00 грн</p>
                </div>
                <label htmlFor="comments">Комментарий</label>
                <textarea id="comments" name="comments" rows="4"></textarea>
                <button onClick={handleFormSubmit}>Завершити замовлення</button>
            </OrderSummary>
        </OrderForm>
    );
    };

export default OrderPlacement;