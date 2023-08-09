import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import stockReportReducer from '../../reducers/stockReportReducer';
import StockReportList from '../StockReportList';

test('renders stock reports table', () => {
  const initialState = [
  ];

  const store = createStore(stockReportReducer, { stockReports: initialState });

  const { getByText } = render(
    <Provider store={store}>
      <StockReportList />
    </Provider>
  );

  const tableHeader = getByText('Symbol');
  expect(tableHeader).toBeInTheDocument();
});
