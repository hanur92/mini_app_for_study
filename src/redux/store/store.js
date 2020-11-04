import reducer from "../reducers/";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "../../App";
import ReactDOM from "react-dom";
import React from "react";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
