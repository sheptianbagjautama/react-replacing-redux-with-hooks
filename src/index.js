import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/products-context";
import configureProductsStore from "./hooks-store/products-store";
import App from "./App";
import "./index.css";

configureProductsStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
