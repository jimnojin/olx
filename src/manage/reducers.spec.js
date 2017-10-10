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

  it('fetchSuccess', () => {
    const key = new constants.Key();
    const data = [key];
    const expectedActions = [
      { type: constants.CANCEL_EDIT },
      { type: constants.SELECT_KEY, payload: data[0] },
      { type: constants.FETCH_SUCCESS, payload: data }
    ];
    const store = mockStore({ requests: {data: []} })

    store.dispatch(actions.fetchSuccess(data));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('selectKey', () => {
    const key = new constants.Key();
    const expectedActions = [
      { type: constants.CANCEL_EDIT },
      { type: constants.SELECT_KEY, payload: key }
    ];
    const store = mockStore({ requests: {data: []} })

    store.dispatch(actions.selectKey(key));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('saveKey', () => {
    const key = {};
    const expectedActions = [
      { type: constants.SAVE_KEY, payload: key },
      { type: constants.CANCEL_EDIT },
      { type: constants.SELECT_KEY, payload: key }
    ];
    const store = mockStore({ requests: {data: []}, key: { selected: {} } })

    store.dispatch(actions.saveKey(key));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('addKey', () => {
    const key = {};
    const expectedActions = [     
      { type: constants.CANCEL_EDIT },
      { type: constants.SELECT_KEY, payload: key },
      { type: constants.EDIT_KEY }
    ];
    const store = mockStore({ requests: {data: []}, key: { selected: {} } })

    store.dispatch(actions.addKey(key));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('addValue', () => {
    const expectedAction = {
      type: constants.ADD_VALUE
    };
    const realAction = actions.addValue();
    expect(realAction.type).toEqual(expectedAction.type);
    expect(realAction.payload.isEditing).toEqual(true);
  });

  it('editKey', () => {
    const expectedAction = {
      type: constants.EDIT_KEY
    };
    expect(actions.editKey()).toEqual(expectedAction);
  });

  it('cancelEdit', () => {
    const expectedAction = {
      type: constants.CANCEL_EDIT
    };
    expect(actions.cancelEdit()).toEqual(expectedAction);
  });

  it('saveValue', () => {
    const value = '123';
    const expectedAction = {
      type: constants.SAVE_VALUE,
      payload: value
    };
    expect(actions.saveValue(value)).toEqual(expectedAction);
  });

  it('deleteValue', () => {
    const value = '123';
    const expectedAction = {
      type: constants.DELETE_VALUE,
      payload: value
    };
    expect(actions.deleteValue(value)).toEqual(expectedAction);
  });
});