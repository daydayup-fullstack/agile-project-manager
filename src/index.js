import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./components/App/App";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { project, user, workspace } from "./reducers";
import thunk from "redux-thunk";

const middleware = [thunk];
const reducers = combineReducers({
  user,
  workspace,
  project,
});
const store = createStore(reducers, {}, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
