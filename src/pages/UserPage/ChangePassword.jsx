import React, { useState } from 'react';
import axios from 'axios';  // Додайте імпорт axios
import { ContactInformForm, ContactInformInput, ContactInformInputBlock, ContactInformSubButton, RedStar } from './UserPageStyled';
import { useSelector } from 'react-redux';
import { _idSelector } from '../../redux/auth/selectors';
import { toast } from "react-toastify";


const ChangePassword = () => {
  const id = useSelector(_idSelector);

  const [formData, setFormData] = useState({
    oldPassword: "",
    password: "",
  });

  const [activeTab, setActiveTab] = useState("контактна інформація");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.oldPassword === formData.password) {
    
   toast.error("Старий та новий паролі однакові.");
    return;
  }

  // Перевірка на довжину паролів
  if (formData.oldPassword.length < 6 || formData.password.length < 6) {
    toast.error("Пароль повинен містити більше 6 символів.");
    return;
  }

  try {
    // Відправлення POST-запиту на сервер
    const response = await axios.post(`https://beauty-blossom-backend.onrender.com/api/auth/changePassword/${id}`, {
      oldPassword: formData.oldPassword,
      newPassword: formData.password,
    });

    setFormData({
      oldPassword: "",
      password: "",
    });
      toast.info("Пароль змінено. Новий пароль набуде чинності через 2 хвилини.");

  } catch (error) {
    // Логіка обробки помилок
    if (error.response && error.response.status === 401) {
      
       toast.error("Ви ввели невірний діючий пароль.");
    } else {
      console.error("Помилка при відправці запиту:", error);
    }
  }
};
  return (
    <div>
      <ContactInformForm onSubmit={handleSubmit}>
        <ContactInformInputBlock className="form-group">
          <label style={{ whiteSpace: 'nowrap'}} htmlFor="oldPassword">СТАРИЙ ПАРОЛЬ<RedStar>*</RedStar></label>
          <ContactInformInput
            type="password"
            id="oldPassword"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
          />
        </ContactInformInputBlock>
          
        <ContactInformInputBlock className="form-group">
          <label htmlFor="password">НОВИЙ ПАРОЛЬ<RedStar>*</RedStar></label>
          <ContactInformInput
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </ContactInformInputBlock>
        <ContactInformSubButton type="submit">ЗБЕРЕГТИ</ContactInformSubButton>
      </ContactInformForm>
    </div>
  );
}

export default ChangePassword;