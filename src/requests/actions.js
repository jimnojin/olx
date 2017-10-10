import {
  IS_LOADING,
  FETCH_SUCCESS,
  FILTER
} from './constants';

export const isLoading = bool => {
  return {
    type: IS_LOADING,
    payload: bool
  };
}

export function fetchData() {
  const data = require('./requests.mock.json');

  return (dispatch) => {
    dispatch(isLoading(true));

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch(isLoading(false));
        dispatch(fetchSuccess(data));
        resolve();
      }, 1000);
    });    
  };
}

export function fetchSuccess(data) {
  return {
    type: FETCH_SUCCESS,
    payload: data
  };
}

export const filter = (filterBy) => {
  return {
    type: FILTER,
    payload: filterBy
  };
}