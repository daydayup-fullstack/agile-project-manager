import React from 'react';
import ReactDOM from 'react-dom';
import "./style/index.css";
import App from "./components/App/App";
import Panel from "./components/Panel/Panel";

ReactDOM.render(
  <React.StrictMode>
      <App>
          <Panel panelName={"Favorites"}/>
          <Panel panelName={"Recent Projects"}/>
      </App>
  </React.StrictMode>,
  document.getElementById('root')
);


