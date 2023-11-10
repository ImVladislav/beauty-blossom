import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminDetail from '../../modules/AminPannel/AdminDetail';
import { Container } from '../../shared/styles/Container';
import { AdminBlock, FilterInput, StyledTr, Table, Td, Th } from './AdminPageStyled';


const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null); // Додано стан для вибраного замовлення
  const [orderNumberFilter, setOrderNumberFilter] = useState('');
const [dateFilter, setDateFilter] = useState('');
const [nameFilter, setNameFilter] = useState('');
const [emailFilter, setEmailFilter] = useState('');
const [amountFilter, setAmountFilter] = useState('');
const [statusFilter, setStatusFilter] = useState('');
const [paymentMethodFilter, setPaymentMethodFilter] = useState('');

  
  const filteredOrders = orders.filter(order => {
  return (
    order.orderNumber.includes(orderNumberFilter) &&
    order.createdAt.substr(0, 10).includes(dateFilter) &&
    (order.firstName + ' ' + order.lastName).includes(nameFilter) &&
    order.email.includes(emailFilter) &&
    order.amount.toString().includes(amountFilter) &&
    order.status.includes(statusFilter) &&
    order.paymentMethod.includes(paymentMethodFilter)
  );
});
  
  useEffect(() => {
    axios.get('https://beauty-blossom-backend.onrender.com/api/orders')
      .then(response => {
        const receivedOrders = response.data;
    
        setOrders(receivedOrders);
      })
      .catch(error => {
        console.error('Помилка отримання даних про замовлення', error);
      });
  }, []);

const handleOrderClick = (order) => {
  if (selectedOrder && selectedOrder._id === order._id) {
    // Якщо вже вибрано це замовлення, зніміть виділення (зробіть його нульовим)
    setSelectedOrder(null);
  } else {
    // Якщо на нове замовлення, встановіть його як вибране
    setSelectedOrder(order);
  }
};

  return (
    <Container>
      <AdminBlock>
        <h1>Замовлення</h1>
        <div>
          <FilterInput
            type="text"
            placeholder="Фільтр по номеру замовлення"
            value={orderNumberFilter}
            onChange={(e) => setOrderNumberFilter(e.target.value)}
          />
          <FilterInput
            type="text"
            placeholder="Фільтр по даті"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />
          <FilterInput
            type="text"
            placeholder="Фільтр по імені та прізвищу"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
          <FilterInput
            type="text"
            placeholder="Фільтр по email"
            value={emailFilter}
            onChange={(e) => setEmailFilter(e.target.value)}
          />
          <FilterInput
            type="text"
            placeholder="Фільтр по сумі"
            value={amountFilter}
            onChange={(e) => setAmountFilter(e.target.value)}
          />
          <FilterInput
            type="text"
            placeholder="Фільтр по статусу"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          />
          <FilterInput
            type="text"
            placeholder="Фільтр по методу оплати"
            value={paymentMethodFilter}
            onChange={(e) => setPaymentMethodFilter(e.target.value)}
          />
        </div>
        <Table>
          <thead>
            <tr>
              <Th>Номер замовлення</Th>
              <Th>Дата</Th>
              <Th>Покупець</Th>
              <Th>Контакти</Th>
              <Th>Загальна сума</Th>
              <Th>Статус</Th>
              <Th>Фін Статус</Th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
        <StyledTr
          key={order._id}
          onClick={() => handleOrderClick(order)}
           className={`order-row ${selectedOrder && selectedOrder._id === order._id ? 'selected-order' : ''} ${order.isOptUser ? 'yellow-row' : ''}`}
        >
          <Td>{order.orderNumber}</Td>
          <Td>{order.createdAt.substr(0, 10)}</Td>
          <Td>{order.firstName} {order.lastName}</Td>
          <Td>{order.number} {order.email}</Td>
          <Td>{order.amount} грн</Td>
          <Td>{order.status}</Td>
          <Td>{order.paymentMethod}</Td>
        </StyledTr>
            ))}
         
          </tbody>
        </Table>

        {selectedOrder && ( // Відображення детальної інформації, якщо вибрано замовлення
          <AdminDetail selectedOrder={selectedOrder} />
        )}
                
      </AdminBlock>
    </Container>
  );
};

export default AdminPage;