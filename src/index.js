import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./components/App/App";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { app } from "./reducers";

const reducers = combineReducers({ app });
const store = createStore(reducers, {});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
