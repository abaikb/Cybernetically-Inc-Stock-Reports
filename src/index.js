import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import stockReportReducer from './reducers/stockReportReducer';
import paginationReducer from './reducers/paginationReducer';
import App from './App';

const rootReducer = combineReducers({
  stockReports: stockReportReducer,
  pagination: paginationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
