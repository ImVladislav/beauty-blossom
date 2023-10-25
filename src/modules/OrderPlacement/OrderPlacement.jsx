import React, { useEffect, useState } from 'react';
import {
    CostumerStatus,
    CostumerStatusItem,
    DeliveryInfoBlock,
    Form,
    OrderDetails,
    OrderForm,
    OrderSummary,
} from './OrderPlacementStyled';
import { useSelector } from 'react-redux';
import { loggedInSelector, userSelectorEmail, userSelectorNumber, userSelectorfirstName, userSelectorlastName } from '../../redux/auth/selectors';
import LoginForm from '../Header/LogIn/LoginForm';
import RegisterForm from '../Header/LogIn/RegisterForm';
import { selectCart } from '../../redux/cart/selectors';
import { Amount, AmountBlock, CounterBlock, DescriptionBlock, GoodsBlock, ImageBlock, ItemNameLink, PriceBlock, Thumb } from '../Header/ShopingList/ShopingListStyled';


const OrderPlacement = () => {
    const isLogin = useSelector(loggedInSelector);
    const [selectedWarehouse, setSelectedWarehouse] = useState("");
    const [customerType, setCustomerType] = useState("registered");
    const [responceCities, setResponceCities] = useState([]); // Список міст для вибору
    const [warehouses, setWarehouses] = useState([]); // Список відділень
    const [searchCities, setSearchCities] = useState([]); // Список населених пунктів (складів) для обраного міста
    const [searchText, setSearchText] = useState(""); // Текст для пошуку міст
    const [searchWarehouses, setSearchWarehouses] = useState("");
    const [filtredWarehouses, setFiltredWarehouses] = useState([]);
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
        paymentMethod: "paymentDetails",
        comments: "",
    });

    const cartItems = useSelector(selectCart);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    let firstWord = ''
    const words = searchText.trim().split(" ");

    if (words.length > 1) {
        firstWord = words[0];

    }

    if (firstWord !== '') { 
    //         const filtered = warehouses.filter(warehouse =>
// warehouse.toLowerCase().includes(firstWord.toLowerCase())
                    const filtered = warehouses.filter(warehouse =>
    warehouse === firstWord )

        //  setFiltredWarehouses(filtered)
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
                Limit: "40"
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
                    setWarehouses(data.data);
                    console.log(data.data);
                }

            })
            .catch(error => {
                console.error("Помилка запиту до API Нової Пошти для населених пунктів", error);
            });
    }
    
useEffect(() => {
    if (searchText) {
        handleCityChange();
       console.log(firstWord);
    }
}, [searchText]);

useEffect(() => {
        
        handleWarehousesChange();

}, [ firstWord]);

const handleSearchTextChange = (e) => {
    const text = e.target.value;
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


const handleFormSubmit = (e) => {
  e.preventDefault();

 const orderedItems = [];

cartItems.forEach((item) => {
  orderedItems.push({
    ProductId: item.id,
    name: item.name,
    code: item.code,
    quantity: itemQuantities[item.id],
    amount: item.price * itemQuantities[item.id],
  });
});
    
    setFormData((prevData) => ({
        ...prevData,
        email: userEmail || prevData.email,
        firstName: userFirstName || prevData.firstName,
        lastName: userLastName || prevData.lastName,
        number: userNumber || prevData.number,
        city: searchText,
        warehouse: selectedWarehouse,
        paymentMethod: prevData.paymentMethod,
        comments: prevData.comments,
        orderedItems: orderedItems,
    amount: totalCost,
  }));

    console.log(formData);
    console.log(orderedItems);
};

    




  // Функція для оформлення замовлення
  const placeOrder = () => {
    // Створюємо масив товарів у корзині з відповідними кількостями
    const orderedItems = cartItems.map((item) => ({
      ...item,
      quantity: itemQuantities[item.id],
    }));

    
  };

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
                {customerType === "not-registered" && !isLogin && <RegisterForm />}
                {customerType === "without-registered" || isLogin ? (
                        <Form onSubmit={handleFormSubmit}>
                            <DeliveryInfoBlock>
                            <label htmlFor="email">Ваш Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email || ''}
                                onChange={handleInputChange}
                            />

                            <label htmlFor="firstName">Ім'я</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName || ''}
                                onChange={handleInputChange}
                            />

                            <label htmlFor="lastName">Прізвище</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName || ''}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="number">Номер телефону</label>
                            <input
                                type="text"
                                id="number"
                                name="number"
                                value={formData.number || ''}
                                onChange={handleInputChange}
                            />

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
                            <datalist id="citiesList">
                                <label htmlFor="responceCities">Оберіть населений пункт (склад)</label>
                                
                                <option value="">Оберіть населений пункт</option>
                                {responceCities.map(responceCity => (
                                    <option key={responceCity.Index1} value={`${responceCity.Description} ${responceCity.RegionsDescription} ${responceCity.AreaDescription}`} >{responceCity.Description} </option>
                                ))}
                                <label htmlFor="responceWarehouses"></label>
                            </datalist>
                                      
                                
                            {responceCities.length === 0 && (
                                <OrderDetails>
                                    <label htmlFor="searchWarehouses">Оберіть відділення</label>
                                        <input
                                            type="text"
                                        id="warehouse"
                                        name="warehouse"
                                            value={searchWarehouses}
                                            placeholder="Пошук відділення"
                                            list="warehousesList"
                                        onChange={(e) => setSearchWarehouses(e.target.value)}
                                        />
                                        <datalist id="warehousesList">
                                        <option value="">Оберіть відділення</option>
                                        {warehouses.filter((warehouse) =>
                                        warehouse.Description.toLowerCase().includes(searchWarehouses.toLowerCase())).map(warehouse => (
                                            <option key={warehouse.WarehouseIndex} value={warehouse.Description}>
                                                {warehouse.Description}
                                            </option>
                    ))}
                                        </datalist>
                                    
                                    </OrderDetails>
                                    
                                    
                            )}
                            <div>
                                <label htmlFor="paymentMethod">Способ оплаты</label>
                                <select id="paymentMethod" name="paymentMethod" onChange={handleInputChange}>
                                    <option value="paymentDetails">Оплата за реквізитами</option>
                                    
                                    <option value="cashOnDelivery">Післяплата</option>
                                </select>
                            </div>

                            <label htmlFor="deliveryMethod"> Доставка здійснюється перевізником нова пошт</label>

                            </DeliveryInfoBlock>
                
                            <OrderSummary>
                                <h3>Замовлення</h3>

            <GoodsBlock>
              {cartItems.map((item) => (
                <Thumb key={item.id}>
                  <ImageBlock>
                    <img src={item.images} alt="itemImage" />
                  </ImageBlock>
                  <DescriptionBlock>
                          <ItemNameLink>{item.name} </ItemNameLink>
                          <ItemNameLink>{item.code}</ItemNameLink>
                  </DescriptionBlock>
                  <AmountBlock>
                    <CounterBlock>

                      {itemQuantities[item.id]}
  
                    </CounterBlock>
                  </AmountBlock>
                  <PriceBlock>
                    {item.price * itemQuantities[item.id]} грн
                  </PriceBlock>
                </Thumb>
              ))}
            </GoodsBlock>
          
          <Amount>Всього: {totalCost} грн</Amount>

                                 
                                
                                <label htmlFor="comments">Комментарий</label>
                                <textarea id="comments" name="comments" rows="4" onChange={handleInputChange}></textarea>
                                <button type="submit">Відправити</button>
                            </OrderSummary>
                        </Form>) : (null)}
      </OrderDetails>
    </OrderForm>
  );
};

export default OrderPlacement;

//411