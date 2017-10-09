import { 
  MANAGE_DEFAULT_STATE,
  KEY_DEFAULT_STATE
 } from './initialState';
import {
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
      
    case ADD_VALUE:
      return {
        ...state,
        selected: {
          ...state.selected,
          values: [...state.selected.values, action.payload]
        }
      };

    case SAVE_VALUE:
      return {
        ...state,
        selected: {
          ...state.selected,
          values: state.selected.values.map(v => {
            if (v.id === action.payload.id) {
              return {
                ...v,
                isEditing: false,
                value: action.payload.value,
                description: action.payload.description
              };
            }

            return v;
          })
        }
      };

    case DELETE_VALUE:
      return {
        ...state,
        selected: {
          ...state.selected,
          values: state.selected.values.filter(v => v.id !== action.payload.id)
        }
      };
    
    default:
      return state
  }
}
