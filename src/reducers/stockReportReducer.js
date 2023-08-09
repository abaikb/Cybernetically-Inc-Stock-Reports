import { FETCH_STOCK_REPORTS_SUCCESS } from '../actions/stockReportActions';

const initialState = [];

const stockReportReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_REPORTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default stockReportReducer;
