import {
  Key,
  IS_LOADING,
  FETCH_SUCCESS,
  
  SELECT_KEY,
  NEW_KEY,
  EDIT_KEY,
  CANCEL_EDIT,
  SAVE_KEY
} from './constants';

/** Manage actions */
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
    }, 300);
  };
}

export function fetchSuccess(data) {
  return (dispatch) => {
    dispatch(selectKey(data[0]));
    dispatch({
      type: FETCH_SUCCESS,
      payload: data.map(i => new Key(i))
    });
  };
}

/** Key Actions */
export function selectKey(key) {
  return dispatch => {
    // reset edit state
    dispatch(cancelEdit(key)); 
    
    // select new key
    dispatch({
      type: SELECT_KEY,
      payload: key
    });
  }
} 
export function addKey() {
  const key = new Key();

  return dispatch => {
    dispatch(selectKey(key));
    dispatch(editKey(key));
  };
} 
export function editKey() {
  return {
    type: EDIT_KEY
  };
} 
export function saveKey(key) {
  return dispatch => {
    // save the key
    dispatch({
      type: SAVE_KEY,
      payload: key
    });

    /* update selection */
    dispatch(selectKey(key));

    /* clear edit flag */
    dispatch(cancelEdit(key));
  };
} 
export function cancelEdit(key) {
  return {
    type: CANCEL_EDIT,
    payload: key
  };
} 