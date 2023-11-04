import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const token = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
});

const errorStatus = createReducer(false, {
  [authActions.errorStatus]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [authActions.loginSuccess]: () => true,
  [authActions.loginError]: () => false,
  [authActions.logoutSuccess]: () => false,
});

export default combineReducers({
  token,
  isAuthenticated,
  error,
  errorStatus,
});
