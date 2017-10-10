import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from './actions';
import * as constants from './constants';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Request reducers', () => {
  it('isLoading', () => {
    const state = true;
    const expectedAction = {
      type: constants.IS_LOADING,
      payload: state
    };
    expect(actions.isLoading(state)).toEqual(expectedAction);
  });

  it('fetchData', () => {
    const data = require('./requests.mock.json');

    const expectedActions = [
      { type: constants.IS_LOADING, payload: true },
      { type: constants.IS_LOADING, payload: false },
      { type: constants.FETCH_SUCCESS, payload: data }
    ]
    const store = mockStore({ requests: {data: []} })

    return store.dispatch(actions.fetchData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  })

  it('fetchSuccess', () => {
    const data = [];
    const expectedAction = {
      type: constants.FETCH_SUCCESS,
      payload: data
    };
    expect(actions.fetchSuccess(data)).toEqual(expectedAction);
  });

  it('filter', () => {
    const filterBy = 'denied';
    const expectedAction = {
      type: constants.FILTER,
      payload: filterBy
    };
    expect(actions.filter(filterBy)).toEqual(expectedAction);
  });
});