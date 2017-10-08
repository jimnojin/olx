import { 
  MANAGE_DEFAULT_STATE,
  KEY_DEFAULT_STATE
 } from './initialState';
import {
  IS_LOADING,
  FETCH_SUCCESS,
  
  SELECT_KEY,
  NEW_KEY,
  EDIT_KEY,
  CANCEL_EDIT,
  SAVE_KEY
} from './constants';

/** Reducer for manage container */
export const manageReducer = (state = MANAGE_DEFAULT_STATE, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload
      };   
    
    case SAVE_KEY:
      const isUpdate = state.data.find(key => key.id === action.payload.id);

      if (isUpdate) {
        return {
          ...state,
          data: state.data.map(key => key.id === action.payload.id ? { ...key, ...action.payload } : key)
        }
      } 

      return {
        ...state,
        data: [...state.data, action.payload]
      }

    default:
      return state
  }
}

/** Reducer for key manipulation */
export const keyReducer = (state = KEY_DEFAULT_STATE, action) => {
  switch (action.type) {
    case SELECT_KEY:
      return {
        ...state,
        selected: action.payload
      };

    case EDIT_KEY:
      return {
        ...state,
        isEditing: true
      };

    case CANCEL_EDIT:
      return {
        ...state,
        isEditing: false
      };   
    
    default:
      return state
  }
}
