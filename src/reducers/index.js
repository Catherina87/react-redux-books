import { combineReducers } from 'redux';

import { booksReducer } from './books';
import { cartReducer } from './cart';

const rootReducer = combineReducers({
  books: booksReducer,
  cart: cartReducer,
});

export default rootReducer;
