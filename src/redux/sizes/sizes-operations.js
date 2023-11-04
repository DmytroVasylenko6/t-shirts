import axios from 'axios';
import {
  parseSizeRequest,
  parseSizeSuccess,
  parseSizeError,
} from './sizes-actions';

axios.defaults.baseURL = 'https://t-shirts-api.vercel.app/api';

export const sizesParse = () => dispatch => {
  dispatch(parseSizeRequest());

  axios
    .get('/sizes')
    .then(({ data }) => {
      dispatch(parseSizeSuccess(data.sizes));
    })
    .catch(error => dispatch(parseSizeError(error)));
};
