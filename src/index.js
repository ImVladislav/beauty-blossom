/* global fbq */

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { persistor, store } from "./redux/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./shared/styles/GlobalStyle";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";
import axios from "axios"; // Імпорт axios, якщо його ще немає

// Ініціалізація пікселя Meta
const pixelId = '789745059892711'; // Ваш Pixel ID
window.fbq = function() {
  window.fbq.callMethod ?
    window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
};
window.fbq.push = window.fbq;
window.fbq.version = '2.0';
window.fbq.queue = [];
fbq('init', pixelId); // Ініціалізація пікселя
fbq('track', 'PageView'); // Трекінг PageView

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <BrowserRouter basename="/">
            <App />
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <GlobalStyle />
          </BrowserRouter>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
