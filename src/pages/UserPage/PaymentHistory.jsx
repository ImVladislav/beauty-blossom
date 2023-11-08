import React, { useEffect, useState } from 'react';
import { PaymentHistoryTd, PaymentHistoryTh, PaymentPagination, PaymentPaginationButton } from './UserPageStyled';
import axios from 'axios';

const PaymentHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [paymentHistoryData, setPaymentHistoryData] = useState([]);

  useEffect(() => {
    // Виконати GET-запит при завантаженні компонента
    axios.get('https://beauty-blossom-backend.onrender.com/api/orders/byUser')
      .then((response) => {
        setPaymentHistoryData(response.data); // Встановити отримані дані
      })
      .catch((error) => {
        console.error('Помилка при отриманні даних:', error);
      });
  }, []);

  // Приклад даних історії оплати (можете замінити на свої дані)
  // const paymentHistoryData = [
  //   { date: '2023-10-01', orderNumber: '12345', status: 'Завершено', totalAmount: '$100', description:'Переглянути' },
  //   { date: '2023-10-01', orderNumber: '12345', status: 'Завершено', totalAmount: '$100', description: 'Переглянути' },
  //   { date: '2023-10-01', orderNumber: '12345', status: 'Завершено', totalAmount: '$100', description: 'Переглянути' },
  //   { date: '2023-10-01', orderNumber: '12345', status: 'Завершено', totalAmount: '$100', description: 'Переглянути' },
  //   { date: '2023-10-01', orderNumber: '12345', status: 'Завершено', totalAmount: '$100', description: 'Переглянути' },
  //   { date: '2023-10-01', orderNumber: '12345', status: 'Завершено', totalAmount: '$100', description: 'Переглянути' },
  //   { date: '2023-10-01', orderNumber: '12345', status: 'Завершено', totalAmount: '$100', description: 'Переглянути' },
  //   { date: '2023-10-01', orderNumber: '12345', status: 'Завершено', totalAmount: '$100', description: 'Переглянути' },
  //   { date: '2023-10-01', orderNumber: '12345', status: 'Завершено', totalAmount: '$100', description: 'Переглянути' },
  //   { date: '2023-10-01', orderNumber: '12345', status: 'Завершено', totalAmount: '$100', description: 'Переглянути' },
  //   { date: '2023-10-01', orderNumber: '12345', status: 'Завершено', totalAmount: '$100', description: 'Переглянути' },
  //   { date: '2023-10-01', orderNumber: '12345', status: 'Завершено', totalAmount: '$100', description: 'Переглянути' },
  //   { date: '2023-10-01', orderNumber: '12345', status: 'Завершено', totalAmount: '$100', description: 'Переглянути' },
               
  // ];

  // Розрахунок індексів для пагінації
const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = paymentHistoryData.slice(startIndex, endIndex);

  // Подія для зміни сторінки
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Генерація номерів сторінок
  const totalPages = Math.ceil(paymentHistoryData.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      <table>
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
            <tr key={index}>
              <PaymentHistoryTd>{item.date}</PaymentHistoryTd>
              <PaymentHistoryTd>{item.orderNumber}</PaymentHistoryTd>
              <PaymentHistoryTd>{item.status}</PaymentHistoryTd>
              <PaymentHistoryTd>{item.totalAmount}</PaymentHistoryTd>
              <PaymentHistoryTd>{item.description}</PaymentHistoryTd>
            </tr>
          ))}
        </tbody>
      </table>

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