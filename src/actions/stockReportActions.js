import axios from 'axios';
import { API_BASE_URL, API_KEY_PARAM } from '../config';

export const FETCH_STOCK_REPORTS_SUCCESS = 'FETCH_STOCK_REPORTS_SUCCESS';

export const fetchStockReports = () => async dispatch => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stock/market/list/mostactive?${API_KEY_PARAM}`);
    dispatch({ type: FETCH_STOCK_REPORTS_SUCCESS, payload: response.data });
  } catch (error) {
  }
};
