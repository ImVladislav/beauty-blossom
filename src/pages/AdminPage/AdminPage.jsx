import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminDetail from '../../modules/AminPannel/AdminDetail';
import { Container } from '../../shared/styles/Container';

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null); // Додано стан для вибраного замовлення

  const orderNumber = localStorage.getItem('orderNumber') || 1;

  useEffect(() => {
    axios.get('https://beauty-blossom-backend.onrender.com/api/orders')
      .then(response => {
        const receivedOrders = response.data;
        const ordersWithNumbers = receivedOrders.map((order, index) => ({
          ...order,
            orderNumber: orderNumber + index
          
        }));
          
         
        setOrders(ordersWithNumbers);
      })
      .catch(error => {
        console.error('Помилка отримання даних про замовлення', error);
      });
  }, [orderNumber]);

  const handleOrderClick = (order) => {
    setSelectedOrder(order); // Обробка кліку на строку
  };

    return (
      <Container>
    <div>
      <h1>Замовлення</h1>
      <table>
        <thead>
          <tr>
            <th>Номер замовлення</th>
            <th>Дата</th>
            <th>Покупець</th>
            <th>Контакти</th>
            <th>Загальна сума</th>
            <th>Статус</th>
            <th>Фін Статус</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id} onClick={() => handleOrderClick(order)}> {/* Додано обробку кліку */}
              <td>{order.orderNumber}</td>
              <td>{order.createdAt.substr(0, 10)}</td>
              <td>{order.firstName} {order.lastName}</td>
              <td>{order.number} {order.email}</td>
              <td>{order.amount} грн</td>
              <td>{order.status}</td>
                  <td>{order.paymentMethod}</td>
                  
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && ( // Відображення детальної інформації, якщо вибрано замовлення
              <AdminDetail selectedOrder={selectedOrder} />
                )}
                
            </div>
            </Container>
  );
};

export default AdminPage;