import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  parseSizeRequest,
  parseSizeSuccess,
  parseSizeError,
} from './sizes-actions';

const itemsReducer = createReducer(
  {},
  {
    [parseSizeSuccess]: (state, { payload }) => payload,
  },
);

const loading = createReducer(false, {
  [parseSizeRequest]: () => true,
  [parseSizeSuccess]: () => false,
  [parseSizeError]: () => false,
});

const sizesReducer = combineReducers({
  items: itemsReducer,
  load: loading,
});

export default sizesReducer;
