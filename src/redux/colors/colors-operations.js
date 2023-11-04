import axios from 'axios';
import {
  addColorRequest,
  addColorSuccess,
  addColorError,
  updateColorRequest,
  updateColorSuccess,
  updateColorError,
  deleteColorRequest,
  deleteColorSuccess,
  deleteColorError,
  parseColorRequest,
  parseColorSuccess,
  parseColorError,
} from './colors-actions';
import _sortBy from 'lodash.sortby';

axios.defaults.baseURL = 'https://t-shirts-api.vercel.app/api';

export const colorsParse = () => dispatch => {
  dispatch(parseColorRequest());

  axios
    .get('/colors')
    .then(({ data }) => {
      dispatch(parseColorSuccess(_sortBy(data.colors, 'name')));
    })
    .catch(error => dispatch(parseColorError(error)));
};

export const colorAdd = newColor => dispatch => {
  const color = {
    name: newColor.name,
    number: newColor.number,
  };

  dispatch(addColorRequest());

  axios
    .post('/colors', color)
    .then(({ data }) => dispatch(addColorSuccess(data.color)))
    .catch(error => dispatch(addColorError(error)));
};

export const colorUpdate = ({ id, name, number }) => dispatch => {
  const color = {
    name,
    number,
  };

  dispatch(updateColorRequest());

  axios
    .put(`/colors/${id}`, color)
    .then(() => dispatch(updateColorSuccess({ id, name, number })))
    .catch(error => dispatch(updateColorError(error)));
};

export const colorDelete = id => dispatch => {
  dispatch(deleteColorRequest());

  axios
    .delete(`/colors/${id}`)
    .then(() => dispatch(deleteColorSuccess(id)))
    .catch(error => dispatch(deleteColorError(error)));
};
