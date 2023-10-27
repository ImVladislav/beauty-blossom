import React from 'react';
import { InfoBlock, ProductBlock, ProductImage, TableHeaders, TableItems, TableTrBlock } from './AdminDetailStyled';
import { Table } from 'react-bootstrap';

const AdminDetail = ({ selectedOrder }) => {
  return (
    <div>
          <h2>Детальна інформація про замовлення</h2>
        <ProductBlock>  
      <Table>
        <tbody>
          <TableTrBlock>
            <TableItems>Продукт</TableItems>
            <TableItems>Ціна</TableItems>
            <TableItems>Кількість</TableItems>
            <TableItems>Сумма</TableItems>
          </TableTrBlock>
          {selectedOrder.orderedItems.map((item, index) => (
              <TableTrBlock key={index}>
              <td style={{ display: 'flex', border:'none'}}>
                <ProductImage src={item.images} alt="product" />
                <p>{item.name}</p>
              </td>
              <TableItems>{item.amount} грн</TableItems>
              <TableItems>{item.quantity}</TableItems>
              <TableItems>{item.amount}</TableItems>
            </TableTrBlock>
          ))}
        </tbody>
      </Table>
      <Table>
        <tbody>
          <TableTrBlock>
                          <TableItems>Дані замовлення</TableItems>
                      </TableTrBlock>
                      <tr>
            <TableItems colSpan="3">
              <p>Створено: {selectedOrder.createdAt.substr(0, 10)}</p>
              <p>Покупець: {selectedOrder.firstName} {selectedOrder.lastName}</p>
              <p>Телефон: {selectedOrder.number}</p>
              <p>Email: {selectedOrder.email}</p>
                              <p>Адреса доставки: {selectedOrder.city}, </p>
                              <p>{selectedOrder.warehouse}</p>
            </TableItems>
          </tr>
        </tbody>
    
              </Table>
              </ProductBlock>
    </div>
    
  );
};

export default AdminDetail;
