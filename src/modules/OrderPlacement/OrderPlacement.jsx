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

    
let firstWord = ''
    
const words = searchText.split(" "); // Розділити рядок за пробілами

if (words.length > 1) {
  firstWord = words[0]; // Перше слово
  console.log(firstWord); // Вивести перше слово
}

    const apiKey = 'c9cfd468abe7e624f872ca0e59a29184';
    
    const handleCityChange = (e) => {
       const allCity = []
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


        //         axios({
        //     method: 'post',
        //     url: "https://api.novaposhta.ua/v2.0/json/", requestData,
        //     headers: null,
        // })


        axios.post("https://api.novaposhta.ua/v2.0/json/", requestData)
            .then(response => {

                if (response.data.success) {
                    setSearchCities(response.data.data);
                    for (const searchCity of searchCities) {
                        allCity.push(searchCity); }
                   setResponceCities(allCity)}
            })
            .catch(error => {
                console.error("Помилка запиту до API Нової Пошти для населених пунктів", error);
            });
    }


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

    axios.post("https://api.novaposhta.ua/v2.0/json/", requestData)
        .then(response => {
            if (response.data.success) {
                // Оновити стан warehouses з отриманими даними
                setWarehouses(response.data.data);
            }
            console.log(response.data.data);
            console.log(warehouses); // Тут він дорівнюватиме попередньому значенню warehouses
            for (const warehouse of response.data.data) {
                allWarehouses.push(warehouse);
            }
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
                <h2>Оформление заказа</h2>
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
                <label htmlFor="deliveryMethod">Способ доставки</label>
                <label htmlFor="deliveryMethod">Способ доставки</label>
                <select id="deliveryMethod" name="deliveryMethod">
                    <option value="deliveryNP">Доставка в отделение Новой почты</option>
                    <option value="courierNP">Доставка курьером Новой почты на адрес</option>
                </select>
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


                    



                {/* <select id="responceCities" name="responceCities" value={selectedWarehouse} onChange={(e) => setSelectedWarehouse(e.target.value)}></select> */}
                        {responceCities && responceCities.length  > 0 && searchText.length > 2 &&
                            <>
                        <datalist id="citiesList">
                                <label htmlFor="responceCities">Оберіть населений пункт (склад)</label>
                                
                                    <option value="">Оберіть населений пункт</option>
                                    {responceCities.map(responceCity => (
                                        <option key={responceCity.Index1} value={`${responceCity.Description} ${responceCity.RegionsDescription} ${responceCity.AreaDescription}`} >{responceCity.Description} </option>
                                    ))}
                                    <label htmlFor="responceWarehouses"></label>
                                
                                    {/* <option value="">Оберіть відділення</option>
                                    {responceWarehouses.map(responceWarehouse => (
                                        <option key={responceWarehouse.WarehouseIndex} value={`${responceWarehouse.Description}`} >{responceWarehouse.Description}</option>
                                    ))}
                                 */}
                                
                            </datalist>
                    </>
                        
}
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
                {/* Додайте інші поля, такі як товари, фото, інформацію про замовлення і т. д. */}
            </OrderDetails>
            <OrderSummary>
                <h3>Замовлення</h3>
                <ul>
                    {/* Список товарів та інша інформація про замовлення */}
                </ul>
                <div className="order-total">
                    <p>Итого: 235.00 грн</p>
                    <p>Всего: 235.00 грн</p>
                </div>
                <label htmlFor="comments">Комментарий</label>
                <textarea id="comments" name="comments" rows="4"></textarea>
                <button>Завершити замовлення</button>
            </OrderSummary>
        </OrderForm>
    );
    };

export default OrderPlacement;
