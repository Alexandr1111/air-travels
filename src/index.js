import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./store/store";
import './styles/reset.scss';

ReactDOM.render(
  <Provider store={store}>
    <App state={store.getState()} />
  </Provider>,
  document.getElementById('root')
);
