import React from 'react';
import ReactDOM from 'react-dom';
import {HarperDBProvider} from 'use-harperdb'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import reducer from './Store/reducer'
import reportWebVitals from './reportWebVitals';


let store =  createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HarperDBProvider url ={process.env.REACT_APP_URL}  user = {process.env.REACT_APP_USER} password = {process.env.REACT_APP_PASSWORD}>
        <Provider store = {store} >
          <App />
        </Provider>
      </HarperDBProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
