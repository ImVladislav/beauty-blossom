import React, { useState } from "react";

export const AdminEmailSenderPage = () => {
  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    try {
      const formData = new FormData(); // Створення об'єкта FormData
      console.log(selectedFile);
      formData.append("userpic", selectedFile, "chris.jpg");
      //   formData.append("image", selectedFile); // Додавання файлу до FormData
      console.log(formData);
      const response = await fetch("http://localhost:3000/api/email", {
        method: "POST",
        body: formData, // Встановлення FormData як тіла запиту
      });

      if (!response.ok) {
        throw new Error("Error uploading image.");
      }

      const data = await response.json();
      console.log("Image uploaded:", data.imageUrl);
      // Додаткові дії після успішного завантаження фото
    } catch (error) {
      console.error("Error uploading image:", error.message);
    }
  };

  return (
    <div>
      {/* <h1>Admin Email Sender Page</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Photo</button> */}
      <h1>Стрінка в розробці</h1>
    </div>
  );
};
