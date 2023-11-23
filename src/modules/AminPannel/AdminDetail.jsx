import React, { useState } from "react";
import {
  ProductBlock,
  ProductImage,
  TableItems,
  TableTrBlock,
} from "./AdminDetailStyled";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";

const AdminDetail = ({ selectedOrder }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedOrder, setEditedOrder] = useState({ ...selectedOrder });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = async () => {
    try {
      // Створюємо новий масив orderedItems без поля _id
      const updatedOrderedItems = editedOrder.orderedItems.map((item) => {
        // Копіюємо об'єкт item без поля _id
        const { _id, ...updatedItem } = item;
        return updatedItem;
      });

      // Створюємо окремий об'єкт dataToUpdate без поля orderedItems
      const dataToUpdate = {
        status: editedOrder.status,
        orderedItems: updatedOrderedItems,
        firstName: editedOrder.firstName,
        lastName: editedOrder.lastName,
        number: editedOrder.number,
        email: editedOrder.email,
        city: editedOrder.city,
        warehouse: editedOrder.warehouse,
        deliveryMethod: editedOrder.deliveryMethod,
        paymentMethod: editedOrder.paymentMethod,
        amount: editedOrder.amount,
      };

      // Відправляємо PUT-запит на сервер з `dataToUpdate`
      const response = await axios.put(
        `https://beauty-blossom-backend.onrender.com/api/orders/${editedOrder._id}`,
        dataToUpdate
      );
      console.log(dataToUpdate);
      // Перевіряємо відповідь сервера
      if (response.status === 200) {
      setIsEditing(false);
      // setEditedOrder({ ...selectedOrder }); 
      } else {
        // Обробка помилки, якщо потрібно
        console.error("Помилка оновлення даних на сервері");
      }
    } catch (error) {
      console.error("Помилка відправки запиту на сервер:", error);
    }
  };

  useEffect(() => {
 setEditedOrder({ ...selectedOrder })
  }, [selectedOrder]);

const handleInputChange = (e, fieldName) => {
  const { value } = e.target;
  setEditedOrder((prevOrder) => ({
    ...prevOrder,
    [fieldName]: value,
  }));
  };

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
            {editedOrder.orderedItems.map((item, index) => (
              <TableTrBlock key={index}>
                <td style={{ display: "flex", border: "none" }}>
                  <ProductImage src={item.images} alt="product" />
                  <p>{item.name}</p>
                </td>
                <TableItems>{item.amount / item.quantity} грн</TableItems>
                <TableItems>{item.quantity}</TableItems>
                <TableItems>{item.amount}</TableItems>
              </TableTrBlock>
            ))}
          </tbody>
        </Table>
      </ProductBlock>

      <Table>
        <tbody>
          <TableTrBlock>
            <TableItems>Дані замовлення</TableItems>
          </TableTrBlock>
          <tr>
            <TableItems colSpan="3">
              <p>Створено: {selectedOrder.createdAt.substr(0, 10)}</p>
              <p>
                Покупець:
                {isEditing ? (
                  <input
                    type="text"
                    value={editedOrder.firstName}
                    onChange={(e) => handleInputChange(e, "firstName")}
                  />
                ) : (
                  editedOrder.firstName
                )}{" "}
                {isEditing ? (
                  <input
                    type="text"
                    value={editedOrder.lastName}
                    onChange={(e) => handleInputChange(e, "lastName")}
                  />
                ) : (
                  editedOrder.lastName
                )}
              </p>
              <p>
                Телефон:{" "}
                {isEditing ? (
                  <input
                    type="text"
                    value={editedOrder.number}
                    onChange={(e) => handleInputChange(e, "number")}
                  />
                ) : (
                  editedOrder.number
                )}
              </p>
              <p>
                Email:{" "}
                {isEditing ? (
                  <input
                    type="text"
                    value={editedOrder.email}
                    onChange={(e) => handleInputChange(e, "email")}
                  />
                ) : (
                  editedOrder.email
                )}
              </p>
              <p>
                Адреса доставки:
                {isEditing ? (
                  <tr>
                    <input
                      type="text"
                      value={editedOrder.city}
                      onChange={(e) => handleInputChange(e, "city")}
                    />
                    <input
                      type="text"
                      value={editedOrder.warehouse}
                      onChange={(e) => handleInputChange(e, "warehouse")}
                    />
                  </tr>
                ) : (
                  <span>
                    {editedOrder.city}, {editedOrder.warehouse}
                  </span>
                )}
              </p>
              <p>
                Статус товару:{" "}
                {isEditing ? (
                  <select
                    name="status"
                    value={editedOrder.status}
                    onChange={(e) => handleInputChange(e, "status")}
                  >
                    <option value="Новий">Новий</option>
                    <option value="Прийняте в роботу">Прийняте в роботу</option>
                    <option value="Збирається">Збирається</option>
                    <option value="Зібрано">Зібрано</option>
                    <option value="Відправлено">Відправлено</option>
                    <option value="Відміна">Відміна</option>
                  </select>
                ) : (
                  editedOrder.status
                )}
              </p>
              <p>
                 Коментар:{" "}{editedOrder.comments !==undefined? editedOrder.comments : 'кроментар відсутній'}
              </p>
            </TableItems>
          </tr>
        </tbody>
      </Table>

      {isEditing ? (
        <div>
          <button onClick={handleSaveClick}>Зберегти</button>
          <button onClick={handleCancelClick}>Відмінити</button>
        </div>
      ) : (
        <div>
          <button onClick={handleEditClick}>Редагувати</button>
        </div>
      )}
    </div>
  );
};

export default AdminDetail;
