import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStockReports } from './actions/stockReportActions';
import StockReportList from './components/StockReportList';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStockReports());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Cybernetically Inc Stock Reports</h1>
      <StockReportList />
      <Pagination />
    </div>
  );
}

export default App;
