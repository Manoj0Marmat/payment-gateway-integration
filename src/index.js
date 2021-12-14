import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles";

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
    <ul className="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>

      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </>,
  document.getElementById("root")
);
