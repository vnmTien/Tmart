import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import App from "./App";
import { BrowserRouter } from 'react-router-dom'
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover = {false}
        />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
