import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./modules/components/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
       <BrowserRouter basename="beauty-blossom"> 
      <App />
      <GlobalStyle />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
