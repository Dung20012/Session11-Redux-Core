import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import alertReducer from './alertReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  alert: alertReducer,
});

export default rootReducer;
