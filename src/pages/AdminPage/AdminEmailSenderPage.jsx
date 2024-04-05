import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import {
  Button,
  Container,
  DeleteButton,
  Form,
  Input,
  Li,
  Textarea,
  Ul,
} from "./AdminEmailSenderPageStyled";

export const AdminEmailSenderPage = () => {
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filter, setFilter] = useState("");
  const [copiedContacts, setCopiedContacts] = useState([]);
  const [toEmails, setToEmails] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...files, ...e.target.files]);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("file", file);
    });
    formData.append("title", title);
    formData.append("text", text);
    formData.append("to", JSON.stringify(toEmails));
    formData.append("subject", subject);

    try {
      const response = await axios.post(
        // "http://localhost:3000/api/email/sendemail",

        "https://beauty-blossom-backend.onrender.com/api/email/sendemail",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.info("Пошта успішно відправлена");
      setCopiedContacts([]);
    } catch (error) {
      console.error("Помилка:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          // "http://localhost:3000/api/searchUser",

          "https://beauty-blossom-backend.onrender.com/api/searchUser",

          {
            filter,
          }
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error("Помилка при отриманні результатів:", error);
      }
    };

    if (filter.trim() !== "") {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [filter]);

  const handleCopyContact = (firstName, lastName, email, number) => {
    const copiedContact = `${firstName} ${lastName}, ${email}, ${number}`;
    if (!copiedContacts.find((contact) => contact === copiedContact)) {
      setCopiedContacts([...copiedContacts, copiedContact]);
      setToEmails([...toEmails, email]);
    }
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = [...copiedContacts];
    updatedContacts.splice(index, 1);
    setCopiedContacts(updatedContacts);

    const updatedToEmails = [...toEmails];
    updatedToEmails.splice(index, 1);
    setToEmails(updatedToEmails);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="subject"
          value={subject}
          onChange={handleSubjectChange}
          placeholder="Тема листа"
        />
        <Input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Привітання"
        />
        <Textarea
          name="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Введіть текст для листа"
        />
        <Input type="file" onChange={handleFileChange} multiple />
        <Button type="submit" disabled={copiedContacts.length === 0}>
          Відправити
        </Button>
      </Form>

      <Input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Фільтр за ім'ям, прізвищем, email, номером"
      />

      {filter.trim() !== "" && (
        <Ul>
          {searchResults
            .filter(
              (result) =>
                result.firstName.toLowerCase().includes(filter.toLowerCase()) ||
                result.lastName.toLowerCase().includes(filter.toLowerCase()) ||
                result.email.toLowerCase().includes(filter.toLowerCase()) ||
                result.number.toString().includes(filter)
            )
            .slice(0, 10)
            .map((result) => (
              <Li key={result._id}>
                {result.firstName} {result.lastName}, {result.email},{" "}
                {result.number}
                <DeleteButton
                  onClick={() =>
                    handleCopyContact(
                      result.firstName,
                      result.lastName,
                      result.email,
                      result.number
                    )
                  }
                >
                  Додати
                </DeleteButton>
              </Li>
            ))}
        </Ul>
      )}

      {copiedContacts.length > 0 && (
        <div>
          <h3>Список контактів до відправки:</h3>
          <Ul>
            {copiedContacts.map((contact, index) => (
              <Li key={index}>
                {contact}
                <DeleteButton onClick={() => handleDeleteContact(index)}>
                  Видалити
                </DeleteButton>
              </Li>
            ))}
          </Ul>
        </div>
      )}
    </Container>
  );
};

export default AdminEmailSenderPage;
