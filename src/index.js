import React from 'react';
import ReactDOM from 'react-dom';
import "./style/index.css";
import App from "./components/App/App";

import { createStore } from "redux";
import { Provider } from "react-redux"
import rootReducer from "./reducers";

let initialStore = {};
const store = createStore(rootReducer, initialStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


