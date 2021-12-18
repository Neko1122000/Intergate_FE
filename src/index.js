import React from "react";
import ReactDOM from "react-dom";
import './css/index.css';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import BasePage from "./components/BasePage";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

reportWebVitals();
