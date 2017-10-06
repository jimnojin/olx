import {
  IS_LOADING,
  FETCH_SUCCESS,
  FILTER
} from './RequestsReducers';

export const isLoading = bool => {
  return {
    type: IS_LOADING,
    payload: bool
  };
}

export function fetchData() {
  return (dispatch) => {
    dispatch(isLoading(true));

    setTimeout(() => {
      dispatch(isLoading(false));
      
      const data = require('./requests.mock.json');
      dispatch(fetchSuccess(data));
    }, 1000);
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