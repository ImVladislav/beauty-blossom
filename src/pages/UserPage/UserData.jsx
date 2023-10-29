import React, { useState } from "react";
import { ContactInformForm, ContactInformInput, ContactInformInputBlock, ContactInformSubButton, RedStar } from "./UserPageStyled";


const UserData = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

    return (
    <div className="cabinet-page">

      <div className="cabinet-content">
        {activeTab === "контактна інформація" && (
          <div className="profile-form">
            
            <ContactInformForm onSubmit={handleSubmit}>
              <ContactInformInputBlock className="form-group">
                <label htmlFor="email">EMAIL<RedStar>*</RedStar></label>
                <ContactInformInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </ContactInformInputBlock>
              <ContactInformInputBlock className="form-group">
                <label htmlFor="firstName">ІМЯ<RedStar>*</RedStar></label>
                <ContactInformInput
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                </ContactInformInputBlock>
              <ContactInformInputBlock className="form-group">
                <label htmlFor="lastName">ПРІЗВИЩЕ<RedStar>*</RedStar></label>
                <ContactInformInput
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </ContactInformInputBlock>
              <ContactInformInputBlock className="form-group">
                <label htmlFor="number">ТЕЛЕФОН<RedStar>*</RedStar></label>
                <ContactInformInput
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </ContactInformInputBlock>
              <ContactInformSubButton type="submit">ЗБЕРЕГТИ</ContactInformSubButton>
            </ContactInformForm>
          </div>
        )}
      </div>
            </div>

  );
};

export default UserData;