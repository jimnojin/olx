export const FILTER = 'requests/FILTER';
export const IS_LOADING = 'requests/IS_LOADING';
export const FETCH_SUCCESS = 'requests/FETCH_SUCCESS';

const initialState = {
  isLoading: true,
  data: [],
  filterBy: null
}

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
