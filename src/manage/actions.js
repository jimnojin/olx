import uuid from 'uuid/v4';
import {
  Key,
  IS_LOADING,
  FETCH_SUCCESS,

  SELECT_KEY,
  EDIT_KEY,
  CANCEL_EDIT,
  SAVE_KEY,
  ADD_VALUE,
  SAVE_VALUE,
  DELETE_VALUE
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
    dispatch(cancelEdit());

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
    // reset edit state
    dispatch(cancelEdit());

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
    dispatch(cancelEdit());
  };
}

export function cancelEdit() {
  return {
    type: CANCEL_EDIT
  };
}

export function addValue() {
  return {
    type: ADD_VALUE,
    payload: { id: uuid(), value: '', description: '', isEditing: true } // or make it object like Key
  };  
} 

export function saveValue(value) {
  return {
    type: SAVE_VALUE,
    payload: value
  };  
} 

export function deleteValue(value) {
  return {
    type: DELETE_VALUE,
    payload: value
  };  
} 