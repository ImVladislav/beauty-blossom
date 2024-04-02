import React, { useState } from "react";
import axios from "axios";

export const AdminEmailSenderPage = () => {
  const [files, setFiles] = useState([]);
  const [text, setText] = useState("");

  const handleFileChange = (e) => {
    setFiles([...files, ...e.target.files]); // Додавання нових файлів до існуючого списку файлів
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("file", file); // Додавання кожного файлу до FormData
    });
    formData.append("text", text);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/email/sendemail",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Помилка:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} multiple />
      {/* Дозволяє вибрати декілька файлів */}
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Введіть текст для листа"
      />
      <button type="submit">Відправити</button>
    </form>
  );
};

export default AdminEmailSenderPage;
