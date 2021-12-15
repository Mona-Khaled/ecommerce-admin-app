import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

//for simplicity we are creating "store" variable in our window object 'so we can access in browser'
window.store = store;
ReactDOM.render(
  //The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
