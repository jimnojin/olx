import initialState from './initialState';
import {
  IS_LOADING,
  FETCH_SUCCESS,
  SELECT_KEY,
  TOGGLE_EDIT,
  SAVE_KEY,
  ADD_VALUE
} from './constants';

/** Reducer */
export default (state = initialState, action) => {
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
    
    case SELECT_KEY:
      if (!state.data || state.data.length === 0) {
        return state;
      }  
      const selectedId = action.payload ? action.payload : state.data[0].id;

      return {
        ...state,
        data: state.data.map(key => {
          return {
            ...key,
            isSelected: key.id === selectedId
          };
        })
      };

    case TOGGLE_EDIT:
      return {
        ...state,
        isEditing: action.payload
      };
    case SAVE_KEY:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case ADD_VALUE:
      return {
        ...state,
        // @todo
      };

    default:
      return state
  }
}
