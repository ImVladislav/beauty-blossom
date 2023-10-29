import React, { useState } from 'react'
import { ContactInformForm, ContactInformInput, ContactInformInputBlock, ContactInformSubButton, RedStar } from './UserPageStyled'
import { toast } from "react-toastify";

const ChangePassword = () => {

        const [formData, setFormData] = useState({
            Password: "",
        });
   
        const [activeTab, setActiveTab] = useState("контактна інформація");

        const handleChange = (e) => {
            const { name, value } = e.target;
            // const password = formData.password
            // const oldPassword = formData.oldPassword
            
            // if (password === oldPassword) {
                
                setFormData({
                    ...formData,
                    [name]: value,
                });
            // } else {
            //     toast.error("Попередный пароль введенно не вірно!");
            // }

        };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


      const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
                <label htmlFor="email">НОВИЙ ПАРОЛЬ<RedStar>*</RedStar></label>
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

export default ChangePassword
