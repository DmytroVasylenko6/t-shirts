import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addColorRequest,
  addColorSuccess,
  addColorError,
  updateColorSuccess,
  deleteColorRequest,
  deleteColorSuccess,
  deleteColorError,
  parseColorRequest,
  parseColorSuccess,
  parseColorError,
  colorFilter,
} from './colors-actions';

const itemsReducer = createReducer([], {
  [parseColorSuccess]: (state, { payload }) => [...state, ...payload],
  [addColorSuccess]: (state, { payload }) => [...state, payload],
  [deleteColorSuccess]: (state, { payload }) =>
    state.filter(color => color._id !== payload),
  [updateColorSuccess]: (state, { payload }) =>
    state.forEach(color => {
      if (color._id === payload.id) {
        color.name = payload.name;
        color.number = payload.number;
      }
    }),
});

const filterReducer = createReducer('', {
  [colorFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [parseColorRequest]: () => true,
  [parseColorSuccess]: () => false,
  [parseColorError]: () => false,
  [addColorRequest]: () => true,
  [addColorSuccess]: () => false,
  [addColorError]: () => false,
  [deleteColorRequest]: () => true,
  [deleteColorSuccess]: () => false,
  [deleteColorError]: () => false,
});

const colorsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  load: loading,
});

export default colorsReducer;
