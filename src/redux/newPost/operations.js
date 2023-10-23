import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://api.novaposhta.ua/v2.0/json";

export const getNew = createAsyncThunk(
  "/",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post("/");
       console.log(res.data);

      return res.data;
    } catch (error) {
      return rejectWithValue("Server error");
    }
  }
);
// api key c9cfd468abe7e624f872ca0e59a29184

    //     axios.post("https://api.novaposhta.ua/v2.0/json/", requestData)
    //         .then(response => {
    //             // console.log(response.data.data);
    //             if (response.data.success) {
                    
    //                 const addresses = response.data.data[0].Addresses;; // Отримуємо список адрес
    //         console.log(addresses);
                   
    //             }
    //         })
    //         .catch(error => {
    //             console.error("Помилка запиту до API Нової Пошти для населених пунктів", error);
    //         });
    // }