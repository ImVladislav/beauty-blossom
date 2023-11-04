import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { store } from "./redux/store";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./shared/styles/GlobalStyle";
import ScrollToTopMobile from "./shared/components/ScrollToTopMobile/ScrollToTopMobile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/beauty-blossom">
        <App />
        <ScrollToTopMobile />
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
    </Provider>
  </React.StrictMode>
);
