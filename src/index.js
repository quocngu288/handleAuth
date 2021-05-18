import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { RootReducer } from './Store/Reducer'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
//redux-thunk
import thunk from 'redux-thunk'
const store = createStore(RootReducer, applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
