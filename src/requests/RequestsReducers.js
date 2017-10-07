import initialState from './initialState';
import {
  FILTER,
  IS_LOADING,
  FETCH_SUCCESS
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

    case FILTER:
      return {
        ...state,
        filterBy: action.payload
      };

    default:
      return state
  }
}
