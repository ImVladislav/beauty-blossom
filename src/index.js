import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { persistor, store } from "./redux/store";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./shared/styles/GlobalStyle";
import ScrollToTopMobile from "./shared/components/ScrollToTopMobile/ScrollToTopMobile";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <BrowserRouter>  */}
        {/* <BrowserRouter basename="beauty-blossom">  */}
        <BrowserRouter basename="/">
          <App />
          {/* <ScrollToTopMobile /> */}
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
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
