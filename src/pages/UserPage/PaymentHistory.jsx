import React, { useEffect, useState } from 'react';

import { DetailTableThumb, PaymentHistoryTd, PaymentHistoryTh, PaymentHistoryTr, PaymentPagination, PaymentPaginationButton, Table, } from './UserPageStyled';

import axios from 'axios';


const PaymentHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [paymentHistoryData, setPaymentHistoryData] = useState([]);
  const [openedOrder, setOpenedOrder] = useState(null);
  const [openedOrderDetails, setOpenedOrderDetails] = useState(null);


  useEffect(() => {
    // Виконати GET-запит при завантаженні компонента
    axios.get('https://beauty-blossom-backend.onrender.com/api/orders/byUser')
      .then((response) => {
        console.log(response.data);
        setPaymentHistoryData(response.data); // Встановити отримані дані
      })
      .catch((error) => {
        console.error('Помилка при отриманні даних:', error);
      });
  }, []);


const toggleOrderDetails = (item ) => {
  setOpenedOrder((prevOrder) => (prevOrder === item ? null : item));
  console.log(openedOrder);
 console.log(item);
  setOpenedOrderDetails((prevDetails) => (prevDetails === item ? null : item.orderedItems));
};
  // Розрахунок індексів для пагінації
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = paymentHistoryData.slice(startIndex, endIndex);
  console.log(paymentHistoryData);

  // Подія для зміни сторінки
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Генерація номерів сторінок
  const totalPages = Math.ceil(paymentHistoryData.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  // Функція для форматування дати
  const formatDate = (dateTimeString) => {
    const formattedDate = new Date(dateTimeString).toISOString().split('T')[0];
    return formattedDate;
  };
  return (
    <div>
      <DetailTableThumb>
      <Table>
        <thead>
          <tr>
            <PaymentHistoryTh>ДАТА </PaymentHistoryTh>
            <PaymentHistoryTh>НОМЕР </PaymentHistoryTh>
            <PaymentHistoryTh>СТАТУС </PaymentHistoryTh>
            <PaymentHistoryTh> СУМА</PaymentHistoryTh>
            <PaymentHistoryTh>ПЕРЕГЛЯД</PaymentHistoryTh>
          </tr>
        </thead>
        <tbody>
{currentData.map((item, index) => (
    <PaymentHistoryTr
    key={index}
    className={openedOrder === item ? "selected" : ""}
  >
    <PaymentHistoryTd>{formatDate(item.createdAt)}</PaymentHistoryTd>
    <PaymentHistoryTd>{item.orderNumber}</PaymentHistoryTd>
    <PaymentHistoryTd>{item.status}</PaymentHistoryTd>
    <PaymentHistoryTd>{item.amount}</PaymentHistoryTd>
    <PaymentHistoryTd>
      <button onClick={() => toggleOrderDetails(item)}>Відкрити деталі</button>
    </PaymentHistoryTd>
  </PaymentHistoryTr>
))}

        </tbody>
      </Table>
{openedOrder !== null && (
    <Table>
      <thead>
        <tr>
          <PaymentHistoryTh>Назва товару</PaymentHistoryTh>
          <PaymentHistoryTh>Кількість</PaymentHistoryTh>
          <PaymentHistoryTh>Ціна</PaymentHistoryTh>
          <PaymentHistoryTh>Сума</PaymentHistoryTh>
        </tr>
      </thead>
      <tbody>
        {openedOrderDetails.map((product, productIndex) => (
          <tr key={productIndex}>
            <PaymentHistoryTd>{product.name}</PaymentHistoryTd>
            <PaymentHistoryTd>{product.quantity}</PaymentHistoryTd>
            <PaymentHistoryTd>{product.amount}</PaymentHistoryTd>
            <PaymentHistoryTd>{product.quantity * product.amount}</PaymentHistoryTd>
          </tr>
        ))}
      </tbody>
    </Table>
)}
</DetailTableThumb>

      {/* Номерована пагінація */}
      <PaymentPagination className="pagination">
        {pageNumbers.map((pageNumber) => (
       <PaymentPaginationButton
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={pageNumber === currentPage ? 'current' : ''}
          >   
            {pageNumber}
          </PaymentPaginationButton>
        ))}
      </PaymentPagination>
    </div>
  );
};

export default PaymentHistory;