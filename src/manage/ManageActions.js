import {
  IS_LOADING,
  FETCH_SUCCESS,
  SELECT_KEY,
  TOGGLE_EDIT,
  SAVE_KEY,
  ADD_VALUE
} from './constants';

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
      
      const data = require('./keys.mock.json');
      dispatch(fetchSuccess(data));
      dispatch(selectKey());
    }, 1000);
  };
}

export function fetchSuccess(data) {
  return {
    type: FETCH_SUCCESS,
    payload: data
  };
}

export function selectKey(id) {
  return {
    type: SELECT_KEY,
    payload: id
  };
}
